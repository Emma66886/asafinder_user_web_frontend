import React from "react";
import Userprofile from "../components/user/Userprofile";
import Footer from "../components/footer/footer";
import { Headercomponent } from "../components/header/header";

function Profile() {
  return (
    <>
      <Headercomponent />
      <Userprofile />
      <Footer />
    </>
  );
}

export default Profile;
