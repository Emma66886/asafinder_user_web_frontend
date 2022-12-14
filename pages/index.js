import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homebody from "../components/body/home/body";
import { Headercomponent } from "../components/header/header";
import Footer from "../components/footer/footer";
import axios from "axios";
import { backendurl } from "../components/utils/apihelpers";
import { getAllTokensData } from "../components/utils/apis";

export default function Home({ tokens }) {
  const parsedTokens = tokens;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headercomponent />
      <Homebody tokens={parsedTokens} />
      <Footer />
    </>
  );
}
// const data = [];
const getTokens = async (tokens, data = []) => {
  let imData = data;
  if (tokens.length === 0) return imData;
  try {
    const priceData = await getAllTokensData(tokens[0].token_asa);
    // data = data.push({ ...tokens[0], ...priceData });
    imData = [...data, { ...tokens[0], ...priceData }];
    console.log({ imData });
    tokens.shift();
    return getTokens(tokens, imData);
  } catch (e) {
    tokens.shift();
    return getTokens(tokens, imData);
  }
};

export async function getStaticProps(context) {
  const coins = await axios.get(backendurl + "api/coins");
  const refinedTokens = await getTokens(coins.data.data);
  console.log({ refinedTokens });
  return {
    props: { tokens: refinedTokens }, // will be passed to the page component as props
    revalidate: 100,
  };
}
