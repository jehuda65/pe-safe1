export default function ContactUs() {
    return(
    <div
        id="contact-us"
        className="flex flex-col md:flex-row p-10 bg-hardware bg-cover justify-center"
      >
        <div className="bg-white bg-opacity-50 text-left py-4 px-10">
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
        <div className="bg-white bg-opacity-80 p-4 md:px-32">
          <p className="text-2xl font-semibold pb-4">Get in touch</p>
          {/* <form action="input">Name</form> */}
          <div>
            <form className="flex flex-col space-y-3" action="action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email address"
                placeholder="Your email address.."
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
            </form>
          </div>
        </div>
      </div>
)}