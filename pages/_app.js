// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { LoginContextProvider } from "../contexts/loginctx";
import "@fontsource/poppins";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LoginContextProvider>
        <Component {...pageProps} />
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
