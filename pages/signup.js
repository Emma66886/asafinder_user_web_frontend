import React from "react";
import Signup from "../components/authpages/signup";
import Footer from "../components/footer/footer";
import { Headercomponent } from "../components/header/header";
function Signuppage() {
  return (
    <>
      <Headercomponent />
      <Signup />
      <Footer />
    </>
  );
}

export default Signuppage;
