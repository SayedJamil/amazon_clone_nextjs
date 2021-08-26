import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Amazon 2.0</title>
        <link rel="icon" href="/amazon-transparent-logo-a.ico" />
      </Head>
      <Header />
    </section>
  );
}
