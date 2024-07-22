import AppLink from "../apps/AppLink";
import Wrapper from "../general/wrapper";

const testimonials = [
  {
    id: 1,
    quote:
      "Amazing! I negotiated a great price for a fantastic gig. This platform feels just like a real-life market!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "Bargaining with sellers is so much fun! I was able to get a discount and the freelancer delivered high-quality work.",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Love the negotiation aspect! It adds a bit of excitement and lets me find the best value for my projects.",
    attribution: "Chris Paul, Phoenix",
  },
];

export default function Promo() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto overflow-hidden xl:px-8">
          <img
            alt=""
            className="h-full w-full object-cover object-center"
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
          />
        </div>
        <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white dark:via-black" />
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            id="sale-heading"
          >
            Get the best deal & Haggle like a pro!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600 dark:text-default-400">
            Skip fixed prices and negotiate your gigs just like in a real-life
            market. Find the perfect fit and price for your needs.
          </p>
          <AppLink
            className="mt-6 inline-block w-full rounded-md border border-primary  px-8 py-3 font-medium dark:text-white  sm:w-auto"
            href="#"
          >
            Find your perfect gig & haggle for the best price
          </AppLink>
        </div>
      </section>

      {/* Testimonials */}
      <Wrapper>
        <section
          aria-labelledby="testimonial-heading"
          className="relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-default-600"
              id="testimonial-heading"
            >
              What are people saying?
            </h2>

            <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.id} className="sm:flex lg:block">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0"
                    height={18}
                    viewBox="0 0 24 18"
                    width={24}
                  >
                    <path
                      d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                    <p className="text-lg text-gray-600 dark:text-default-400">
                      {testimonial.quote}
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900 dark:text-default-500">
                      {testimonial.attribution}
                    </cite>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}
