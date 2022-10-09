import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Tokenpage from "../components/body/home/searchandtokensrepeater/tokendynamicpage.js/tokenpage";
import Footer from "../components/footer/footer";
import { Headercomponent } from "../components/header/header";
import { getAllTokensData } from "../components/utils/apis";
function Token({ token }) {
  console.log({ token });
  return (
    <>
      <Headercomponent />
      <Tokenpage token={token} />
      <Footer />
    </>
  );
}

export default Token;

export async function getServerSideProps(context) {
  const query = context.query;
  // const tokenAdditionaldata = await getAllTokesnsData(query.q);
  return {
    props: { token: query.q }, // will be passed to the page component as props
  };
}
