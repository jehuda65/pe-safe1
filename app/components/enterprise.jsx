export default function Enterprise(){
    return(
        <div className="bg-sky-600 text-white text-center py-10 md:py-20">
        <p className="font-bold text-2xl pb-4 md:pb-10 md:text-3xl md:text-left md:pl-44">
          Secure IT Across the Enterprise
        </p>
        <p className="font-light md:text-lg md:text-left md:pl-44 pb-5">
          We protect your assets in
          <span className="text-emerald-400"> 4</span> areas:
        </p>

        <div className="flex flex-col space-y-2 md:space-y-8">
          <div className="flex place-content-around space-x-28 md:space-x-80 absolute text-xl md:text-3xl left-1/2 right-1/2 md:right-1/4 pt-16 font-mono">
            <div className="bg-slate-800 bg-opacity-50 rounded px-1 shadow-lg">
              Hardware
            </div>
            <div className="bg-slate-800 bg-opacity-50 rounded px-1 shadow-lg">
              Software
            </div>
          </div>
          <div className="flex place-content-around space-x-32 md:space-x-80 absolute text-lg text-left md:text-3xl left-1/2 md:right-1/4 right-1/2 pt-40 md:pt-64 text-black font-mono font-bold">
            <div className="bg-white bg-opacity-50 rounded px-1 shadow-lg">
              Security processes and auditing
            </div>
            <div className="bg-white bg-opacity-50 rounded px-1 pt-1 h-20 shadow-lg">
              Security Training
            </div>
          </div>
          <div className="flex justify-center space-x-2 md:space-x-64">
            <div className="bg-hardware md:border-l-2 border-b-4 md:ml-10 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 py-12 md:h-52 md:w-52 md:pr-20 font-mono font-bold text-white"></div>
            <div className="bg-software md:border-l-2 border-b-4 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 py-12 md:h-52 md:w-52 md:py-20 font-mono font-bold text-white"></div>
          </div>
          <div className="flex justify-center space-x-2 md:space-x-64 py-1/2 md:ml-10">
            <div className="bg-process bg-cover md:border-l-2 border-b-4 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 md:h-52 py-12 md:w-52 md:py-20 font-mono font-bold text-black"></div>
            <div className="bg-training bg-cover bg-right md:border-l-2 border-b-4 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 md:h-52 pt-16 md:w-52 md:py-20 font-mono font-bold text-black"></div>
          </div>
        </div>
        <p className="font-mono pt-5 px-8 md:px-28 md:mt-5 md:text-left">
          Where digital technologies and data assets are protected – end to end
          all the time. This is what we do. And have been doing for over 20
          years.
        </p>
      </div>

)

}