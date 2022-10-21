import {
  Box,
  Button,
  Grid,
  GridItem,
  Progress,
  Text,
  Textarea,
  // Image,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { StarIcon, ArrowUpIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import tgimg from "../../../../../assets/telegram.png";
import pintimg from "../../../../../assets/pinterest.png";
import twtimg from "../../../../../assets/twitter.png";
import ytimg from "../../../../../assets/youtube.png";
import fbimg from "../../../../../assets/facebook.png";
import React, { useState, useEffect } from "react";
const ChartComponent = dynamic(
  () => import("../../../../utils/Chartcomponent.js"),
  {
    ssr: false,
  }
);

function Mobiletokenviw({
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
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw"
    >
      <Box
        bg="#222B3E"
        width="95%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="5px"
      >
        <Box w="95%" display="grid">
          <Grid
            width="100%"
            h="359px"
            gap={2}
            bg="#222B3E"
            gridTemplateRows="1fr 1fr 2fr 1fr"
            padding={5}
          >
            <GridItem width="100%">
              <Grid
                color="#ffff"
                w="100%"
                gridTemplateColumns={"2fr 3fr 1fr"}
                gridAutoRows="repeat(3,1fr)"
              >
                <GridItem rowSpan="2">
                  <Image
                    borderRadius={"7px"}
                    src={token_logo[0]}
                    height={"60px"}
                    width={"60px"}
                  />
                </GridItem>
                <GridItem
                  alignSelf="self-end"
                  rowStart="3"
                  colSpan="1"
                  rowSpan="3"
                >
                  {token_name}
                  <br />
                  <Text
                    bg="#4C5C75"
                    p="1"
                    borderRadius="5px"
                    fontSize="0.8em"
                    textAlign="center"
                  >
                    {token_asa}
                  </Text>
                </GridItem>
                <GridItem colSpan="2" placeSelf="self-end">
                  <StarIcon color="#fff" />
                </GridItem>
                <GridItem
                  colSpan="2"
                  rowStart="3"
                  alignSelf="self-end"
                  placeSelf="self-end"
                >
                  {token_symbol}
                </GridItem>
              </Grid>
            </GridItem>
            <Text
              color="#E5E5E5"
              fontSize="15px"
              fontWeight="500"
              lineHeight="22.5px"
              fontFamily="Poppins"
            >
              {token_description}
            </Text>
            <Box
              display="flex"
              color="#E5E5E5"
              flexDirection="column"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              fontWeight="500"
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Text>Algo Price:</Text>
                <Text textAlign="right">{algoPrice}</Text>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Text>USD Price:</Text>
                <Text textAlign="right">{usdcPrice}</Text>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <Text>24h Change:</Text>
                <Box
                  display="flex"
                  color={algochnage < 1 ? "#ff0000" : "#16C784"}
                >
                  <ArrowUpIcon
                    transform="rotateZ(45deg)"
                    alignSelf="center"
                    boxSize="1.5em"
                  />
                  <Text>{algochnage}%</Text>
                </Box>
              </Box>
              <Box color="#fff" display="flex" justifyContent="space-between">
                <Text>Votes: </Text>
                <Text>{vote}</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text color="#fff">Daily Votes:</Text>
                <Text>{votes24h}</Text>
              </Box>
            </Box>
          </Grid>
          <Box w="100%" h="300px" mb={5} borderRadius="5px">
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
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            gap="5"
            alignItems="center"
            mb={5}
            mt={5}
          >
            <Text
              w="80%"
              display="grid"
              placeContent="center"
              borderRadius="5px"
              bg="#4C5C75"
              h="40px"
              fontSize="1.1rem"
              color="#fff"
            >
              <Link
                href={`https://app.tinyman.org/#/swap?asset_in=${token_asa}`}
                target="_blank"
              >
                {`Purchase ${token_name}(${token_symbol})`}
              </Link>
            </Text>
            <Text
              w="80%"
              display="grid"
              placeContent="center"
              borderRadius="5px"
              bg="#4C5C75"
              h="40px"
              fontSize="1.1rem"
              color="#fff"
            >
              <Link href={token_website_url || ""} target="_blank">
                Website
              </Link>
            </Text>
            <Text
              w="80%"
              display="grid"
              placeContent="center"
              borderRadius="5px"
              bg="#4C5C75"
              h="40px"
              fontSize="1.1rem"
              color="#fff"
              onClick={(e) => copy(token_asa)}
            >
              <Link href="">Token ASA</Link>
            </Text>
          </Box>
          <Box w="100%" bg="#4C5C75" borderRadius="1px" h="1px" mb="5"></Box>

          <Box display="flex" flexDir="column" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Total Supply:</Text>
            <Text color="#A1A1A1">
              {tokenInfo?.supply} {tokenInfo?.ticker}
            </Text>
          </Box>
          <Box display="flex" flexDir="column" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Circulating Supply:</Text>
            <Text color="#A1A1A1">
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
            value={100}
            borderRadius="5px"
          />
          <Text color="#45AC75" fontSize="1.5rem" w="100%" textAlign="center">
            ASA DETAILS
          </Text>
          <Box display="flex" flexWrap="wrap" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Token Role:</Text>
            <Text color="#A1A1A1">{token_role || "Not Available"}</Text>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Categories:</Text>
            <Text color="#A1A1A1">{token_categories || "No Categories"}</Text>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Partnership:</Text>
            <Text color="#A1A1A1">{token_partnerships || "None"}</Text>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="2" fontSize="1.1rem">
            <Text color="#E5E5E5">Token Type:</Text>
            <Text color="#A1A1A1">{token_type || "None"}</Text>
          </Box>
          <Box display="flex" flexWrap="wrap" fontSize="1.1rem">
            <Text color="#E5E5E5">About:</Text>
            <Text color="#A1A1A1">
              {`${token_description.slice(0, 120)}...`}
            </Text>
          </Box>
          <Box
            w="100%"
            bg="#4C5C75"
            borderRadius="1px"
            mt="5"
            h="1px"
            mb="5"
          ></Box>
          <Text color="#E5E5E5" fontSize="1.2rem">
            Socials:
          </Text>
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
              <Text color="#fff">RATINGS</Text>
              <Box display="flex" gap={2} mb={5} mt={2}>
                <StarIcon color={allCoinRating > 0 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 1 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 2 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 3 ? "#DD821F" : "#fff"} />
                <StarIcon color={allCoinRating > 4 ? "#DD821F" : "#fff"} />
              </Box>
            </Box>
            <Box>
              <Text color="#fff">Your Ratings</Text>
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
          <Button
            mb={5}
            bg="#45AC75"
            _hover={{ color: "#000" }}
            fontSize="1.5rem"
            color="#fff"
            onClick={voteToken}
          >
            Vote
          </Button>
          <Box
            minH="500px"
            bg="#1E2637"
            mb="5"
            borderRadius="10px"
            p="2"
            display="flex"
            flexDir="column"
          >
            <Box maxH="60%" overflowY="scroll">
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
    </Box>
  );
}

export default Mobiletokenviw;
