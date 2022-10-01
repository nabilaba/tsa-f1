import React from "react";
import { Heading, SlideFade } from "@chakra-ui/react";
import { HomeContainer } from "../components/LayoutComponents";

const Intro = () => {
  return (
    <HomeContainer marginTop={{ base: 0, md: 5 }}>
      <SlideFade
        in={true}
        offsetY="30px"
        transition={{ enter: { duration: 0.3, delay: 0.2 } }}
      >
        <Heading size="lg" marginY={5}>
          Hey there! We're
        </Heading>
        <Heading
          marginY={8}
          fontSize={{ base: "6xl", md: "9xl" }}
          letterSpacing="-2px"
          bgGradient="linear(to-r, var(--theme-green), var(--theme-aqua))"
          bgClip="text"
          fontWeight="extrabold"
        >
          Group 1<br />
          From Class F
        </Heading>
        <Heading size="xl" marginBottom={8}>
          In Program Cyber Security Analyst
          <br />
          At DTS Talent Scouting Academy (TSA) Batch 2
        </Heading>
      </SlideFade>
    </HomeContainer>
  );
};

export default Intro;
