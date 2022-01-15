/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Duration", description: "30 minutes if you're still sleepy" },
  {
    name: "Serves",
    description: "a single person",
  },
  {
    name: "Difficulty",
    description: "101 of ape food",
  },
];

export function RecipeOverview2() {
  return (
    <div className="bg-white">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-monument sm:text-4xl">
            HAPE Omelette
          </h2>
          <p className="mt-4 text-gray-500">
            With this omlette you'll go to the moon. Stay tuned for more coming
            soon!
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
          <p className="inline-block px-4 py-2 mt-6 text-base font-medium text-black bg-white border-2 border-black rounded-md hover:bg-gray-200 font-barlow">
            Coming soon...
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/omlete1.jpg"
            alt="pan with veggies"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="/omlete2.jpg"
            alt="raw omlete"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="/omlete3.jpg"
            alt="omlete with H as logo"
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="/logo_white.png"
            alt="hape logo"
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
