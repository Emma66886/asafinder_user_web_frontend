import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
// import {useRoutes} from 'react-router-dom'
import { useRouter } from "next/router";
function Underreviewpage() {
  const { push: goto } = useRouter();
  return (
    <Box
      w="100vw"
      minH="80vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bg={"#0D0E12"}
    >
      <Text
        fontSize="2.5em"
        fontWeight="medium"
        color="#45AC75"
        textAlign="center"
      >
        YOUR TOKEN IS UNDER REVIEW
      </Text>
      <Button
        p="5"
        fontSize="1.2em"
        onClick={goto("/profile")}
        fontWeight="medium"
        bg="#45AC75"
      >
        DONE
      </Button>
    </Box>
  );
}

export default Underreviewpage;
