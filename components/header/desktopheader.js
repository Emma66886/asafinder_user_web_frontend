import React, { useContext, useEffect, useState } from "react";
import { Box, Link as ChakraLink, Button, Text } from "@chakra-ui/react";
// import { useMediaQuery } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { Outlet, Link as Routerlink} from "react-router-dom";
import alogopotlogo from "../../assets/logo.png";
import { LoggedinContext } from "../../contexts/loginctx";
import Link from "next/link";
import Image from "next/image";
export function Desktopheader() {
  // const [signedin,setSignedin] = useState(false)
  const loggedin = useContext(LoggedinContext);
  // useEffect(()=>{
  //     if(sessionStorage.getItem('logintoken') || localStorage.getItem('logintoken')){
  //         setSignedin(true)
  //     }
  // },[])
  const logoutUSer = () => {
    loggedin.logout();
  };
  return (
    <Box
      mr={10}
      ml={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      w="100vw"
    >
      <Link href="/">
        <Image src={alogopotlogo} />
      </Link>
      <Box display="flex" flexDirection="row" gap={5} alignItems="center">
        <Text
          fontSize="1.2rem"
          colSpan={2}
          color={"#ffffff"}
          placeContent="center"
          _hover={{ cursor: "pointer", bg: "#111621" }}
        >
          <Link href="/listnewtoken">List Your Token</Link>
        </Text>
        <Text
          fontSize="1.2rem"
          colSpan={2}
          color={"#ffffff"}
          placeContent="center"
          _hover={{ cursor: "pointer", bg: "#111621" }}
        >
          <Link href="/watchlist">Watchlist</Link>
        </Text>
        {loggedin.loggedin && (
          <Text
            fontSize="1.2rem"
            colSpan={2}
            color={"#ffffff"}
            placeContent="center"
            _hover={{ cursor: "pointer", bg: "#111621" }}
          >
            <Link href="/profile">Profile</Link>
          </Text>
        )}
        {loggedin.loggedin && (
          <Button
            onClick={logoutUSer}
            fontSize="1.2rem"
            colSpan={2}
            color={"#ffffff"}
            placeContent="center"
            bg="#111621"
            _hover={{ cursor: "pointer", bg: "#111621" }}
          >
            Sign-Out
          </Button>
        )}
        {!loggedin.loggedin && (
          <Text
            fontSize="1.2rem"
            colSpan={1}
            color={"#45AC75"}
            placeContent="center"
            _hover={{ cursor: "pointer", bg: "#111621" }}
          >
            <Link href="/login">Login</Link>
          </Text>
        )}
        {!loggedin.loggedin && (
          <Text
            fontSize="1.2rem"
            colSpan={1}
            color={"#45AC75"}
            placeContent="center"
            _hover={{ cursor: "pointer", bg: "#111621" }}
          >
            <Link href="/signup">Sign-Up</Link>
          </Text>
        )}
        {/* <Outlet /> */}
      </Box>
    </Box>
  );
}
