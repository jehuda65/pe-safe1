export default function Services() {
  return (
    <>
      <nav className="bg-gradient-to-tr from-white via-sky-100 to-sky-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                id="burger"
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  x-description="Icon when menu is closed"
                  x-state:on="Menu closed"
                  x-state:off="Menu open"
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  x-description="Icon when menu is open"
                  x-state:on="Menu open"
                  x-state:off="Menu closed"
                  className="hidden h-6 w-6 active:max-h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-16 w-auto"
                  src="img/logo.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-16 w-auto"
                  src="img/logo.png"
                  alt="Workflow"
                />
              </div>
              <div className="sm:ml-6 hidden sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="bg-gray-900 text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="about"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="services"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="team"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#contact-us"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer space-x-2 p-2 border-2 border-slate-900 rounded-lg hover:bg-slate-900 hover:rounded-lg hover:p-2 hover:text-emerald-400">
              <img className="h-6" src="img/phone-icon.png" alt="call" />
              <p className="hidden md:block">020 7183 7649</p>
            </div>
          </div>
          <div className="sm:hidden " id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded text-base font-medium"
                aria-current="page"
              >
                Home
              </a>

              <a
                href="about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="false"
              >
                About
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-chain bg-no-repeat text-emerald-400 text-lg md:text-2xl font-bold px-5 py-6 text-center">
        Secure IT and knowledge is a
        <span className="text-white"> 'necessary'</span> requirement
        <div className="px-5 py-3 text-sm md:text-base font-mono text-white font-light">
          With digitally disrupted business models and IT hardware changing so
          fast, a secure IT platform and service are required for competitive
          success.
        </div>
      </div>

      <div className="bg-sky-600 text-white text-center">
        <p className="text-xl font-bold pt-4">
          <span className="text-emerald-400">Holistic</span> digital asset
          protection
        </p>
        <p className="pb-4 font-light p-4">
          We address IT and knowledge asset security from 3 perspectives:
        </p>
        <div className="flex flex-col space-y-4 md:flex-row py-6">
          <a href="#Hardware">
            <div className="bg-building bg-top mx-6 rounded py-2 shadow-md shadow-slate-800 hover:opacity-50 cursor-pointer">
              Hardware and software security management
            </div>
          </a>
          <div className="bg-building bg-middle mx-6 rounded py-2 shadow-inner-lg shadow-black hover:opacity-50 cursor-pointer">
            Security in your IT development and software deployment
          </div>
          <div className="bg-building bg-bottom mx-6 rounded py-2 shadow-md shadow-slate-800 hover:opacity-50 cursor-pointer">
            IT security mindset: Training and auditing
          </div>
        </div>
      </div>

      <div id="Hardware" className="text-center py-6">
        <p className="text-lg font-bold">
          Hardware and software security management
        </p>
        <p>Secure your own managed IT device service.</p>
        <ul className="md:hidden list-disc pl-44 text-left">
          <li>Tablets</li>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>Desktop PCs</li>
          <li>Networks</li>
        </ul>
      </div>

      <div className="bg-sky-600 text-center py-3 text-white">
        <p className="text-lg font-bold py-2">
          Security in your IT development and software{" "}
        </p>
        <p className="text-base font-thin">
          AWS: Build and secure your infrastructure with PE SAFE
        </p>
        <div className="flex flex-col md:flex-row px-3 py-3 font-mono md:text-left">
          <div className="bg-gradient-to-br from-sky-900 to-slate-800 p-3">
            <p className="text-emerald-400">- AWS migration and setup</p>
            <p>
              We help organisations migrate their on-premises infrastructure to
              the cloud. We have in-house resources and extensive migration
              experience to support you along your journey.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-900 to-slate-800 p-3">
            <p className="text-emerald-400">- AWS infrastructure Reviews</p>
            <p>
              We review your AWS infrastructure against the following: Operation
              excellence Security Reliability Performance efficiency Cost
              optimisation Sustainability
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">Solutions</p>
        <p>
          We have a range of solutions designed to combat industry specific
          problems with a business led approach to powerful technology and
          strong technical abilities.
        </p>
      </div>
    </>
  );
}
