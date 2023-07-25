export default function GetInTouch() {
    return(

        <div className="bg-white text-center flex flex-col space-y-7 md:space-y-12 py-7 md:py-20">
        <p className="text-sky-600 font-bold text-2xl px-6 py-6">
          Want to protect your data assets and devices?
        </p>
        <a href="#contact-us">
        <button className="text-sm font-mono font-bold border-2 border-slate-800 rounded p-2 w-36 m-auto text-slate-700 hover:bg-slate-800 hover:text-emerald-400  transition">
          Get in touch
        </button></a>
        <p className="text-sm p-5">
          We'll never share your email with anyone else & we will only respond
          to your Message. No marketing lists.
        </p>
      </div>
    )

}