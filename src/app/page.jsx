import Link from "next/link";

export default function Home() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Experience the Taste of{" "}
            <span className="text-yellow-400">Authentic Flavors</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover delicious handcrafted meals made with fresh ingredients and
            authentic spices. JoyFood brings comfort, quality, and unforgettable
            taste straight to your table.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/foods"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-sm hover:bg-yellow-300 transition duration-300"
            >
              Explore Foods
            </Link>

            <Link
              href="/reviews"
              className="px-6 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-sm hover:border-yellow-400/50 hover:text-yellow-400 transition duration-300"
            >
              See Reviews
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-6 shadow-xl">
            <img
              className="w-105 object-contain drop-shadow-2xl"
              src="/samosa.png"
              alt="Delicious Food"
            />

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-sm shadow-lg">
              🔥 Hot & Fresh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
