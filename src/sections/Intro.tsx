import React from "react";
import { Button, Heading, Icon, Link, SlideFade, Text } from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";

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
        <Heading size="xl" marginBottom={16}>
          In Program Cyber Security Analyst
          <br />
          At DTS Talent Scouting Academy (TSA) Batch 2
        </Heading>

        {/* <Link href="https://github.com/1Gokul" target="_blank" rel="noreferrer">
          <Button aria-label="Send Email" p={10} fontSize="2xl">
            <Icon as={VscGithubInverted} marginRight={4} /> My GitHub
          </Button>
        </Link> */}
      </SlideFade>
    </HomeContainer>
  );
};

export default Intro;
