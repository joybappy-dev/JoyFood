import Link from "next/link";

const FoodDetails = async ({ params }) => {
  const getFood = async () => {
    const { foodId } = await params;
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${foodId}`,
    );
    const data = await res.json();
    return data.details;
  };

  const food = await getFood();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="relative rounded-sm overflow-hidden border border-white/10 bg-white/20 backdrop-blur-sm">
          <img
            src={food?.foodImg}
            alt={food?.title}
            className="w-full h-[450px] object-cover"
          />
          <span className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-sm shadow-lg">
            ৳ {food?.price}
          </span>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white">{food?.title}</h1>

          {/* Category + Area */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1 text-sm bg-yellow-400 text-black rounded-sm font-medium">
              {food?.category}
            </span>
            <span className="px-4 py-1 text-sm bg-white/10 text-white rounded-sm border border-white/20">
              {food?.area}
            </span>
          </div>

          {/* Description Placeholder */}
          <p className="text-gray-300 leading-relaxed">
            A delicious {food?.category?.toLowerCase()} dish from {food?.area}.
            Made with premium ingredients and prepared with authentic techniques
            to bring you the best taste experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-sn hover:bg-yellow-300 transition">
              Order Now
            </button>

            <Link
              href="/foods"
              className="border border-white/20 px-6 py-3 rounded-sm text-white hover:bg-white/10 transition"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-white/20"></div>

      {/* Video Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Watch Recipe Video
        </h2>

        <div className="aspect-video rounded-sm overflow-hidden border border-white/10 bg-white/20">
          <iframe
            className="w-full h-full"
            src={food?.video?.replace("watch?v=", "embed/")}
            title={food?.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
