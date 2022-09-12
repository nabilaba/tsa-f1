import React from "react";
import { Avatar, Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { About } from "../../types/HomeSections";
import { member } from "../../content/About";

const AboutPage = ({ members }: { members: About[] }) => {
  return (
    <>
      <Heading>Team Member</Heading>
      <Stack spacing="5" mt="20px">
        {members.map((obj: About, index) => (
          <Member key={index} obj={obj} />
        ))}
      </Stack>
    </>
  );
};

const Member = ({ obj }: { obj: About }) => (
  <HStack spacing="4">
    <Avatar
      name={obj.name}
      src={member.find((x) => x.name === obj.name)?.image}
      size="lg"
    />
    <Box>
      <Heading fontSize="lg" alignSelf="center">
        {obj.name}
      </Heading>
      <Text alignSelf="center">{obj.as}</Text>
    </Box>
  </HStack>
);

export default AboutPage;
