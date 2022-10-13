import React, { useState, useRef, useId } from "react";
import {
  Input,
  InputGroup,
  Box,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { backendurl } from "../../utils/apihelpers";

function MyTokenList({ set }) {
  const fileinputref = useRef();
  const inputId = useId();
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenNetwork, setTokenNetwork] = useState("");
  const [tokenDescription, setTokenDesription] = useState("");
  const [tokenLaunchDate, setTokenLaunchDate] = useState("");
  const [tokenWebUrl, setTokenWebUrl] = useState("");
  const [tokenAsa, setTokenAsa] = useState("");
  const [tokenChartUrl, setTokenChartUrl] = useState("");
  const [tokenSwapUrl, setTokenSwapUrl] = useState("");
  const [tokenTelegramUrl, setTokenTelegramUrl] = useState("");
  const [tokenDiscordUrl, setTokenDiscordUrl] = useState("");
  const [tokenTwitterUrl, setTokenTwitterUrl] = useState("");
  const [tokenLogo, setTOkenLogo] = useState();
  const [requesting, isRequesting] = useState(false);

  //----------------------------Error--------------------------
  // console.log(auth);
  let formData = new FormData();
  const [error, setError] = useState("");
  const submitForm = async () => {
    const auth =
      localStorage.getItem("logintoken") ||
      sessionStorage.getItem("logintoken");
    isRequesting((r) => true);
    let errors = [];
    if (tokenName === "") errors = [...errors, "Token Name"];
    if (tokenSymbol === "") errors = [...errors, "Token Symbol"];
    if (tokenSymbol === "") errors = [...errors, "Token Symbol"];
    if (tokenNetwork === "") errors = [...errors, "Token Network"];
    if (tokenDescription === "") errors = [...errors, "Token Description"];
    if (tokenLaunchDate === "") errors = [...errors, "Token Launch Date"];
    if (tokenWebUrl === "") errors = [...errors, "Token Website Url"];
    if (tokenAsa === "") errors = [...errors, "Token Asa"];
    if (tokenTwitterUrl === "") errors = [...errors, "Twitter Url"];

    if (errors.length > 0)
      return (
        !setError(errors.join(", ") + " cannot be empty") && isRequesting(false)
      );

    console.log(tokenLogo);
    try {
      const data = {
        token_name: tokenName.trim().toLowerCase(),
        token_symbol: tokenSymbol.trim().toLowerCase(),
        token_network: tokenNetwork.trim().toLowerCase(),
        token_asa: tokenAsa,
        token_stage: false,
        token_description: tokenDescription.trim().toLowerCase(),
        token_launch_date: tokenLaunchDate,
        token_chart_url: tokenChartUrl,
        token_swap_url: tokenSwapUrl,
        token_website_url: tokenWebUrl,
        token_telegram_url: tokenTelegramUrl,
        token_twitter_url: tokenTwitterUrl,
        token_discord_url: tokenDiscordUrl,
        photos: tokenLogo,
        token_contract_address: tokenAsa,
      };
      console.log(data);
      const fetchUrl = `${backendurl}api/coins/new`;
      const uploadData = await axios({
        url: fetchUrl,
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",
        },
        method: "post",
        data: data,
      });
      const result = uploadData;
      console.log(result);
      set("underreview");
      isRequesting(false);
    } catch (err) {
      isRequesting(false);
      console.log(err);
    }
  };

  //------------------Image Upload --------------------------------
  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file?.type.toLowerCase().search("image") === -1) {
      setError("File must be of type image");
      return;
    }
    if (file?.size > 1000 * 1000) {
      setError(
        "Image size must be less than 1Megabytes,kindly resize your image"
      );
      return;
    }
    if (e.target.files.length != 0) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // stateupdate(reader.result);
        setTOkenLogo(reader.result);
        console.log(reader.result);
      };
    }
  };
  return (
    <Box
      bg={"#0D0E12"}
      display="flex"
      flexDir="column"
      pt="10"
      pb="10"
      alignItems={"center"}
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        pt="5"
        pb="5"
        justifyContent="center"
        alignItems="center"
        // boxShadow="0px 0px 50px 10px #c5c5c5"
        borderRadius="10px"
        w="60vw"
      >
        <Text
          fontSize="22px"
          fontFamily="Poppins"
          fontWeight="600px"
          lineHeight="33px"
          color="#45AC75"
        >
          SUBMIT TOKEN
        </Text>
        <InputGroup
          display="grid"
          placeItems="center"
          gap={5}
          marginTop="5"
          marginBottom={1}
        >
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Name
            <Input
              id={`${inputId}tokenname`}
              value={tokenName}
              isRequired
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="e.g ALGORAND"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Symbol($ALGO)
            <Input
              value={tokenSymbol}
              isRequired
              onChange={(e) => setTokenSymbol(e.target.value)}
              placeholder="Token Symbol"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Type(e.g utility Token)
            <Input
              value={tokenNetwork}
              isRequired
              onChange={(e) => setTokenNetwork(e.target.value)}
              placeholder="Token Type"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            ASA ID
            <Input
              value={tokenAsa}
              isRequired
              onChange={(e) => setTokenAsa(e.target.value)}
              placeholder="ASA ID"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Upload Logo
            <Input
              ref={fileinputref}
              onChange={uploadImage}
              mb="5"
              isRequired
              accept="image/*"
              placeholder="Choose an Image"
              type="file"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              display="flex"
              flexDirection="column"
              color="#fff"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Description
            <Textarea
              value={tokenDescription}
              isRequired
              maxLength={1000}
              minLength={100}
              onChange={(e) => setTokenDesription(e.target.value)}
              placeholder="Token description"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Launch Date
            <Input
              value={tokenLaunchDate}
              onChange={(e) => setTokenLaunchDate(e.target.value)}
              placeholder="Token Launch Date"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              type="date"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Web Url
            <Input
              value={tokenWebUrl}
              isRequired
              type="url"
              onChange={(e) => setTokenWebUrl(e.target.value)}
              placeholder="Token Web URL"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>

          {/* <Input value={tokenChartUrl} isRequired onChange={(e)=>setTokenChartUrl(e.target.value)}  placeholder='Token Chart Url' bg='#fff' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/> */}
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Token Swap Url
            <Input
              value={tokenSwapUrl}
              isRequired
              onChange={(e) => setTokenSwapUrl(e.target.value)}
              placeholder="Token Swap Url"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Telegram Url
            <Input
              value={tokenTelegramUrl}
              onChange={(e) => setTokenTelegramUrl(e.target.value)}
              placeholder="Token Telegram Url"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Discord Url
            <Input
              value={tokenDiscordUrl}
              onChange={(e) => setTokenDiscordUrl(e.target.value)}
              placeholder="Token Discord Url"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
          <label color="#fff" style={{ width: "80%", color: "#fff" }}>
            Twitter Url
            <Input
              value={tokenTwitterUrl}
              onChange={(e) => setTokenTwitterUrl(e.target.value)}
              placeholder="Token Twitetr Url"
              bg="#fff"
              h="50px"
              fontWeight="500"
              fontFamily="Poppins"
              fontSize="18px"
              lineHeight="27px"
              color="#B0ADAD"
              borderRadius="4px"
            />
          </label>
        </InputGroup>
        {error != "" && (
          <Text color="#ff0000" fontSize="14px">
            {error}
          </Text>
        )}
        <Button isLoading={requesting} p="5" onClick={submitForm}>
          UPLOAD TOKEN
        </Button>
      </Box>
    </Box>
  );
}

export default MyTokenList;
