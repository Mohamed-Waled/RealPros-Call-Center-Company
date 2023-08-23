import Aos from "aos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import PageWraper from "@/components/layout/page-wraper/PageWraper";
import { MainContextProvider } from "@/context/main-context";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MainContextProvider>
      <PageWraper>
        <Component {...pageProps} />
        <ToastContainer />
      </PageWraper>
    </MainContextProvider>
  );
}
