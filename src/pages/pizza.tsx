import { Footer } from "../components/footer";
import { Friends } from "../components/friends";
import Header from "../components/header";
import { PizzaRecipe } from "../components/pizzaRecipe";

export default function Pizza() {
  return (
    <>
      <Header />
      <div className="container flex items-center justify-center max-w-6xl p-4 mx-auto my-16">
        <PizzaRecipe />
      </div>
      <Friends />
      <Footer />
    </>
  );
}
