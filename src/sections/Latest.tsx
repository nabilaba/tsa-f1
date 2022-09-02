import React from "react";
import { Flex } from "@chakra-ui/react";
import { LinkBox, LinkOverlay, Heading, Text } from "@chakra-ui/layout";
import { Link as GatsbyLink } from "gatsby";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { useBlogListQuery } from "../hooks/useBlogListQuery";

const Latests = () => {
  const { allMdx } = useBlogListQuery();

  const blogsToShow =
    allMdx &&
    allMdx.edges &&
    allMdx.edges.filter(({ node }) => node.frontmatter.title.toLowerCase());

  return (
    <HomeContainer id="latest">
      <AnimatedContainer direction="column" marginBottom="0">
        <SectionHeading marginBottom={2}>Latest Post</SectionHeading>

        <Flex flexDirection="column" justifyContent="space-evenly">
          {blogsToShow &&
            blogsToShow.slice(0, 3).map(({ node }, index) => (
              <LinkBox
                key={node.id}
                marginY={5}
                transition="0.2s linear"
                _hover={{
                  color: "var(--theme-aqua)"
                }}
              >
                <LinkOverlay as={GatsbyLink} to={node.fields.slug}>
                  <Heading>{node.frontmatter.title}</Heading>
                </LinkOverlay>
                <Text color="gray.300" fontSize="sm">
                  {node.frontmatter.date} - {node.fields.readingTime.text}
                </Text>
                <Text color="gray.300" fontStyle="italic" marginTop={2}>
                  {node.excerpt}
                </Text>
              </LinkBox>
            ))}
        </Flex>
      </AnimatedContainer>
    </HomeContainer>
  );
};

export default Latests;
