/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  //   { name: "Solutions", href: "#" },
  //   { name: "Pricing", href: "#" },
  //   { name: "Docs", href: "#" },
  //   { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-black">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-black lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <h1 className="text-3xl font-extrabold text-white font-MonumentExtended">
                H<span className="transform rotate-180">A</span>PE
                <span className="italic">FOOD</span>
              </h1>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block px-4 py-2 text-base font-medium text-black bg-white border border-transparent rounded-md hover:bg-gray-200"
            >
              Send Recipe
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}