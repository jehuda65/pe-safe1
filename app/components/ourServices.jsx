export default function OurServices(){
    return(
        <div className="bg-emerald-400 sm:bg-carry md:bg-cover sm:bg-bottom py-16  px-10">
        <div className="md:flex md:flex-row">
          <div>
            <p className="text-4xl text-white font-semibold pl-6">Our services</p>
            <hr className="border bg-emerald-400 border-emerald-400 w-32 my-6 ml-32 md:mb-16" />

            <div>
              <p className="text-slate-900 font-semibold text-lg md:pr-36 md:py-2 md:pl-7">
                PE Safe is an integrated IT solution provider and consultancy
                harnessing cybersecurity for business continuity and digital
                asset protection
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center my-6 space-y-4 md:space-y-0 md:space-x-4 md:pl-12 md:my-16">
              <div className="flex justify-center space-x-4">
                <div>
                  <button className="btn-service">
                    Consultancy
                  </button>
                </div>
                <div>
                  <button className="btn-service">
                    Infrastructure
                  </button>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <div>
                  <button className="btn-service">
                    DevOps
                  </button>
                </div>
                <div>
                  <button className="text-sm border-2 border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border-2 hover:bg-opacity-10 hover:text-slate-900 hover:border-slate-800 transition md:hover:text-white md:hover:border-white md:py-2 md:w-36 md:font-bold">
                    SecOps
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-auto">
            <img
              className="w-4/5 hidden lg:block m-auto"
              src="img/padlock.png"
              alt="pad"
            />
          </div>
        </div>
      </div>
    )
}