import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Infamous Whitelist</title>
        <meta
          name="description"
          content="Check if you have Infamous Wolves Whitelist"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
