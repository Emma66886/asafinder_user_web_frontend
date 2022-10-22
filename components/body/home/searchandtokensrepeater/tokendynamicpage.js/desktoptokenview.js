import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Progress,
  Text,
  Textarea,
  Toast,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  StarIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";
// import tgimg from "../../../../../assets/telegram.png";
// import pintimg from "../../../../../assets/pinterest.png";
// import twtimg from "../../../../../assets/twitter.png";
// import ytimg from "../../../../../assets/youtube.png";
// import fbimg from "../../../../../assets/facebook.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import ChartComponent from "../../../../utils/Chartcomponent";
const ChartComponent = dynamic(
  () => import("../../../../utils/Chartcomponent.js"),
  {
    ssr: false,
  }
);
// import { Charts } from "react-lightweight-charts-simple";
// import { getTokenPrices, getAllTokensData } from "../../../../utils/apis";

export default function Desktoptokenview({
  tokenDetails,
  copy,
  algochnage,
  usdcChange,
  algoPrice,
  usdcPrice,
  voteToken,
  bookmark,
  bookmarked,
  submitReview,
  submitRatings,
  tokenReview,
  allCoinRating,
  tokenuserRatings,
  chartData,
  tokenInfo,
  votes24h,
}) {
  const {
    isApproved,
    token_asa,
    token_contract_address,
    token_description,
    token_discord_url,
    token_launch_date,
    token_logo,
    token_name,
    token_network,
    token_owner,
    token_stage,
    token_swap_url,
    token_symbol,
    token_telegram_url,
    token_twitter_url,
    token_website_url,
    token_facebook_url,
    token_youtube_url,
    vote,
    token_pinterest_url,
    token_role,
    token_categories,
    token_partnerships,
    token_type,
  } = tokenDetails;
  const [myrate, setMyRate] = useState(tokenuserRatings || 0);
  const myRatings = (val) => {
    setMyRate(val);
    submitRatings(val);
  };
  const [commenVal, setCommentVal] = useState("");
  useEffect(() => {}, []);
  return (
    <Box
      bg="#111621"
      w="100vw"
      minH="100vh"
      pl="10"
      pr="10"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box
        bg="#222B3E"
        w="80%"
        p="5"
        display="flex"
        gap="5"
        color="#E5E5E5"
        borderRadius="5px"
        mt="10"
      >
        <Box display="flex" flexDir="column" gap="2" flex="20" maxW="60%">
          <Box display="flex" flexDir="row" gap="2">
            <Box display="flex" flexDir="column" gap="2">
              <Image
                height={"60px"}
                w={"60px"}
                src={token_logo ?? token_logo[0]}
              />
              <Text
                p="2"
                textAlign="center"
                bg="#4C5C75"
                borderRadius="5px"
                fontSize="0.8em"
              >
                {token_asa}
              </Text>
            </Box>
            <Box display="flex" flexDir="column">
              <Text>{token_name}</Text>
              <Text>{token_symbol}</Text>
            </Box>
          </Box>
          <Box>
            <Text>{token_description}</Text>
          </Box>
        </Box>
        <Box
          flex="10"
          fontSize="1em"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>Algo Price:</Text>
            <Text>{algoPrice}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>USD Price:</Text>
            <Text>{usdcPrice}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>24h Change:</Text>
            <Text color={algochnage < 1 ? "#ff0000" : "#16C784"}>
              {algochnage < 1 ? (
                <ArrowDownIcon
                  transform="rotateZ(45deg)"
                  alignSelf="center"
                  boxSize="1.5em"
                />
              ) : (
                <ArrowUpIcon
                  transform="rotateZ(45deg)"
                  alignSelf="center"
                  boxSize="1.5em"
                />
              )}
              {algochnage}%
              {/* <Text as="span" color="#fff">
                %
              </Text> */}
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>Vote:</Text>
            <Text>{vote}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>Daily Votes:</Text>
            <Text>{votes24h}</Text>
          </Box>
        </Box>
        <Box display="flex" flex="1" justifyContent="flex-end">
          <StarIcon
            onClick={bookmark}
            color={bookmarked ? "#ffff00" : "#E5E5E5"}
            cursor="pointer"
          />
        </Box>
      </Box>
      {/* Tabs */}
      <Box
        display="flex"
        justifyContent="space-between"
        w="80%"
        color="#fff"
        mt="5"
      >
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="25%"
          textAlign="center"
          fontSize="0.8em"
        >
          <Link
            href={`https://app.tinyman.org/#/swap?asset_in=${token_asa}`}
            target="_blank"
          >
            {`Purchase ${token_name}(${token_symbol})`}
          </Link>
        </Box>
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="15%"
          textAlign="center"
          fontSize="0.8em"
          cursor="pointer"
          display="grid"
          placeItems="center"
          //   onClick={(e) => copy(token_website_url)}
        >
          <Link href={token_website_url || ""} target="_blank">
            Website
          </Link>
        </Box>
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="15%"
          display="grid"
          placeItems="center"
          textAlign="center"
          fontSize="0.8em"
          onClick={(e) => copy(token_asa)}
        >
          ASA ID
        </Box>
        <Box
          bg="#45AC75"
          p="1"
          borderRadius="5px"
          w="10%"
          textAlign="center"
          fontSize="0.8em"
          display="grid"
          placeItems="center"
          cursor="pointer"
          onClick={voteToken}
        >
          Vote
        </Box>
      </Box>
      {/* Charts */}
      <Box w="80%" display="flex" flexDir="row" gap="10" mt="10">
        <Box w="48%" h="290px">
          {/* {chartData && chartData?.length > 0 && ( */}
          <ChartComponent
            token={token_asa}
            colors={{
              backgroundColor: "black",
              lineColor: "#2962FF",
              textColor: "white",
              areaTopColor: "#2962FF",
              areaBottomColor: "rgba(41, 98, 255, 0.28)",
            }}
          />
          {/* )} */}
        </Box>
        <Box w="48%" minH="250px" color="#fff" fontWeight="500">
          <Text>Socials:</Text>
          <Box display="flex" gap={2} mb={5} mt={2}>
            {token_telegram_url && (
              <Link href={token_telegram_url || ""} target="_blank">
                <SocialIcon network="telegram" />
              </Link>
            )}
            {token_twitter_url && (
              <Link href={token_twitter_url || ""} target="_blank">
                <SocialIcon network="twitter" />
              </Link>
            )}
            {token_youtube_url && (
              <Link href={token_youtube_url || ""} target="_blank">
                <SocialIcon network="youtube" />
              </Link>
            )}
            {token_facebook_url && (
              <Link href={token_facebook_url || ""} target="_blank">
                <SocialIcon network="facebook" />
              </Link>
            )}
            {token_pinterest_url && (
              <Link href={token_pinterest_url} target="_blank">
                <SocialIcon network="pinterest" />
              </Link>
            )}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text>RATINGS</Text>
              <Box display="flex" gap={2} mb={5} mt={2}>
                <StarIcon color={allCoinRating > 0 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 1 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 2 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 3 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 4 ? "#DD821F" : "#fff"} />
              </Box>
            </Box>
            <Box>
              <Text>Your Ratings</Text>
              <Box display="flex" gap={2} mb={5} mt={2}>
                <StarIcon
                  cursor="pointer"
                  onClick={(e) => myRatings(1)}
                  color={myrate > 0 ? "#DD821F" : "#fff"}
                />
                <StarIcon
                  cursor="pointer"
                  onClick={(e) => myRatings(2)}
                  color={myrate > 1 ? "#DD821F" : "#fff"}
                />
                <StarIcon
                  cursor="pointer"
                  onClick={(e) => myRatings(3)}
                  color={myrate > 2 ? "#DD821F" : "#fff"}
                />
                <StarIcon
                  cursor="pointer"
                  onClick={(e) => myRatings(4)}
                  color={myrate > 3 ? "#DD821F" : "#fff"}
                />
                <StarIcon
                  cursor="pointer"
                  onClick={(e) => myRatings(5)}
                  color={myrate > 4 ? "#DD821F" : "#fff"}
                />
              </Box>
            </Box>
          </Box>
          <Box w="100%" bg="#222B3E" p="5" borderRadius="5px" mb="5">
            <Box
              display="flex"
              flexWrap="wrap"
              flexDir="column"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Total Supply:</Text>
              <Text color="#A1A1A1" fontSize="0.9em">
                {tokenInfo?.supply} {tokenInfo?.ticker}
              </Text>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDir="column"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Circulating Supply:</Text>
              <Text color="#A1A1A1" fontSize="0.9em">
                {tokenInfo?.circulating_supply} {tokenInfo?.ticker}
              </Text>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              gap="2"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Token in circulation after</Text>
              <Text color="#fff">
                {parseInt(
                  (tokenInfo?.circulating_supply / tokenInfo?.supply) * 100
                )}
                %
              </Text>
            </Box>
            <Progress
              colorScheme="green"
              size="md"
              value={(tokenInfo?.circulating_supply / tokenInfo?.supply) * 100}
              borderRadius="5px"
            />
          </Box>
        </Box>
      </Box>
      {/* ASA Details */}
      <Box w="80%" display="flex" flexDir="row" gap="10">
        <Box
          w="48%"
          bg="#1E2637"
          gap="2"
          display="flex"
          flexDir="column"
          p="2"
          borderRadius="10px"
        >
          <Text color="#45AC75" fontSize="1.5rem" w="100%" textAlign="center">
            ASA DETAILS
          </Text>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Token Role:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {token_role || "Not Available"}
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Categories:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {token_categories || "No Categories"}
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Partnership:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {token_partnerships || "None"}
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Token Type:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {token_type || "None"}
            </Text>
          </Box>
          <Box display="flex" flexWrap="wrap" fontSize="1.1rem">
            <Text color="#E5E5E5">About:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {`${token_description.slice(0, 120)}...`}
            </Text>
          </Box>
        </Box>
        <Box
          minH="300px"
          w="48%"
          maxH="400px"
          bg="#1E2637"
          mb="5"
          borderRadius="10px"
          p="2"
          display="flex"
          flexDir="column"
        >
          <Box maxH="60%" overflowY="scroll" flex={1}>
            {tokenReview.map((v, i) => (
              <Box
                key={i + "desktoptokenview"}
                mt="2"
                mb="2"
                borderBottom="2px solid #ffffff50"
              >
                <Text color="#515B6F">{v?.user_id?.username}</Text>
                <Text color="#c7c7c7">{v?.review}</Text>
              </Box>
            ))}
          </Box>
          <Text fontSize="1.4rem" color="#fff">
            Comment
          </Text>
          <Textarea
            bg="#fff"
            // value={commenVal}
            onChange={(e) => setCommentVal(e.target.value)}
            mb={5}
            resize={"vertical"}
          />
          <Button
            onClick={(e) => {
              submitReview(commenVal);
              // setCommentVal("");
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
