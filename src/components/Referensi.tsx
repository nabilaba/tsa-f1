import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Referensi = ({ children }: { children: any }) => {
  return (
    <Box borderWidth="1px" borderColor="#f687b3" padding="20px">
      <Heading as="h3">Referensi</Heading>
      {children}
    </Box>
  );
};
export default Referensi;
