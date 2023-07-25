export default function Securing(){
return(
<div className="text-white md:text-center bg-slate-800 py-8 text-center">
        <p className="text-2xl font-semibold pb-2 md:py-16 md:text-left md:pl-44 md:text-3xl">
          Securing IT and knowledge assets
        </p>

        <div className="flex flex-col mx-8 my-6 justify-center space-y-2 font-mono text-xl md:flex-row md:space-x-10 md:h-56">
          <div className="flex bg-sky-600 rounded p-3 place-content-between mt-2 space-x-4 items-center md:flex-col-reverse md:space-x-0 md:place-content-around md:w-1/5 shadow-lg">
            <div>Peace of mind</div>
            <div>
              <img className="h-16 md:h-28" src="img/brain 3.png" alt="brain" />
            </div>
          </div>
          <div className="flex border border-sky-600 rounded p-3 place-content-between items-center md:flex-col-reverse md:w-1/5 md:place-content-around shadow-lg">
            <div>Reduced downtime</div>
            <div>
              <img
                className="h-16 md:h-28"
                src="img/stopwatch.png"
                alt="stop"
              />
            </div>
          </div>

          <div className="flex bg-sky-600 rounded p-3 items-center place-content-between md:flex-col-reverse md:w-1/5 md:place-content-around md:pt-4 md:space-y-2 shadow-lg">
            <div className="text-left md:text-center">
              Faster deployment of software
            </div>
            <div>
              <img
                className="h-16 md:h-24"
                src="img/software-03.png"
                alt="ware"
              />
            </div>
          </div>
        </div>

        <ul className="list-disc text-left mx-12 text-sm font-mono font-light md:py-8 md:leading-8 md:text-lg md:mx-36">
          <li>Customers trust your brand with their data</li>
          <li>
            Secure IT services and ongoing maintenance reduces the likelihood of
            an IT service or digital asset attack
          </li>
          <li>
            Peace of mind – you are in good hands with PESafe so you can focus
            on your business
          </li>
        </ul>
      </div>
)}