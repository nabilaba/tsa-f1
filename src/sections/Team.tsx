import React from "react";
import { Avatar, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { About } from "../types/HomeSections";
import { member } from "../content/About";

const MotionFlex = motion(Flex);

const AboutPage = () => {
  return (
    <HomeContainer id="team" maxW="100%">
      <AnimatedContainer direction="column">
        <SectionHeading>Our Team</SectionHeading>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justify="center"
          align="center"
        >
          <SkillSet member={member} />
        </Flex>
      </AnimatedContainer>
    </HomeContainer>
  );
};

const SkillSet = ({ member }: { member: About[] }) => (
  <Flex direction="column">
    <SimpleGrid
      columns={{ base: 2, lg: 3 }}
      spacingX="50px"
      spacingY={{ base: "50px", md: "75px" }}
      autoColumns={"1fr"}
      autoRows={"1fr"}
    >
      {member.map((member: About) => (
        <LargeSkill key={member.name} member={member} />
      ))}
    </SimpleGrid>
  </Flex>
);

const LargeSkill = ({ member }: { member: About }) => (
  <MotionFlex
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85 }}
  >
    <Avatar name={member.name} src={member.image} size="2xl" />
    <Heading fontSize={"xl"} mt="2">{member.name}</Heading>
    {member.as}
  </MotionFlex>
);

export default AboutPage;
