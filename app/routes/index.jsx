export default function Index() {
  return (
    <>
      <nav className="bg-gradient-to-tr from-white via-sky-100 to-sky-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
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
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="/"
                    className="text-slate-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="/"
                    className="text-slate-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="/"
                    className="text-slate-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="/"
                    className="text-slate-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer space-x-2 p-2 hover:bg-slate-900 hover:rounded-lg hover:p-2 hover:text-emerald-600">
              <img className="h-6" src="img/phone-icon.png" alt="call" />
              <p>020 7183 7649</p>
            </div>
          </div>
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Home
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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

      <header class="relative flex items-center h-64 sm:h-auto mb-12 overflow-hidden">
        <div className="relative z-30 p-5 px-20 my-48 text-6xl text-white bg-opacity-50 rounded-xl font-bold">
          Secure IT
          <div className="relative text-emerald-600 text-2xl font-medium text-center">
            <h3>
              <em>USE US TO SECURE ALL YOUR ASSETS</em>
            </h3>
          </div>
        </div>

        <video
          muted
          loop
          autoplay
          className="absolute z-10 w-auto md:min-w-full md:min-h-full max-w-none "
          src="img/background.mp4"
        ></video>
      </header>

      <div className="bg-none sm:bg-blue-white sm:bg-no-repeat sm:bg-cover sm:bg-center">
        <p className="text-4xl text-sky-600 pl-6">Our services</p>
        <hr className="border border-emerald-400 w-32 my-6 ml-32" />

        <div className="flex flex-row space-x-5 pl-10">
          <div>
            <p className="text-slate-900 font-light text-lg md:pr-72">
              PE Safe is an integrated IT solution provider and consultancy
              harnessing cybersecurity for business continuity and digital asset
              protection
            </p>
          </div>
          <div>
            <img className="h-32 hidden" src="img/padlock.png" alt="lock" />
          </div>
        </div>

        {/* <div>
              <img
                className="h-32 w-44 items-center justify-center"
                src="img/padlock.png"
                alt="lock"
              />
            </div> */}
        <div className="flex flex-col my-6 space-y-2">
          <div className="flex justify-center space-x-2">
            <div>
              <button className="text-sm border border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border hover:bg-opacity-10 hover:text-slate-900">
                Consultancy
              </button>
            </div>
            <div>
              <button className="text-sm border border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border hover:bg-opacity-10 hover:text-slate-900">
                Infrastructure
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div>
              <button className="text-sm border border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border hover:bg-opacity-10 hover:text-slate-900">
                DevOps
              </button>
            </div>
            <div>
              <button className="text-sm border border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border hover:bg-opacity-10 hover:text-slate-900">
                SecOps
              </button>
            </div>
          </div>
        </div>

        <div className="text-white text-center bg-slate-800 py-8">
          <p className="text-2xl font-semibold">
            Securing IT and knowledge assets
          </p>
          <div className="flex flex-col text-center py-6 space-y-2 font-mono text-xl">
            <div className="flex bg-sky-600 rounded mx-16 p-3 pl-5 place-content-between items-center">
              <div>Peace of mind</div>
              <div>
                <img className="h-12" src="img/brain 3.png" alt="brain" />
              </div>
            </div>
            <div className="flex border border-sky-600 rounded mx-16 p-3 pl-5 place-content-between items-center">
              <div>Reduced downtime</div>
              <div>
                <img className="h-16" src="img/stopwatch.png" alt="" />
              </div>
            </div>
            <div className="flex bg-sky-600 rounded mx-16 p-3 pl-5 items-center">
              <div className="text-left text-lg">
                Faster deployment of software
              </div>
              <div>
                <img className="h-10 px-2" src="img/software-03.png" alt="" />
              </div>
            </div>
          </div>
          <ul className="list-disc text-left mx-12 text-sm font-mono font-light">
            <li>Customers trust your brand with their data</li>
            <li>
              Secure IT services and ongoing maintenance reduces the likelihood
              of an IT service or digital asset attack
            </li>
            <li>
              Peace of mind – you are in good hands with PESafe so you can focus
              on your business
            </li>
          </ul>
        </div>

        <div className="md:flex bg-chess bg-cover ">
          <div className="md:w-3/5 py-8 px-4 bg-white bg-opacity-60 md:bg-opacity-100">
            <p className="font-bold text-slate-800 pb-2 text-2xl">
              A CLEAR <span className="text-emerald-400">HOLISTIC</span>{" "}
              BUSINESS-LED APPROACH
            </p>
            <p className="font-mono text-sm">
              Where IT and knowledge assets are protected in a controlled way,
              to support the way <em>your</em> business functions and uses IT.
            </p>
          </div>
          <div className="hidden md:block bg-chess bg-cover w-2/5"></div>
        </div>

        <div className="bg-sky-600 text-white text-center py-6">
          <p className="font-bold text-2xl pb-4">
            Secure IT Across the Enterprise
          </p>
          <p className="font-mono italic">
            We protect your assets in
            <span className="text-emerald-400"> 4</span> areas:
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-center space-x-2">
              <div className="border border-slate-600 bg-slate-200 text-slate-800 w-32  h-32  p-2 text-sm">
                Hardware
              </div>
              <div className="border border-slate-600 bg-slate-200 text-slate-800 w-32  h-32 p-2 text-sm">
                Software
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <div className="border border-slate-600 bg-slate-200 text-slate-800 w-32  h-32  p-2 text-sm">
                Security processes and auditing
              </div>
              <div className="border border-slate-600 bg-slate-200 text-slate-800 w-32  h-32  p-2 text-sm">
                Security Training
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
