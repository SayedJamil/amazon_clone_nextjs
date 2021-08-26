import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Amazon 2.0</title>
        <link rel="icon" href="/amazon-transparent-logo-a.ico" />
      </Head>
      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        {/*ProductFeed  */}
      </main>
    </div>
  );
}
