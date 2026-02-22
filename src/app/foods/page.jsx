import Card from "../components/Card/page";
import Title from "../components/Title/page";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods || [];
};
const foods = await getFoods();

export const metadata = {
  title: "Explore Foods",
  description: "Explore the best foods in Bangladesh"
}

const FoodsPage = async () => {
  await new Promise((r) => setTimeout(r, 200));
  return (
    <div>
      <Title>
        Explore Foods <span className="text-yellow-400">({foods.length})</span>
      </Title>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
