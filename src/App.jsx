import AboutService from "./component/AboutService/AboutService";
import CompaniesLogo from "./component/CompaniesLogo/CompaniesLogo";
import Faq from "./component/Faq/Faq";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Pricing from "./component/Pricing/Pricing";
import Service from "./component/Service/Service";
import Testimonial from "./component/Testimonial/Testimonial";
import Trial from "./component/Trial/Trial";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CompaniesLogo/>
    <Service/>
    <AboutService/>
    <Testimonial/>
    <Pricing/>
    <Faq/>
    <Trial/>
    <Footer/>
    </>
  );
}

export default App;
