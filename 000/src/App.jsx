import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="Pepperoni, cheese, sauce n all"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Hawaiian"
        description="Ham, pineapple"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Americano"
        description="French fries, hot dog, gross stuff"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
