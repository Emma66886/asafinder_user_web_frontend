import Listtokens from "../components/user/listtoken";
import React from "react";
import { Headercomponent } from "../components/header/header";
import Footer from "../components/footer/footer";

function Listnewtoken() {
  return (
    <>
      <Headercomponent />
      <Listtokens />
      <Footer />
    </>
  );
}

export default Listnewtoken;
