# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application
FROM node:18-alpine

# Install serve to serve the built application
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/out ./out

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "out", "-l", "3000"]
