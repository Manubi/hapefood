import { Footer } from "../components/footer";
import { Friends } from "../components/friends";
import Header from "../components/header";
import { RecipeOverview } from "../components/recipeOverview";
import { RecipeOverview2 } from "../components/recipeOverview2";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[url('/hapes.webp')]">
        <div className="container flex items-center justify-center p-4 mx-auto">
          <main>
            <div className="max-w-6xl text-center my-36">
              <h1 className="text-5xl font-extrabold text-white md:text-9xl font-monument">
                HAPE<span className="italic">FOOD</span>
              </h1>
              <h3 className="text-xl font-bold text-white uppercase md:text-3xl font-monument">
                Next generation Ape Food Recipes
              </h3>
              <h3 className="text-xl font-light text-white md:text-2xl font-barlow">
                This page is a tribute to{" "}
                <a
                  className="font-bold text-white underline cursor-pointer hover:font-extrabold"
                  href="https://www.hapebeast.com"
                  target="_blank"
                >
                  HAPEBEAST
                </a>{" "}
                and the ape multiverse. HAPE<span className="italic">FOOD</span>{" "}
                aims to become part of this multiverse. Have fun trying it out!
              </h3>
            </div>
          </main>
        </div>
      </div>
      <RecipeOverview />
      <Friends />
      <RecipeOverview2 />
      <Footer />
    </>
  );
}
