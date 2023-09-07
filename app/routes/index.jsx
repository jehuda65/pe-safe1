import ContactUs from "../components/contactUs";
import Enterprise from "../components/enterprise";
import GetInTouch from "../components/getInTouch";
import Header from "../components/header";
import Holistic from "../components/holistic";
import Navbar from "../components/navBar";
import OurServices from "../components/ourServices";
import Securing from "../components/Securing";


export default function Index() {
  return (
    <>
    <Navbar />
    <Header />
    <OurServices />
    <Securing />
    <Holistic />
    <Enterprise />
    <GetInTouch /> 
    <ContactUs />
    </>
  );
}
