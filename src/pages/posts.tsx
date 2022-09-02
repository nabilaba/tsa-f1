import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { LinkBox, LinkOverlay, Heading, Text, Flex } from "@chakra-ui/layout";

import Layout from "../components/Layout";
import { HomeContainer, SectionHeading } from "../components/LayoutComponents";
import Seo from "../components/SEO";
import { useBlogListQuery } from "../hooks/useBlogListQuery";

const BlogList = () => {
  const { allMdx } = useBlogListQuery();
  const [filter, setFilter] = useState("");

  const blogsToShow =
    allMdx &&
    allMdx.edges &&
    allMdx.edges.filter(({ node }) =>
      node.frontmatter.title.toLowerCase().includes(filter)
    );

  return (
    <Layout type="blog">
      <Seo title="Posts" />
      <HomeContainer minW="40vw">
        <SectionHeading marginBottom={0}>Posts</SectionHeading>
        
        <Flex justifyContent="space-evenly" color="gray.300" marginBottom={20}>
          <Flex alignItems="center">
            Total: {allMdx.totalCount} posts
          </Flex>
        </Flex>
        
        <Input
          marginBottom={5}
          _placeholder={{ color: "gray.300" }}
          value={filter}
          placeholder="Search for a blog..."
          onChange={({ target }) => setFilter(target.value)}
          size="lg"
          variant="filled"
        />

        <Flex flexDirection="column" justifyContent="space-evenly">
          {blogsToShow &&
            blogsToShow.map(({ node }) => (
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
      </HomeContainer>
    </Layout>
  );
};

export default BlogList;
