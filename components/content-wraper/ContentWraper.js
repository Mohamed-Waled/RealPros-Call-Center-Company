import { useContext, useEffect } from "react";

import MainContext from "@/context/main-context";
import GetStarted from "../modals/get-started/GetStarted";
import Footer from "../footer/Footer";
import AboutUs from "../sections/about-us/AboutUs";
import Banner from "../sections/banner/Banner";
import ContactForm from "../sections/contact-form/ContactForm";
import HowItWorks from "../sections/how-it-works/HowItWorks";
// import PricingPlans from "../sections/pricing-plans/PricingPlans";
import QuoteBlock from "../sections/quote-block/QuoteBlock";
import WhyUs from "../sections/why-us/WhyUs";
import classes from "./content-wraper.module.scss";
import ScrollToTop from "../layout/scroll-to-top/ScrollToTop";
// import GetAQuote from "../modals/get-a-quote/GetAQuote";

function ContentWraper() {
  const Ctx = useContext(MainContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Ctx.modal === false) {
        Ctx.showModal();
      }
    }, "3000");
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 3720) {
          Ctx.showScroll();
        } else if (window.screenY < 3720) {
          Ctx.hideScroll();
        }
      });
    }
  }, []);
  return (
    <>
      <div className={classes["content-wraper"]}>
        <AboutUs />
        <WhyUs />
        <Banner />
        <HowItWorks />
        <QuoteBlock />
        {/* <PricingPlans /> */}
        <ContactForm />
        <Footer />
        {Ctx.modal && <GetStarted />}
        {Ctx.scroll && <ScrollToTop />}
      </div>
    </>
  );
}

export default ContentWraper;
