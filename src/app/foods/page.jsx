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

const FoodsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

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
