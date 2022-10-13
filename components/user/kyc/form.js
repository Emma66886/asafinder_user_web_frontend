import React, { useState } from "react";
import { Box, Input, Textarea, Button, Text, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import axios from "axios";
function Form() {
  const toast = useToast();
  const [presale, setPresale] = useState("Yes");
  const [projectname, setProjectName] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [video, setVideo] = useState("");
  const [exceptFundsRaising, setExceptFundsRaising] = useState("");
  const [currentFundsRaised, setCurrentFundsRaised] = useState("");
  const [whitepaper, setWhitePaper] = useState("");
  const [website, setwebsite] = useState("");
  const [aboutProj, setAboutProj] = useState("");
  const [tokenUseCase, setTokenUsecase] = useState("");
  const [projectType, setProjectType] = useState("");
  const [yearlyRevenue, setyearlyRevenue] = useState("");
  const [launchDate, setLaunchDate] = useState();
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);

  const submitForm = () => {
    setError("");
    if (
      !projectname ||
      !socialMedia ||
      !video ||
      !exceptFundsRaising ||
      !currentFundsRaised ||
      !whitepaper ||
      !website ||
      !aboutProj ||
      !tokenUseCase ||
      !projectType ||
      !yearlyRevenue ||
      !launchDate ||
      !transactionId
    ) {
      setError("All fields are required");
    }
  };
  return (
    <Box
      w="100vw"
      bg="#0D0E12"
      display="flex"
      flexDir="column"
      alignItems="center"
      color="#fff"
      minH="80vh"
    >
      <Box
        w={["80%", "70%", "60%", "50%"]}
        minH="80%"
        gap="5"
        display="flex"
        flexDir="column"
      >
        <Text
          fontSize="1.5em"
          fontWeight="medium"
          textAlign="center"
          color="#45AC75"
        >
          UPCOMING TOKEN FORM
        </Text>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          {" "}
          Name of Project
          <Input
            bg="#fff"
            color="#000"
            type="text"
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          {" "}
          PERSONAL SOCIAL MEDIA(LinkedIn, twitter and Facebook is accepted, make
          sure your picture is displayed on your profile)
          <Input
            onChange={(e) => setSocialMedia(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="Social media link"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          {" "}
          Upload a Video of about 5mins explaining your project( Real face )
          <Input
            mb="5"
            isRequired
            accept="video/*"
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
        <Box>
          <Text>TOKEN WILL BE A PRESALE?</Text>
          <Box display="flex" justifyContent="space-between">
            <Button
              _hover={{ color: "#c7c7c7" }}
              bg={presale.toLocaleLowerCase() === "yes" ? "#45AC75" : "#4C5C75"}
              onClick={(e) => setPresale("Yes")}
              w="30%"
              p="5"
            >
              Yes
            </Button>
            <Button
              _hover={{ color: "#c7c7c7" }}
              bg={presale.toLocaleLowerCase() === "no" ? "#45AC75" : "#4C5C75"}
              onClick={(e) => setPresale("No")}
              w="30%"
              p="5"
            >
              No
            </Button>
          </Box>
        </Box>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          EXPECTED FUNDRAISING:
          <Input
            onChange={(e) => setExceptFundsRaising(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="0.00"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          CURRENT FUNDS RAISED:
          <Input
            onChange={(e) => setCurrentFundsRaised(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="0.00"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          PROJECT WHITEPAPER URL:
          <Input
            onChange={(e) => setWhitePaper(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="URL"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          PROJECT WEBSITE:
          <Input
            onChange={(e) => setwebsite(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="website"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          ABOUT PROJECT:
          <Textarea
            onChange={(e) => setAboutProj(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          TOKEN USECASE (e.g utility):
          <Textarea
            onChange={(e) => setTokenUsecase(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          PROJECT TYPE(e.g NFT Marketplace)
          <Input
            onChange={(e) => setProjectType(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="Project Type"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          YEARLY EXPENDITURE/REVENUE:
          <Input
            onChange={(e) => setyearlyRevenue(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="0.00"
          />
        </label>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          LAUNCH DATE:
          <Input
            onChange={(e) => setLaunchDate(e.target.value)}
            bg="#fff"
            color="#000"
            type="date"
            placeholder="0.00"
          />
        </label>
        <Box w="100%">
          <Text>Pay $300 worth of $AFD to this address </Text>
          <Box bg="#111621" w="100%" p="5" borderRadius="10px" display="flex">
            <Text flex="10">
              TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI
            </Text>
            <CopyIcon
              flex="1"
              color="#45AC75"
              onClick={() => {
                navigator.clipboard
                  .writeText(
                    "TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI"
                  )
                  .then(() => {
                    toast({
                      title: "Address Copied.",
                      description: "Verification address copied to clipboard.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  })
                  .catch((e) => {
                    toast({
                      title: "An Error Occured.",
                      description:
                        "Error occred trying to copy verification address.",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  });
              }}
            />
          </Box>
        </Box>
        <label style={{ color: "#fff", fontSize: "0.9em" }}>
          Paste Transaction ID here
          <Input
            onChange={(e) => setTransactionId(e.target.value)}
            bg="#fff"
            color="#000"
            type="text"
            placeholder="Transaction ID"
          />
        </label>
        {error != "" && (
          <Text fontSize="0.8em" color="#ff0000">
            {error}
          </Text>
        )}
        <Text fontSize="0.8em" color="#fff">
          Note: Your Project will be listed officially 3days after your launch.
        </Text>
        <Button
          isLoading={isRequesting}
          onClick={submitForm}
          _hover={{ color: "#c7c7c7" }}
          bg="#45AC75"
          color="#fff"
          p="5"
          w="50%"
          alignSelf="center"
          mb="5"
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
