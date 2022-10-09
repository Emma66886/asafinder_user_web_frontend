import React, { useState } from "react";
import { Box, Text, Button, Input, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import axios from "axios";
import { backendurl } from "../../utils/apihelpers";

function Verifytoken({ set }) {
  const toast = useToast();
  const [requesting, setIsRequesting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [tokenAsa, setTokenAsa] = useState("");
  const [creatorsAddr, setCreatorsAddr] = useState("");
  const [txId, setTxId] = useState("");
  const submitForm = async () => {
    const auth =
      localStorage.getItem("logintoken") ||
      sessionStorage.getItem("logintoken");
    setError("");
    setIsRequesting(true);
    try {
      const submit = await axios({
        method: "post",
        url: backendurl + "api/coins/verfication",
        headers: {
          Authorization: `Bearer ${auth},Content-Type: application/json`,
        },
        data: JSON.stringify({
          email,
          token_asa: tokenAsa,
          creators_address: creatorsAddr,
          transaction: txId,
          creators_token_id: txId,
        }),
      });
      if (submit.status === 200) {
        console.log(submit.data);
        set("mytokenlist");
      }
      setIsRequesting(false);
    } catch (e) {
      console.log(e);
      setIsRequesting(false);
      setError(e?.response?.message || e.message || "An error occured.");
    }
  };
  return (
    <Box
      w="100vw"
      minH="100vh"
      display="flex"
      justifyContent="center"
      bg={"#0D0E12"}
    >
      <Box
        w={["80%", "70%", "60%"]}
        display="flex"
        flexDir="column"
        gap="3"
        color="#fff"
      >
        <Text
          fontSize="1.5em"
          textAlign="center"
          fontWeight="bold"
          color="#45AC75"
        >
          VERIFY TOKEN
        </Text>
        <label style={{ color: "#fff", fontSize: "1.1em" }}>
          {" "}
          Email
          <Input
            bg="#fff"
            color="#000"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Valid Email"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "1.1em" }}>
          {" "}
          Token ASA
          <Input
            bg="#fff"
            onChange={(e) => setTokenAsa(e.target.value)}
            color="#000"
            placeholder="Token ASA"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "1.1em" }}>
          {" "}
          Token Creator&apos;s Address
          <Input
            bg="#fff"
            onChange={(e) => setCreatorsAddr(e.target.value)}
            color="#000"
            placeholder="Creator's Address"
          />
        </label>
        <Box w="100%">
          <Text>Send &apos;0&apos; transaction to this address </Text>
          <Box bg="#111621" w="100%" p="5" borderRadius="10px" display="flex">
            <Text flex="10">
              TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI
            </Text>
            <CopyIcon
              flex="1"
              color="#45AC75"
              onClick={() => {
                navigator.clipboard.writeText(
                  "TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI"
                );
                toast({
                  title: "Address Copied.",
                  description: "Verification address copied to clipboard.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            />
          </Box>
        </Box>
        <label style={{ color: "#fff", fontSize: "1.1em" }}>
          Paste Transaction ID here
          <Input
            bg="#fff"
            onChange={(e) => setTxId(e.target.value)}
            color="#000"
            placeholder="Transaction ID"
          />
        </label>
        <Text color="#fff" fontSize="1.1em">
          Make sure your token is 72 hours old
        </Text>
        <Button
          isLoading={requesting}
          bg="#45AC75"
          w="200px"
          alignSelf="center"
          _hover={{ color: "#c7c7c7" }}
          onClick={submitForm}
        >
          NEXT
        </Button>
        {error && <Text color="#ff0000">{error}</Text>}
      </Box>
    </Box>
  );
}

export default Verifytoken;
