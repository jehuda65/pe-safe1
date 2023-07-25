export default function Header() {
    return(
        <header class="relative flex items-center h-64 sm:h-auto overflow-hidden">
        <div className="relative z-30 p-5 px-20 my-48 text-6xl text-white bg-opacity-50 rounded-xl font-bold">
          Secure IT
          <div className="relative text-emerald-600 text-2xl font-medium text-center pt-3">
            <h3>
              <em>USE US TO SECURE ALL YOUR ASSETS</em>
            </h3>
          </div>
        </div>

        <video
          muted
          loop
          autoPlay
          className="absolute z-10 w-auto md:min-w-full md:min-h-full max-w-none "
          src="img/background.mp4"
        ></video>
      </header>
    )

}