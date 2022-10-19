import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Box, Button } from "@chakra-ui/react";
import { CAPTCHA_SITE_KEY, CAPTCHA_SECRETE_KEY } from "../utils/apihelpers";
import { CloseIcon } from "@chakra-ui/icons";
function Captcha({ captchaFunc, closeLighBox }) {
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
      <Box w="100%" display="flex" flexDir="column" alignItems="center">
        <Box
          w="100%"
          p="2"
          display="grid"
          placeContent="center"
          mb="5px"
          cursor="pointer"
          _hover={{ bg: "#c5c5c5" }}
          onClick={closeLighBox}
        >
          <CloseIcon />
        </Box>
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
