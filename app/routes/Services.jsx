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
                    className="text-slate-900 px-3 py-2 rounded-md text-sm font-medium"
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
                    className="bg-gray-900 text-emerald-400 hover:bg-gray-700 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium"
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
                href="services"
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
      <div className="flex flex-col md:space-y-10 bg-chain md:bg-cover bg-no-repeat text-emerald-400 text-lg md:text-2xl font-bold px-5 py-6 text-center md:py-20">
        <div className="md:text-3xl text-xl">
          Secure IT and knowledge is a
          <span className="text-white"> 'necessary'</span> requirement
        </div>
        <div className="px-5 py-3 text-sm md:text-base font-mono text-white font-light">
          With digitally disrupted business models and IT hardware changing so
          fast, a secure IT platform and service are required for competitive
          success.
        </div>
      </div>

      <div className="bg-sky-600 text-white text-center md:py-20 ">
        <p className="text-xl font-bold pt-4 md:text-2xl md:text-left md:pl-44">
          <span className="text-emerald-400">Holistic</span> digital asset
          protection
        </p>
        <p className="pb-4 font-light p-4 md:text-left md:pl-44 md:text-lg md:mt-2">
          We address IT and knowledge asset security from 3 perspectives:
        </p>
        <div className="flex flex-col md:flex-row md:w-max md:space-x-10 space-y-4 py-6 md:mx-32 place-content-around items-center">
          <div className="bg-building bg-top w-80 md:py-28 md:w-max md:bg-left px-8 rounded md:rounded-lg md:text-xl md:leading-7 py-2 shadow-md shadow-slate-800 cursor-pointer hover:scale-x-105 transition md:h-72 md:px-6 md:font-bold md:mt-4 md:hover:border md:hover:border-slate-400 md:border border-slate-800">
            <a href="#Hardware">
              Hardware and software security <br /> management
            </a>
          </div>

          <div className="bg-building bg-middle w-80 md:py-28 md:w-max rounded md:rounded-lg md:text-xl md:leading-7 py-2 shadow-md shadow-slate-800 cursor-pointer hover:scale-x-105 transition md:h-72 md:px-6 md:font-bold md:hover:border md:hover:border-slate-400 md:border border-slate-800">
            <a href="#Security">
              Security in your IT development <br /> and software deployment
            </a>
          </div>
          <div className="bg-building bg-bottom w-80 md:py-28 md:w-max md:bg-right rounded md:rounded-lg md:text-xl md:leading-7 py-2 shadow-md shadow-slate-800 cursor-pointer hover:scale-x-105 transition md:h-72 md:px-16 md:font-bold md:hover:border md:hover:border-slate-400 md:border border-slate-800">
            IT security mindset: <br /> Training and auditing
          </div>
        </div>
      </div>

      <div
        id="Hardware"
        className="text-center md:text-left md:pl-44 py-6 md:py-20"
      >
        <p className="text-lg font-bold md:text-2xl md:mb-5">
          Hardware and software security management
        </p>
        <p className="md:text-lg md:mt-5">
          Secure your own managed IT device service.
        </p>

        <div className="hidden md:flex md:space-x-12 w-3/4 mx-auto place-content-between mt-20 mb-6">
          <div>
            <img
              className="h-40 hover:scale-125 transition"
              src="/img2/IT devices1.png"
              alt="devices"
            />
          </div>
          <div>
            <img
              className="h-40 hover:scale-125 transition ml-8"
              src="/img2/IT devices2.png"
              alt="devices"
            />
          </div>
          <div>
            <img
              className="h-36 hover:scale-125 transition mt-4"
              src="/img2/IT devices3.png"
              alt="devices"
            />
          </div>
          <div>
            <img
              className="h-40 hover:scale-125 transition mr-8"
              src="/img2/IT devices4.png"
              alt="devices"
            />
          </div>
          <div>
            <img
              className="h-40 hover:scale-125 transition "
              src="/img2/IT devices5.png"
              alt="devices"
            />
          </div>
        </div>

        <div className="hidden md:flex md:space-x-12 w-3/4 mx-auto place-content-between px-4 font-mono mb-16">
          <div>Tablets</div>
          <div>Mobiles</div>
          <div>Laptops</div>
          <div>Desktop PCs</div>
          <div>Networks</div>
        </div>
        <ul className="md:hidden list-disc pl-44 text-left">
          <li>Tablets</li>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>Desktop PCs</li>
          <li>Networks</li>
        </ul>
      </div>

      <div
        id="Security"
        className="bg-gradient-to-br from-sky-900 to-slate-800 md:bg-none md:bg-sky-600 text-center py-3 text-white md:py-20"
      >
        <p className="text-lg md:text-2xl font-bold py-2 md:text-left md:pl-44">
          Security in your IT development and software
        </p>
        <p className="text-base font-thin md:text-left md:pl-44 md:text-lg md:mt-5">
          AWS: Build and secure your infrastructure with PE SAFE
        </p>
        <div className="flex flex-col md:flex-row px-3 py-3 font-mono md:text-left space-y-3 md:px-44 md:space-x-10 md:mt-10">
          <div className="border-2 md:bg-gradient-to-br from-sky-900 to-slate-800 border-emerald-400 p-3 rounded-md md:border-none md:pb-24 md:pt-12 md:px-16 md:mt-3 md:hover:scale-105 transition hover:shadow-xl hover:shadow-slate-600">
            <p className="text-emerald-400 md:text-lg md:mb-12">
              - AWS migration and setup
            </p>
            <p>
              We help organisations migrate their on-premises infrastructure to
              the cloud. We have in-house resources and extensive migration
              experience to support you along your journey.
            </p>
          </div>
          <div className="md:bg-gradient-to-br from-sky-900 to-slate-800 p-3 rounded-md border-2 border-emerald-400 md:border-none md:pb-24 md:pt-12 md:px-16 md:hover:scale-105 transition hover:shadow-xl hover:shadow-slate-600">
            <p className="text-emerald-400 md:text-lg md:mb-12">
              - AWS infrastructure Reviews
            </p>
            <p>
              We review your AWS infrastructure against the following: Operation
              excellence Security Reliability Performance efficiency Cost
              optimisation Sustainability
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-4 md:py-20 md:text-left">
        <p className="text-xl font-bold md:mb-7 md:text-2xl md:pl-44">
          Solutions
        </p>
        <p className="mx-4 md:pl-44 md:mx-0 md:mr-44 md:text-lg md:font-light">
          We have a range of solutions designed to combat industry specific
          problems with a business led approach to powerful technology and
          strong technical abilities.
        </p>
        <img
          className="h-52 md:h-96 my-4 mx-auto"
          src="/img2/services.png"
          alt="ting"
        />
        <div className="flex flex-col md:flex-row text-sm md:text-base space-y-2 font-thin my-4 mx-4">
          <div className="flex-1">
            Active Performance Management offers a dynamic and integrated
            capability to identify the impact of disruptions on your operations.
            We provide forward-looking views of performance blockages and remove
            them - vital for business continuity.
          </div>
          <div className="flex-1">
            A critical list of actions required by IT for the operation allows
            for a business to react to unwanted changes quickly and optimise for
            business resilience.
          </div>
        </div>
      </div>

      <div className="bg-sky-600 text-white py-4">
        <p className="text-xl font-bold text-center py-3">Our Approach</p>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-4 mx-12 my-6 w-72 gap-y-5">
          <div className="bg-white bg-opacity-90 text-slate-800 w-36 p-4">
            Digital solutions & services:
          </div>
          <div className="bg-white bg-opacity-60 text-slate-800 w-36 p-4">
            Robust Infrastructure:
          </div>
          <div className="bg-white bg-opacity-90 text-slate-800 w-36 p-4">
            Secure Digital Infrastructure:
          </div>
          <div className="bg-white bg-opacity-60 text-slate-800 w-36 p-4">
            Reputation:
          </div>
          <div className="font-mono text-xs bg-slate-800 p-2 w-52 py-4">
            Focused on business drivers, from infrastructure to software
            development that adds real value to your business.
          </div>
          <div className="font-mono text-xs bg-slate-800 bg-opacity-80 p-2 w-52 py-4">
            This leads to less mistakes and zero downtime, giving you maximum
            efficiency of time.
          </div>
          <div className="font-mono text-xs bg-slate-800 p-2 w-52 py-4">
            We protect your digital assets, leading to a reduced likelihood of
            cyber attacks, saving you time and money.
          </div>
          <div className="font-mono text-xs bg-slate-800 bg-opacity-80 p-2 w-52 py-4">
            We enable you with systems to protect customer data, securing a good
            customer loyalty.
          </div>
        </div>
      </div>

      <div className="bg-shake bg-center text-center py-4">
        <p className="text-lg font-bold py-2">
          Interested in our services? We’re here to help!
        </p>
        <p>Do you want to get your website secured?</p>
        <button className="bg-slate-800 p-2 px-6 text-white my-2 transition rounded hover:bg-opacity-20 hover:backdrop-blur-sm hover:border">
          Contact us
        </button>
      </div>
      <div className="text-center bg-slate-800 text-white font-thin text-xs py-1">
        © 2022 Nolig LTD is the holding company of PE-SAFE
      </div>
    </>
  );
}
