import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Partnerships({ partner, setPartner }) {
  const [partnerInp, setPartnerInp] = useState("");
  return (
    <label
      style={{
        height: "200px",
        width: "80%",
        background: "#fff",
        borderRadius: "4px",
      }}
    >
      <Text pl="2px">Add your Partnerships</Text>
      <Box display="flex" gap="2px" pl="2px" pr="2px">
        <Input
          borderColor="#000"
          border="2px"
          value={partnerInp}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!partnerInp) return;
              setPartner((v) => [...v, partnerInp]);
              setPartnerInp("");
            }
          }}
          onChange={(e) => setPartnerInp(e.target.value)}
        />
        <Button
          border="2px"
          borderColor="#000"
          onClick={(e) => {
            if (!partnerInp) return;
            setPartner((v) => [...v, partnerInp]);
            setPartnerInp("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box h="65%" overflowY="scroll">
        {partner.map((r, i) => (
          <Box
            display="flex"
            flex="1"
            alignItems="center"
            justifyContent="space-between"
            pr="2px"
            pl="2px"
            key={i + "partnerhipsid"}
            borderBottom="2px solid"
            borderBottomColor="#000"
          >
            <Text>{r}</Text>
            <CloseIcon
              cursor="pointer"
              onClick={(e) => setPartner((v) => removeItem(v, r))}
            />
          </Box>
        ))}
        {partner.length === 0 && (
          <Text textAlign="center" fontWeight="600" fontSize="20px">
            NO PARTNERSHIP ADDED
          </Text>
        )}
      </Box>
    </label>
  );
}

function removeItem(arr, item) {
  return arr.filter((v) => v != item);
}

export default Partnerships;
