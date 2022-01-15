export default function Header() {
  return (
    <header className="bg-black">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-black lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">HAPEFOOD</span>
              <h1 className="text-2xl font-extrabold text-white md:text-3xl font-monument">
                H<span className="transform rotate-180">A</span>PE
                <span className="italic">FOOD</span>
              </h1>
            </a>
          </div>
          <div className="ml-4 space-x-4 md:ml-10">
            <a
              href="https://hapebeast.com"
              target="_blank"
              className="inline-block px-4 py-2 text-base font-extrabold text-black bg-white border border-transparent rounded-md font-monument hover:bg-gray-200"
            >
              HAPEBEAST
            </a>
            <a
              href="mailto: pomfritat@gmail.com"
              className="hidden px-2 py-2 text-base font-medium text-black bg-white border border-transparent rounded-md md:px-4 md:inline-block font-barlow hover:bg-gray-200"
            >
              Send Recipe
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
