import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Box, Button } from "@chakra-ui/react";
import { CAPTCHA_SITE_KEY, CAPTCHA_SECRETE_KEY } from "../utils/apihelpers";

function Captcha({ captchaFunc }) {
  const [token, setToken] = useState();
  const captchaRef = useRef(null);
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p="10px 0px"
    >
      <Box>
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={"6LcAUpAiAAAAAJhsJEBwW1Da0Syli5wOdwKFFGfu"}
        />
      </Box>
      <Button onClick={(e) => captchaFunc(captchaRef.current.getValue())}>
        SUBMIT
      </Button>
    </Box>
  );
}

export default Captcha;
