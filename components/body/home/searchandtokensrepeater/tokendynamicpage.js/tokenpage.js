import Desktoptokenview from "./desktoptokenview";
import Mobiletokenviw from "./mobiletokenviw";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  getAllTokensData,
  // getChartData,
  getTokenInfo,
} from "../../../../utils/apis";
// import { useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LoggedinContext } from "../../../../../contexts/loginctx";
import { userAgent } from "next/server";
import { backendurl } from "../../../../utils/apihelpers";
import Captcha from "../../../../lightbox/Captcha";
// import router from "next/router";
function Tokenpage({ token }) {
  const toast = useToast();
  const [isLargerThan500px] = useMediaQuery("(min-width: 500px)");
  const [tokenDetails, setTokenDetails] = useState();
  const [algochnage, setAlgoChange] = useState();
  const [usdcChange, setUsdcChange] = useState();
  const [algoPrice, setAlgoPrice] = useState();
  const [usdcPrice, setUsdcPrice] = useState();
  const [bookmarked, setbookmarked] = useState(false);
  const [tokenReview, setTokenReview] = useState([]);
  const [allCoinRating, setCoinRating] = useState();
  const [tokenuserRatings, setTokenUserRatings] = useState();
  const [chartData, setChartData] = useState();
  const [tokenInfo, setTokenInfo] = useState();
  const [votes24h, setvotes24h] = useState();
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { loggedin } = useContext(LoggedinContext);
  let stopUseEffect = useRef(false);

  const getTokenRatings = async (id) => {
    try {
      const getAllRatings = await axios.get(
        `${backendurl}api/coins/${id || tokenDetails._id}/ratings`
      );
      if (getAllRatings.status === 200) {
        setCoinRating(getAllRatings.data.rating);
        console.log(getAllRatings);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTokenReviews = async (id) => {
    try {
      const review = await axios({
        method: "get",
        url: `${backendurl}api/coins/${id || tokenDetails._id}/review`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
      });
      if (review.status === 200) {
        setTokenReview(review.data);
        console.log(review.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getTokenUserRatings = async (id) => {
    try {
      const review = await axios({
        method: "get",
        url: `${backendurl}api/coins/${id || tokenDetails._id}/userrating`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
      });
      if (review.status === 200) {
        setTokenUserRatings(review.data.rating);
        console.log(review.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getBookMarkStatus = async (id) => {
    try {
      const checkStat = await axios({
        method: "get",
        url: `${backendurl}api/coins/${id || tokenDetails._id}/bookmark`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
      });
      if (checkStat.status === 200) {
        setbookmarked(true);
      }
    } catch (e) {
      setbookmarked(false);
    }
  };
  const get24hrsVotes = async (id) => {
    try {
      const checkStat = await axios({
        method: "get",
        url: `${backendurl}api/coins/${id || tokenDetails._id}/votes24`,
      });
      if (checkStat.status === 200) {
        console.log({ checkStat });
        setvotes24h(checkStat.data.votesCount);
      }
    } catch (e) {
      // setvotes24h(false);
      console.log(e);
    }
  };
  const getTokenDetails = async () => {
    console.log({ token });
    try {
      const tokenDetail = await axios.get(
        `${backendurl}api/coins/getCoin?token=${token}`
      );
      console.log(tokenDetail.data[0]);
      // const data = await getChartData(tokenDetail.data[0].token_asa);
      // setChartData(data);
      await get24hrsVotes(tokenDetail.data[0]._id);
      await getBookMarkStatus(tokenDetail.data[0]._id);
      await getTokenReviews(tokenDetail.data[0]._id);
      await getTokenRatings(tokenDetail.data[0]._id);
      await getTokenUserRatings(tokenDetail.data[0]._id);

      setTokenDetails(tokenDetail.data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  async function getThePrices() {
    const priceDaata = await getAllTokensData(token);
    const gettokenInfo = await getTokenInfo(token);
    console.log({ gettokenInfo });
    setTokenInfo(gettokenInfo);
    console.log({ priceDaata });
    const { prices } = priceDaata;
    setAlgoPrice(parseFloat(prices?.algotokenPriceData.price).toFixed(5));
    setUsdcPrice(parseFloat(prices?.usdAlgoTokenPriceData.price).toFixed(5));
    setUsdcChange(prices?.algotokenPriceData.h24change);
    setAlgoChange(
      parseFloat(prices?.usdAlgoTokenPriceData.h24change).toFixed(2)
    );
    // const {} = algotokenPriceData;

    // setAlgoChange(priceDaata)
  }

  useEffect(() => {
    if (stopUseEffect.current === false) getTokenDetails();
    if (stopUseEffect.current === false) getThePrices();
    // if (stopUseEffect.current === false) getBookMarkStatus();
    stopUseEffect.current = true;
  }, []);
  const copy = (value) => {
    navigator.clipboard.writeText(value);
    toast({
      title: value + " copied.",
      description: "You have copied" + value,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const { push } = useRouter();
  const captchaFunc = async (id) => {
    console.log({ tokenDetails });
    try {
      const vote = await axios({
        method: "put",
        url: `${backendurl}api/coins/${tokenDetails._id}/vote`,
        data: { reapchaId: id },
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
      });
      if (vote.status === 200) {
        console.log(vote.data);
        await getTokenDetails();
        toast({
          title: token + " voting successful.",
          description: "You have successfully voted " + token,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.log(e);
      toast({
        title: token + " voting not successful.",
        description: "You can only vote once in a day!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const closeLighBox = async () => {
    setShowCaptcha(false);
  };
  const voteToken = async () => {
    if (!loggedin) return push("/login");
    setShowCaptcha(true);
  };
  const bookmark = async () => {
    if (!loggedin) return push("/login");
    console.log({ tokenDetails });
    try {
      const vote = await axios({
        method: "post",
        url: `${backendurl}api/coins/${tokenDetails._id}/bookmark`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
      });
      if (vote.status === 200) {
        console.log(vote.data);
        await getTokenDetails();
        await getBookMarkStatus();
        toast({
          title: token + " bookmark successful.",
          description: "You have successfully bookmarked " + token,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.log(e);
      toast({
        title: token + " bookmark not successful.",
        description: "An error occured while bookmarking " + token,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const submitReview = async (value) => {
    try {
      const initiateSubmittion = await axios({
        method: "post",
        url: `${backendurl}api/coins/${tokenDetails._id}/review`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
        data: {
          review: value,
          rating: 1,
        },
      });
      toast({
        title: "Review submitted successfully",
        description: "Your token review has been submitted",
        status: "success",
        duration: 3600,
        isClosable: true,
      });
      await getTokenReviews();
    } catch (e) {
      toast({
        title: "An error occurred!.",
        description: "Error occured while submitting review!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const submitRatings = async (val) => {
    if (!loggedin)
      return toast({
        title: "Not Authorized.",
        description: "Kindly login to perform this action.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    try {
      const sendRate = await axios({
        method: "post",
        url: `${backendurl}api/coins/${tokenDetails._id}/ratings`,
        headers: {
          Authorization: `Bearer ${
            sessionStorage?.getItem("logintoken") ||
            localStorage?.getItem("logintoken")
          }`,
        },
        data: { rate: val },
      });
      if (sendRate.status === 200) {
        await getTokenRatings(tokenDetails._id);
        console.log(sendRate.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {tokenDetails && isLargerThan500px && (
        <Desktoptokenview
          tokenDetails={tokenDetails}
          algochnage={algochnage}
          usdcChange={usdcChange}
          algoPrice={algoPrice}
          usdcPrice={usdcPrice}
          copy={copy}
          bookmark={bookmark}
          voteToken={voteToken}
          bookmarked={bookmarked}
          submitReview={submitReview}
          tokenReview={tokenReview}
          submitRatings={submitRatings}
          allCoinRating={allCoinRating}
          tokenuserRatings={tokenuserRatings}
          chartData={chartData}
          tokenInfo={tokenInfo}
          votes24h={votes24h}
        />
      )}
      {!tokenDetails && <Box height="80vh" w="100vw" bg="#111621"></Box>}
      {tokenDetails && !isLargerThan500px && (
        <Mobiletokenviw
          voteToken={voteToken}
          tokenDetails={tokenDetails}
          algochnage={algochnage}
          usdcChange={usdcChange}
          algoPrice={algoPrice}
          bookmark={bookmark}
          usdcPrice={usdcPrice}
          copy={copy}
          bookmarked={bookmarked}
          submitReview={submitReview}
          tokenReview={tokenReview}
          submitRatings={submitRatings}
          allCoinRating={allCoinRating}
          tokenuserRatings={tokenuserRatings}
          chartData={chartData}
          tokenInfo={tokenInfo}
          votes24h={votes24h}
        />
      )}
      {showCaptcha && (
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          bg="#00000080"
          zIndex={1000}
          inset="0"
          diplay="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            h="200px"
            w="500px"
            inset="25% 30%"
            borderRadius="10px"
            position="fixed"
            bg="#fff"
          >
            <Captcha captchaFunc={captchaFunc} closeLighBox={closeLighBox} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Tokenpage;
