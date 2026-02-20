import React from "react";
import Card from "../components/Card/page";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    { cache: "no-store" },
  );
  const data = await res.json();
  return data.foods || [];
};
const foods = await getFoods();

const FoodsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h3 className="text-4xl font-semibold mb-8">
        Explore Foods (<span className="text-yellow-400">{foods.length}</span>)
      </h3>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
