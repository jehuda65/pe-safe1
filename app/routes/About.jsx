export default function About() {
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
                    className="text-slate-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-emerald-400 transition"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="about"
                    className="bg-gray-900 text-emerald-400 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    About
                  </a>

                  <a
                    href="services"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    Services
                  </a>

                  <a
                    href="team"
                    className="text-slate-900 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition"
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
            <div className="flex cursor-pointer space-x-2 p-2 border-2 border-slate-900 rounded-lg hover:bg-slate-900 hover:rounded-lg hover:p-2 hover:text-emerald-400 transition">
              <img className="h-6" src="img/phone-icon.png" alt="call" />
              <p className="hidden md:block">020 7183 7649</p>
            </div>
          </div>
          <div className="sm:hidden " id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded text-base font-medium"
                aria-current="page"
              >
                Home
              </a>

              <a
                href="about"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="false"
              >
                About
              </a>

              <a
                href="services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>

              <a
                href="team"
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
      <div className="bg-shake bg-cover bg-center text-2xl text-slate-800 font-bold text-center py-8 md:text-4xl ">
        Planet Earth - PE Safe
        <hr className="w-3/4 mx-auto mt-4 border-emerald-400" />
        <p className="font-mono text-sm md:text-xl pt-6 px-12 text-left md:text-center">
          A practical, results-based consultancy for all your cyber-security
          needs
        </p>
      </div>
      <div className="text-sm">
        <div className="bg-gradient-to-t from-white to-sky-600 p-6 text-white font-semibold md:text-xl md:py-20 md:px-32">
          <div>
            When our view of the wold is 2.5 inches wide, who and what can we
            trust?
          </div>
          <br /> <br />
          <div className="text-slate-800 font-semibold md:text-right">
            ...In the darkest and toughest days, the idea of PE Safe was born.
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:px-28 md:py-14 md:space-x-20">
          <div className="px-5 pt-6 text-lg md:w-1/2 md:px-2 md:pt-0 font-mono">
            <p className="md:text-3xl font-bold text-sky-600 pb-6 font-sans text-center md:text-left">
              Planet Earth
            </p>
            This planet-sized project to clean up the web required an army.
            Partnering up with other Cyber security organisations, we fight to
            protect <em>your</em> on-line activity.
          </div>
          <div className="h-44 my-4 md:my-0 w-screen bg-earth bg-cover bg-center md:w-1/2 md:rounded-xl md:shadow-xl md:shadow-slate-800 md:py-36"></div>
        </div>

        <div className="flex flec-col md:flex-row  md:items-center md:px-28 md:py-20 md:space-x-28">
          <div className="bg-slate-800 text-emerald-400 hidden md:block w-1/2 md:rounded-lg text-center py-32 md:shadow-xl md:shadow-emerald-800">
            img
          </div>
          <div
            className="px-5
        font-mono pb-8 rounded md:rounded-none md:p-0 md:w-1/2 md:text-lg "
          >
            <div className="text-sky-600 font-sans text-xl text-center md:text-left md:text-3xl font-bold pb-5">
              12 months on
            </div>
            ...We have an incredible team of Software engineers, data analysts
            and cyber security specialists who have sprung up from the most
            unexpected places, spanning 3 continents.
          </div>
        </div>
        <hr className="border-emerald-400 w-5/6 md:w-4/6 mx-auto" />
        <div className="px-5 py-6 text-left md:py-32 md:px-44 text-lg md:text-2xl font-bold">
          As the company grows with <br /> new clients daily,
          <div className="text-base md:text-lg font-light md:py-10">
            PE Safe looks to the challenge of building solid and lasting Cyber
            defences across the globe.
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-6 md:py-20">
        <div className="text-center md:text-left md:pl-44 text-xl md:text-3xl text-emerald-400 font-bold">
          Who are we?
        </div>
        <div className="p-2 text-sm md:text-xl text-center md:text-left md:px-44 md:py-6 md:font-light">
          We are a leading consultancy business focused on testing and improving
          the cyber security of our clients' software and websites.
        </div>
        <div className="flex flex-col md:flex-row md:px-32  md:items-center md:py-20 md:space-x-28">
          <div className="p-2 text-sm mx-16 md:mx-0 md:py-12 md:text-lg">
            In particular, we provide the following services:
            <ul className="px-6 py-2 font-mono">
              <li>- Cyber Security Pen Testing</li>
              <li>- SSL Certificates, Sales and Management</li>
              <li>- Roles Based Access Control RBAC </li>
              <li>- Consultancy and MSP Services</li>
              <li>- SecOps , DevOps, WebOps</li>
              <li>- Cloud Security Architecture</li>
            </ul>
          </div>
          <div className="bg-white text-emerald-400 hidden md:block w-1/2 md:rounded-lg text-center py-32 md:shadow-xl md:shadow-emerald-800">
            img
          </div>
        </div>
      </div>
    </>
  );
}
