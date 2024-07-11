import Cookies from "js-cookie";

export const setTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set("accessToken", accessToken, { expires: 14 });
  Cookies.set("refreshToken", refreshToken, { expires: 14 });
};

export const getAccessToken = () => Cookies.get("accessToken");
export const getRefreshToken = () => Cookies.get("refreshToken");

export const clearTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

// import Cookies from "js-cookie";
// import CryptoJS from "crypto-js";

// const SECRET_KEY = "your-secret-key"; // Use a strong key and keep it secret

// const encryptToken = (token: string): string => {
//   return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
// };

// const decryptToken = (encryptedToken: string): string | null => {
//   try {
//     const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
//     return bytes.toString(CryptoJS.enc.Utf8);
//   } catch (error) {
//     console.error("Error decrypting token:", error);
//     return null;
//   }
// };

// export const setTokens = (accessToken: string, refreshToken: string) => {
//   const encryptedAccessToken = encryptToken(accessToken);
//   const encryptedRefreshToken = encryptToken(refreshToken);
//   Cookies.set("accessToken", encryptedAccessToken, { expires: 14 });
//   Cookies.set("refreshToken", encryptedRefreshToken, { expires: 14 });
// };

// export const getAccessToken = (): string | null => {
//   const encryptedAccessToken = Cookies.get("accessToken");
//   return encryptedAccessToken ? decryptToken(encryptedAccessToken) : null;
// };

// export const getRefreshToken = (): string | null => {
//   const encryptedRefreshToken = Cookies.get("refreshToken");
//   return encryptedRefreshToken ? decryptToken(encryptedRefreshToken) : null;
// };

// export const clearTokens = () => {
//   Cookies.remove("accessToken");
//   Cookies.remove("refreshToken");
// };
