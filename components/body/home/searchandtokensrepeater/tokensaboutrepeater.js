import React from "react";
import {
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  StarIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  CloseIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import Link from "next/link";

export default function Tokensaboutrepeater({ item }) {
  const {
    token_logo,
    token_name,
    token_symbol,
    token_description,
    prices,
    history,
    isApproved: active,
    vote,
    token_asa,
  } = item;
  console.log({ item });
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <Link href={`/token?q=${token_asa}`}>
        <Box
          w="100vw"
          h="max-content"
          display="flex"
          justifyContent="center"
          marginTop={10}
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Grid
            width="80%"
            h="359px"
            gap={2}
            bg="#222B3E"
            border="2px solid #45AC75"
            borderRadius="11px"
            gridTemplateRows="1fr 1fr 2fr 1fr"
            padding={5}
          >
            {isLargerThan700 && (
              <Box display="flex" justifyContent="space-between">
                <Grid
                  color="#fff"
                  fontSize="1.2rem"
                  display="grid"
                  w="max-content"
                  gridTemplateRows="1fr 1fr"
                  gridTemplateColumns="1fr 1fr"
                >
                  <Image
                    style={{
                      columnSpan: 1,
                      rowSpan: 2,
                      borderRadius: "7px",
                      minHeight: "60px",
                    }}
                    src={token_logo[0]}
                    width={"60px"}
                    height={"60px"}
                  />
                  <GridItem>{token_name}</GridItem>
                  <GridItem>{token_symbol}</GridItem>
                </Grid>
                <StarIcon color="#fff" placeSelf="self-start" />
              </Box>
            )}
            {!isLargerThan700 && (
              <GridItem width="100%">
                <Grid
                  color="#ffff"
                  w="100%"
                  gridTemplateColumns={"2fr 3fr 1fr"}
                  gridAutoRows="repeat(2,1fr)"
                >
                  <GridItem rowSpan="2">
                    <Image
                      borderRadius={"7px"}
                      src={token_logo[0]}
                      height={"60px"}
                      width={"60px"}
                    />
                  </GridItem>
                  <GridItem alignSelf="self-end" colSpan={1} rowSpan={2}>
                    {token_name}
                  </GridItem>
                  <GridItem placeSelf="self-end">
                    <StarIcon color="#fff" placeSelf="self-end" />
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    alignSelf="self-end"
                    placeSelf="self-end"
                  >
                    {" "}
                    {token_symbol}
                  </GridItem>
                </Grid>
              </GridItem>
            )}
            <Text
              color="#E5E5E5"
              fontSize="15px"
              fontWeight="500"
              lineHeight="22.5px"
              fontFamily="Poppins"
            >
              {token_description?.slice(0, 100) + "..."}
            </Text>
            <Box
              display="flex"
              color="#E5E5E5"
              justifyContent="space-between"
              flexWrap="wrap"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              fontWeight="500"
            >
              <Box display="flex" flexWrap="wrap">
                <Text>Algo Price:</Text>
                <Text textAlign="right">
                  {parseFloat(prices?.algotokenPriceData.price).toFixed(5)}
                </Text>
              </Box>
              <Skeleton isLoaded={!!prices}>
                <Box display="flex" flexWrap="wrap">
                  <Text>USD Price:</Text>
                  <Text textAlign="right">
                    {"$" +
                      parseFloat(prices?.usdAlgoTokenPriceData.price).toFixed(
                        5
                      )}
                  </Text>
                </Box>
              </Skeleton>
              <Skeleton isLoaded={!!prices}>
                <Box display="flex" flexWrap="wrap">
                  <Text>24h Change:</Text>
                  <Box display="flex" color="#16C784">
                    {prices?.usdAlgoTokenPriceData.h24change >= 0 && (
                      <ArrowUpIcon transform="rotateZ(45deg)" boxSize="1.5em" />
                    )}
                    {prices?.usdAlgoTokenPriceData.h24change < 0 && (
                      <ArrowDownIcon
                        transform="rotateZ(45deg)"
                        boxSize="1.5em"
                        color="#ff0000"
                      />
                    )}
                    <Text
                      color={
                        prices?.usdAlgoTokenPriceData.h24change < 0
                          ? "#ff0000"
                          : "#00ff00"
                      }
                    >
                      {parseFloat(
                        prices?.usdAlgoTokenPriceData.h24change
                      ).toFixed(2)}
                      %
                    </Text>
                  </Box>
                </Box>
              </Skeleton>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box
                borderRadius="5px"
                fontSize="17.33px"
                fontWeight="500"
                fontFamily="Poppins"
                lineHeight="26px"
                color="#fff"
                bg="#4C5C75"
                justifyContent="center"
                h="35px"
                w="102px"
                alignItems="center"
                display="flex"
                flexDirection="row"
                gap={1}
              >
                {active && <CheckCircleIcon color="#45AC75" />}
                {!active && <CloseIcon color="#ff0000" />}
                {active ? "Active" : "Not Active"}
              </Box>
              <Box
                gap={2}
                display="flex"
                flexDirection="row"
                fontFamily="Poppins"
                fontWeight="500"
                color="#fff"
                fontSize="19.36px"
                lineHeight="29.03px"
                w="120px"
                h="max-content"
                borderRadius="5.58px"
                bg="#222B3E"
                border="2.23px solid #45AC75"
              >
                <Box w="60%" h="100%" bg="#45AC75" textAlign="center">
                  Vote
                </Box>
                <Text textAlign="center">{vote}</Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </>
  );
}
