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
    description: "Not easy. Will probably take a couple tries",
  },
];

export function RecipeOverview() {
  return (
    <div className="bg-white">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
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
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/pizza">
            <a className="inline-block px-4 py-2 mt-6 text-base font-medium text-black bg-white border-2 border-black rounded-md hover:bg-gray-200">
              mhmmm
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/pizza.png"
            alt="Awesome pizza"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
