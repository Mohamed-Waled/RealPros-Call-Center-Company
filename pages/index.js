import Head from 'next/head'

import HeroBanner from "@/components/hero-banner/HeroBanner";
import ContentWraper from "@/components/content-wraper/ContentWraper";

function Home() {
  return (
    <>
        <Head>
            <title>RealPros - Home</title>
        </Head>
      <HeroBanner />
      <ContentWraper />
    </>
  );
}

export default Home;
