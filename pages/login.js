import React from "react";
import Login from "../components/authpages/login";
import Footer from "../components/footer/footer";
import { Headercomponent } from "../components/header/header";

function LoginPage() {
  return (
    <>
      <Headercomponent />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
