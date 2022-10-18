import React, { useState } from "react";
import {
  EReCaptchaV2Size,
  EReCaptchaV2Theme,
  ReCaptchaProvider,
  ReCaptchaV2,
  ReCaptchaV3,
} from "react-recaptcha-x";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { Box } from "@chakra-ui/react";
import { CAPTCHA_SITE_KEY, CAPTCHA_SECRETE_KEY } from "../utils/apihelpers";

function Captcha({ captchaFunc }) {
  const [token, setToken] = useState();
  return (
    <GoogleReCaptchaProvider reCaptchaKey={CAPTCHA_SITE_KEY}>
      <GoogleReCaptcha
        action="vote"
        onVerify={(token) => {
          setToken(token);
        }}
      />
    </GoogleReCaptchaProvider>
  );
}

export default Captcha;
