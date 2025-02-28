import Head from "next/head";
import { useContext, useEffect } from "react";

import MainContext from "@/context/main-context";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import GetStarted from "../components/modals/get-started/GetStarted";
import PricingHead from "@/components/layout/pricing-head/PricingHead";
import Footer from "@/components/footer/Footer";
import PricingForm from "@/components/sections/pricing-form/PricingForm";

function PricingPage() {
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

  return (
    <>
        <Head>
            <title>RealPros - Pricing Plans</title>
        </Head>
      <PricingHead />
      <PricingPlans />
      <PricingForm />
      <Footer />
      {Ctx.modal && <GetStarted />}
    </>
  );
}

export default PricingPage;
