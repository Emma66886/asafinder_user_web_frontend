import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function Pretokenlist({ set }) {
  return (
    <Box w="100vw" minH="80vh" bg="#0D0E12">
      <Box
        color="#fff"
        w="100%"
        h="max-content"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontSize="1.5em"
          fontWeight="bold"
          color="#45AC75"
        >
          Requirement To Get your Token listed on AsaFinder
        </Text>
        <Box
          w={["80%", "70%", "65%"]}
          mt="3"
          display="flex"
          flexDir="column"
          alignItems="flex-start"
        >
          <Text fontSize="1.2em" fontweight="medium">
            1. Your project must have a website.
          </Text>
          <Text fontSize="1.2em" fontweight="medium">
            2. Liquidity must be a minimum of $500.
          </Text>
          <Text fontSize="1.2em" fontweight="medium">
            3. You must have min of 250 likes to be on the Active List.
          </Text>
          <Text fontSize="1.2em" fontweight="medium">
            4. Any false Information about your project will result to Delisting
            your project or not getting listed at all.
          </Text>
          <Text fontSize="1.2em" fontweight="medium">
            5. Your token must be at least 72 hours old.
          </Text>
          <Text fontSize="1.2em" fontweight="medium">
            6. Send us a 0(ALGO) Tx to the specified wallet address on the form,
            ensure that it{"’"}s sent directly from the token creator address.
          </Text>
          <Text fontSize="1.2em" fontweight="medium" mt="5">
            Listings with more than 250 votes will appear on &apos;Today&apos;s
            Best&apos;. AsaFinder has the right to remove any project for any
            given reason, or remove any votes if we think these were
            illegitimate.
          </Text>
          <Text fontSize="1.2em" fontweight="medium" mt="5">
            Only project developers can submit their token using the submission
            form on our website. We do not endorse or check the authenticity of
            this information, but we&apos;ll try and make sure it&apos;s added
            by the project developer.
          </Text>
          <Text fontSize="1.2em" fontweight="medium" mt="5" mb="5">
            If you see any incorrect information on AsaFinder please contact us
            contact@.com and we will try to look into it when we can.
          </Text>
          <Button
            p="10"
            borderRadius="10px"
            w="200px"
            onClick={(e) => set("verifytokenlist")}
            h="30px"
            bg="#45AC75"
            mb="5"
            _hover={{ color: "#c5c5c5" }}
            alignSelf="center"
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Pretokenlist;
