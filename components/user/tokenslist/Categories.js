import { Box, Checkbox, CheckboxGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Categories({ setCategories }) {
  return (
    <Box h="200px" w="80%" bg="#fff" pl="2px" borderRadius="4px">
      <Text fontSize="1.1em">Categories</Text>
      <CheckboxGroup onChange={(e) => setCategories(e)}>
        <Stack>
          <Checkbox value="Utility Token">Utility Token</Checkbox>
          <Checkbox value="Payment Token">Payment Token</Checkbox>
          <Checkbox value="Security Token">Security Token</Checkbox>
          <Checkbox value="Stable Token">Stable Coin</Checkbox>
          <Checkbox value="Meme Coin">Meme Coin</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
}

export default Categories;
