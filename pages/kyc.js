import React from "react";
import Footer from "../components/footer/footer";
import { Headercomponent } from "../components/header/header";
import Submitkyc from "../components/user/kyc/submitkyc";

function kyc() {
  return (
    <>
      <Headercomponent />
      <Submitkyc />
      <Footer />
    </>
  );
}

export default kyc;
