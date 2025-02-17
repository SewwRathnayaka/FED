function Hero() {
  return (
    <section className="px-8 md:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">

        {/* Left Content Section */}
        <div className="flex flex-col justify-center gap-4 p-16">
          <span className="inline-block bg-[#febc26] text-black text-xs font-medium px-2 py-1 rounded-full w-fit">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-6xl font-semibold leading-none">
            Premium Product <br /> Online Shop
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a 
            href="/shop"
            className="inline-block bg-black text-white font-medium py-2 px-4 rounded-md w-fit"
          >
            Shop Now
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
