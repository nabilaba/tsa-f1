import React from "react";
import { Avatar, Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { About } from "../../types/HomeSections";
import { member } from "../../content/About";

const AboutPage = ({ members }: { members: About[] }) => {
  var res = member.map((obj) => members.find((o) => o.name === obj.name) || obj);

  return (
    <>
      <Heading>Team Member</Heading>
      <Stack spacing="5" mt="20px">
        {res.map((member: About) => (
            <Member key={member.name} member={member} />
        ))}
      </Stack>
    </>
  );
};

const Member = ({ member }: { member: About }) => (
  <HStack>
    <Avatar name={member.name} src={member.image} size="md" />
    <Box>
      <Heading fontSize="lg" alignSelf="center">
        {member.name}
      </Heading>
      <Text alignSelf="center">{member.as}</Text>
    </Box>
  </HStack>
);

export default AboutPage;
