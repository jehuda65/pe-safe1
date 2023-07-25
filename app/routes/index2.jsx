import ContactForm from '../components/ContactForm';
import Navbar from '../components/navBar';


export default function Index() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-tr from-emerald-400 to-sky-200">
        <header className="bg-secureit relative flex items-center h-64 sm:h-auto overflow-hidden ">
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
            autoplay
            className="absolute z-10 w-auto md:min-w-full md:min-h-full max-w-none "
            src="img/background.mp4"
          ></video>
          <script>document.getElementById('vid').play();</script>
        </header>

        <div className="sm:bg-none md:bg-cover sm:bg-bottom py-16 px-10 md:mx-16">
          <div className=" md:flex md:flex-row">
            <div>
              <p className="text-4xl md:text-white pl-6">Our services</p>
              <hr className="border bg-emerald-400 border-emerald-400 w-32 my-6 ml-32 md:mb-16" />

              <div>
                <p className="text-slate-900  text-lg md:pr-36 md:py-2 md:pl-7">
                  PE Safe is an integrated IT solution provider and consultancy
                  harnessing cybersecurity for business continuity and digital
                  asset protection
                </p>
              </div>

              {/* <div>
                <img
                  className="h-32 w-44 items-center justify-center"
                  src="img/padlock.png"
                  alt="lock"
                />
              </div> */}
              <div className="flex flex-col md:flex-row md:items-center my-6 space-y-4 md:space-y-0 md:space-x-4 md:pl-12 md:my-16">
                <div className="flex justify-center space-x-4">
                  <div>
                    <button className="text-sm border-2 border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border-2 hover:bg-opacity-10 hover:text-slate-900 hover:border-slate-800 transition md:py-2 md:w-36 md:font-bold">
                      Consultancy
                    </button>
                  </div>
                  <div>
                    <button className="text-sm border-2 border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border-2 hover:bg-opacity-10 hover:text-slate-900 hover:border-slate-800 transition md:py-2 md:w-36 md:font-bold">
                      Infrastructure
                    </button>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <div>
                    <button className="text-sm border-2 border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border-2 hover:bg-opacity-10 hover:text-slate-900 hover:border-slate-800 transition md:py-2 md:w-36 md:font-bold">
                      DevOps
                    </button>
                  </div>
                  <div>
                    <button className="text-sm border-2 border-sky-700 bg-sky-600 rounded w-32 py-2 text-white font-mono hover:border-2 hover:bg-opacity-10 hover:text-slate-900 hover:border-slate-800 transition  md:py-2 md:w-36 md:font-bold">
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

        {/* <div className="text-white md:text-center bg-slate-800 py-8 text-center">
          <p className="text-2xl font-semibold pb-2 md:py-8 md:text-3xl">
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
        </div> */}

        <div className="bg-white text-slate-800 md:text-center text-center py-5 md:mx-16 md:rounded-2xl shadow-xl md:my-6">
          <p className="text-2xl font-semibold pb-2 md:py-12 md:text-3xl">
            Securing IT and knowledge assets
          </p>

          <div className="flex flex-col text-white mx-8 my-6 justify-center space-y-2 font-mono text-xl md:flex-row md:space-x-10 md:h-56">
            <div className="flex bg-sky-600 rounded p-3 place-content-between mt-2 space-x-4 items-center md:flex-col-reverse md:space-x-0 md:place-content-around md:w-1/5 shadow-lg hover:opacity-90 hover:ring hover:scale-105 hover:drop-shadow-2xl transition">
              <div>Peace of mind</div>
              <div>
                <img
                  className="h-16 md:h-28"
                  src="img/brain 3.png"
                  alt="brain"
                />
              </div>
            </div>
            <div className="flex text-slate-800 rounded p-3 place-content-between items-center md:flex-col-reverse md:w-1/5 md:place-content-around shadow-lg hover:scale-105 hover:opacity-90 hover:ring-2 hover:ring-slate-100 hover:drop-shadow-2xl transition">
              <div>Reduced downtime</div>
              <div>
                <img
                  className="h-16 md:h-28"
                  src="img/stopwatch.png"
                  alt="stop"
                />
              </div>
            </div>

            <div className="flex bg-sky-600 rounded p-3 items-center place-content-between md:flex-col-reverse md:w-1/5 md:place-content-around md:pt-4 md:space-y-2 shadow-lg hover:opacity-90 hover:ring hover:scale-105 hover:drop-shadow-2xl transition">
              <div className="text-left md:text-center">
                Faster deployment of software
              </div>
              <div>
                <img
                  className="w-20 md:w-28"
                  src="img/software-03.png"
                  alt="ware"
                />
              </div>
            </div>
          </div>

          <ul className="list-disc text-left mx-12 text-sm font-mono font-light md:py-8 md:leading-8 md:text-lg md:mx-36">
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
        {/* <hr className="w-5/6 m-auto border-sky-200" /> */}
        <div className="md:mx-16 md:mt-12 md:rounded-2xl">
          <div className="md:flex bg-chess bg-cover md:bg-none pt-16 pb-1 md:py-16 md:pr-10">
            <div className="md:w-1/2 py-8 px-12 align-middle rounded-lg m-6 md:m-0 bg-gradient-to-t from-white via-white to-none md:bg-opacity-100 h-72 md:bg-none md:pt-28 md:pl-16">
              <p className="font-bold text-slate-800 pb-8 text-2xl">
                A CLEAR<span className="text-sky-600"> HOLISTIC </span>
                BUSINESS-LED APPROACH
              </p>
              <p className="font-mono text-sm font-bold md:text-lg md:font-light md:py-8">
                Where IT and knowledge assets are protected in a controlled way,
                to support the way <em>your</em> business functions and uses IT.
              </p>
            </div>
            <div className="hidden md:block w-1/2 items-center">
              <img
                className="rounded-xl h-96 hidden md:block mx-auto shadow-slate-500 shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
                src="img/chess.jpeg"
                alt="chess"
              />
            </div>
          </div>
        </div>
        {/* <hr className="w-5/6 m-auto border-sky-200" /> */}
        <div className="md:bg-white rounded-3xl m-16 md:shadow-lg text-white text-center py-6 md:py-12">
          <p className="font-bold text-2xl pb-4 md:pb-10 md:text-3xl text-slate-800">
            Secure IT Across the Enterprise
          </p>
          <p className="font-mono italic pb-5 text-slate-800">
            We protect your assets in
            <span className="text-emerald-400"> 4</span> areas:
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex place-content-around space-x-28 md:space-x-36 absolute text-xl md:text-3xl left-1/2 right-1/2 pt-16 font-mono">
              <div className="hidden md:block bg-slate-800 bg-opacity-50 rounded px-1 shadow-lg">
                Hardware
              </div>
              <div className=" hidden md:block bg-slate-800 bg-opacity-50 rounded px-1 shadow-lg">
                Software
              </div>
            </div>
            <div className="flex place-content-around space-x-32 md:space-x-36 absolute text-lg text-left md:text-3xl left-1/2 right-1/2 pt-40 md:pt-64 text-black font-mono font-bold">
              <div className="hidden md:block bg-white bg-opacity-50 rounded px-1 shadow-lg">
                Security processes and auditing
              </div>
              <div className="hidden md:block bg-white bg-opacity-50 rounded px-1 pt-1 h-20 shadow-lg">
                Security Training
              </div>
            </div>
            <div className="flex justify-center space-x-2 md:space-x-96">
              <div className="md:block flex flex-col">
                <div className="bg-hardware md:border-l-2 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 py-12 md:h-52 md:w-52 md:pr-20 font-mono font-bold text-white hover:scale-x-105 transition duration-300"></div>
                <div className="font-mono bg-slate-800 bg-opacity-30 md:hidden">
                  Hardware
                </div>
              </div>
              <div className="md:block flex flex-col">
                <div className="bg-software md:border-l-2 shadow-md shadow-sky-900 border-slate-600 md:rounded-lg w-32 h-32 py-12 md:h-52 md:w-52 md:py-20 font-mono font-bold text-white hover:scale-x-105 transition duration-300"></div>
                <div className="font-mono bg-slate-800 bg-opacity-30 md:hidden">
                  Software
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 md:space-x-96 py-1/2">
              <div className="md:block flex flex-col">
                <div className="bg-process bg-cover md:border-l-2 shadow-md shadow-slate-600 md:rounded-lg w-32 h-32 md:h-52 py-12 md:w-52 md:py-20 font-mono font-bold text-black hover:scale-105 transition duration-300"></div>
                <div className="font-mono bg-slate-800 bg-opacity-30 w-32 md:hidden">
                  Security processes and auditing
                </div>
              </div>
              <div className="md:block flex flex-col">
                <div className="bg-training bg-cover bg-right md:border-l-2 shadow-md shadow-slate-500 md:rounded-lg w-32 h-32 md:h-52 pt-16 md:w-52 md:py-20 font-mono font-bold text-black hover:scale-105 transition duration-300"></div>
                <div className="font-mono bg-slate-800 bg-opacity-30 w-32 md:hidden">
                  Security Training
                </div>
              </div>
            </div>
          </div>
          <p className="font-mono pt-5 px-8 font-bold md:px-28 md:mt-5 text-slate-800">
            Where digital technologies and data assets are protected – end to
            end all the time. This is what we do. And have been doing for over
            20 years.
          </p>
        </div>

        <div className="text-center flex flex-col md:space-y-7 py-7 md:shadow-md md:bg-white md:bg-opacity-40 md:mx-44 md:mb-10 md:rounded-xl">
          <p className="md:text-sky-600 font-bold text-xl md:text-3xl px-6 py-6">
            Want to protect your data assets and devices?
          </p>
          <button
            href="#contact-us"
            className="text-md font-mono font-bold border-2 border-slate-800 rounded p-2 w-36 m-auto text-slate-700 hover:bg-slate-800 hover:text-emerald-400  transition"
          >
            Get in touch
          </button>
          <p className="text-sm p-5">
            We'll never share your email with anyone else & we will only respond
            to your Message. No marketing lists.
          </p>
        </div>

        <div
          id="contact-us"
          className="flex flex-col md:flex-row p-10 bg-hardware bg-cover justify-center"
        >
          <div className="bg-white bg-opacity-80 text-left py-4 px-10 md:w-1/2 md:pl-28">
            <h2 className="text-2xl font-semibold">Contact us</h2>
            <button className="mb-4 text-sm border-2 mr-1 border-slate-700 rounded w-32 py-2 text-slate-800 hover:bg-slate-800 hover:text-white transition mt-6">
              Call us
            </button>
            <button className="mb-4 text-sm border-2 ml-1 text-white border-sky-600 bg-sky-600 rounded w-32 py-2  hover:border-white hover:bg-opacity-0 transition">
              Email us
            </button>
            <h3 className="text-lg font-semibold">Business hours</h3>
            <ul className="text-left px-10">
              <li>Mon - Fri: 9:00 am - 5:00 pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: 9:00 am - 5:00 pm</li>
            </ul>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>10 fernhurst Gardens, Edgware, Greater London</p>
          </div>
          <div className="bg-white bg-opacity-90 p-4 md:w-1/2">
            <p className="text-2xl font-semibold pb-4">Get in touch</p>
            {/* <form action="input">Name</form> */}
            <div>
            <ContactForm />
              {/* <form
                className="flex flex-col space-y-3"
                action="action_page.php"
              >
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />

                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />

                <label for="subject">Message</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  // style="height:200px"
                ></textarea>

                <input
                  className="cursor-pointer border-2 border-slate-800 rounded px-2 hover:bg-slate-800 hover:text-white transition"
                  type="submit"
                  value="Submit"
                />
              </form> */}
              <div className='flex space-x-4 p-10'><p>Whatsapp</p>
              <a href="https://wa.me/+447555462145"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
