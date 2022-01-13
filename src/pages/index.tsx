import Head from "next/head";
import { Footer } from "../components/footer";
import Header from "../components/header";
import { Pizza } from "../components/pizza";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="container flex items-center justify-center p-4 mx-auto">
        <main>
          <div className="my-36">
            <h1 className="font-extrabold text-9xl font-MonumentExtended">
              HAPEFOOD
            </h1>
            <h3 className="text-5xl font-bold uppercase font-barlow">
              Next generation Ape Food Recipes
            </h3>
            <h3 className="text-2xl font-barlow">
              This page is a tribute to{" "}
              <a className="font-bold hover:underline">HAPEBEAST</a> and offers
              HAPE recipes. Have fun trying them out!
            </h3>
          </div>
          <Pizza />
        </main>
      </div>
      <Footer />
    </>
  );
}
