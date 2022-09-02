import React, { createRef } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Box, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { HiClock, HiCalendar } from "react-icons/hi";

import Layout from "../../components/Layout";
import {
  BlogContainer,
  SectionHeading
} from "../../components/LayoutComponents";
import MDX from "../../components/MDXProvider";
import Seo from "../../components/SEO";
import TableOfContents from "../../components/TableOfContents";
import ReadingProgress from "../../components/ReadingProgress";
import { BlogPostProps } from "../../types/BlogPost";

// Styling for the code blocks
require("../../css/prismjs/prism-holi.css"); // eslint-disable-line

const BlogPost = ({ data, pageContext }: BlogPostProps) => {
  const {
    body,
    frontmatter: { title, date },
    headings,
    fields: { readingTime }
  } = data.mdx;

  const { prev, next } = pageContext;

  const target = createRef<HTMLInputElement>();

  return (
    <Layout type="blog">
      <Seo title={title} />
      <Box>
        <BlogContainer ref={target}>
          <Flex direction="column" maxW={{ base: "90vw", lg: "70vw" }}>
            <SectionHeading marginBottom={0}>{title}</SectionHeading>

            <Flex
              justifyContent="space-evenly"
              color="gray.300"
            >
              <Flex alignItems="center">
                <Icon as={HiCalendar} marginRight={2} />
                {date}
              </Flex>
              <Flex alignItems="center">
                <Icon as={HiClock} marginRight={2} />
                {readingTime.text}
              </Flex>
            </Flex>

            <ReadingProgress target={target} />

            {/* The blog's body */}
            <MDX>{body}</MDX>

            {/* Links to the previous and next blogs */}
            <Divider />

            <Flex
              marginY={10}
              justifyContent="space-between"
              fontSize="xl"
              alignItems="center"
            >
              {prev !== null && (
                <Link as={GatsbyLink} to={prev.fields.slug} width="100%">
                  <Flex alignItems="center">
                    <Icon as={IoArrowBack} />
                    <Text noOfLines={1}>{prev.frontmatter.title}</Text>
                  </Flex>
                </Link>
              )}
              {next !== null && (
                <Link as={GatsbyLink} to={next.fields.slug} width="100%">
                  <Flex alignItems="center" justifyContent="flex-end">
                    <Text noOfLines={1}>{next.frontmatter.title}</Text>
                    <Icon alignSelf="center" as={IoArrowForward} />
                  </Flex>
                </Link>
              )}
            </Flex>

            <Divider />
          </Flex>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <aside>
              <TableOfContents headings={headings} />
            </aside>
          )}
        </BlogContainer>
      </Box>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      headings {
        value
        depth
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
