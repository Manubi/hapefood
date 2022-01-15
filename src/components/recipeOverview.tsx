import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Duration", description: "1 to 2 hours" },
  {
    name: "Serves",
    description: "for 2 lovely people",
  },
  {
    name: "Difficulty",
    description: "Not easy. Will probably take a couple tries...",
  },
];

export function RecipeOverview() {
  const video1 = "https://vm.tiktok.com/ZMLJsyWHy/";
  return (
    <div className="bg-white">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-monument sm:text-4xl">
            HAPE Pizza
          </h2>
          <p className="mt-4 text-gray-500">
            Try this delicous homemade pizza recipe. It promises a ROI of
            10.000% in less then 24hrs. To good to be true!
          </p>

          <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="pt-4 border-t border-gray-200">
                <dt className="font-medium text-gray-900 font-barlow">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/pizza">
            <a className="inline-block px-4 py-2 mt-6 text-base font-medium text-black bg-white border-2 border-black rounded-md hover:bg-gray-200 font-barlow">
              mhmmm
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-12">
          <img
            src="/pizza2.jpg"
            alt="Awesome pizza"
            className="bg-gray-100 rounded-lg aspect-square w-80"
          />
          <img
            src="/pizza1.png"
            alt="Awesome pizza"
            className="bg-gray-100 rounded-lg aspect-square w-80"
          />
        </div>
        <div>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@alexanderkoslowski_/video/7021869940802145542"
            data-video-id="7021869940802145542"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@alexanderkoslowski_"
                href="https://www.tiktok.com/@alexanderkoslowski_"
              >
                @alexanderkoslowski_
              </a>{" "}
              Fail 😆{" "}
              <a
                title="foryou"
                target="_blank"
                href="https://www.tiktok.com/tag/foryou"
              >
                #foryou
              </a>{" "}
              <a
                title="nass"
                target="_blank"
                href="https://www.tiktok.com/tag/nass"
              >
                #nass
              </a>{" "}
              #pipi{" "}
              <a
                title="girl"
                target="_blank"
                href="https://www.tiktok.com/tag/girl"
              >
                #girl
              </a>{" "}
              <a
                title="boy"
                target="_blank"
                href="https://www.tiktok.com/tag/boy"
              >
                #boy
              </a>{" "}
              @paola.mar1a{" "}
              <a
                target="_blank"
                title="♬ Originalton - Alexander Koslowski"
                href="https://www.tiktok.com/music/Originalton-7021869725592423174"
              >
                ♬ Originalton - Alexander Koslowski
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
        </div>
      </div>
    </div>
  );
}
