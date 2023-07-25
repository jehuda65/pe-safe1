export default function Holistic() {
    return(
        <div className="md:flex bg-chess bg-cover md:bg-none pt-16 md:py-20 md:px-32 md:space-x-6">
        <div className="flex flex-col md:w-1/2 pt-16 pb-12 px-12 md:px-0 md:pt-4 md:pr-16 align-middle bg-gradient-to-t from-white via-white to-none md:bg-opacity-100">
          <p className="font-bold text-slate-800 pb-8 text-2xl">
            A CLEAR<span className="text-emerald-400"> HOLISTIC </span>
            BUSINESS-LED APPROACH
          </p>
          <p className="font-mono text-sm font-bold md:text-lg md:font-light md:py-8">
            Where IT and knowledge assets are protected in a controlled way, to
            support the way <em>your</em> business functions and uses IT.
          </p>
        </div>
        <div className="hidden md:block w-1/2 items-center">
          <img
            className="rounded-xl h-96 hidden md:block mx-auto shadow-slate-500 shadow-xl"
            src="img/chess.jpeg"
            alt="chess"
          />
        </div>
      </div>
    )
}