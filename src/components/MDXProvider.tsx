// Many thanks to Ryosuke- https://whoisryosuke.com/ for the component
// https://github.com/whoisryosuke/next-mdx-chakra-docs/blob/master/components/MDXProvider.jsx

import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Code,
  Flex,
  Heading,
  Icon,
  Image,
  Kbd,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
  Divider
} from "@chakra-ui/react";

type ComponentProps = {
  children: ReactNode;
  [property: string]: unknown; // extra Chakra UI properties
};

const mdComponents = {
  img: (props: ComponentProps) => (
    <Image
      as="img"
      border="2px solid var(--theme-pink)"
      borderRadius={8}
      {...props}
    />
  ),
  h1: (props: ComponentProps) => (
    <Heading as="h1" size="2xl" mt={5} {...props} scrollMarginTop="100px" />
  ),
  h2: (props: ComponentProps) => (
    <Heading as="h2" size="xl" mt={5} {...props} scrollMarginTop="100px" />
  ),
  h3: (props: ComponentProps) => (
    <Heading as="h3" size="lg" mt={5} {...props} scrollMarginTop="100px" />
  ),
  h4: (props: ComponentProps) => (
    <Heading as="h4" size="md" mt={5} {...props} scrollMarginTop="100px" />
  ),
  h5: (props: ComponentProps) => (
    <Heading as="h5" size="sm" mt={5} {...props} scrollMarginTop="100px" />
  ),
  h6: (props: ComponentProps) => (
    <Heading as="h6" size="xs" mt={5} {...props} scrollMarginTop="100px" />
  ),
  p: (props: ComponentProps) => (
    <Text
      as="p"
      mb={4}
      fontSize="xl"
      textAlign="justify"
      wordBreak="break-word"
      whiteSpace="pre-wrap"
      {...props}
    />
  ),
  a: (props: ComponentProps) => (
    <Link
      as="a"
      color="var(--theme-aqua)"
      textUnderlineOffset="0.25rem"
      textDecoration="underline"
      textDecorationStyle="dotted"
      _hover={{
        color: "var(--theme-pink)",
        textDecorationStyle: "wavy"
      }}
      {...props}
    />
  ),
  pre: (props: ComponentProps) => <Box as="pre" {...props} p={2} my={8} />,
  code: (props: ComponentProps) => <Code {...props} bgColor="transparent" />,
  ul: (props: ComponentProps) => (
    <List ml={10} as="ul" styleType="disc" fontSize="xl" {...props} />
  ),
  ol: (props: ComponentProps) => (
    <List ml={10} as="ol" styleType="decimal" fontSize="xl" {...props} />
  ),
  li: (props: ComponentProps) => <ListItem {...props} />,
  hr: (props: ComponentProps) => <Divider my={8} {...props} />,
  note: (props: ComponentProps) => (
    <Alert status="info" variant="left-accent" {...props}>
      <AlertIcon />
      {props.children}
    </Alert>
  ),
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Code,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Kbd,
  Link,
  List,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
};

const MDX = ({
  children,
  localImages
}: {
  children: string;
  [property: string]: unknown;
}) => {
  return (
    <MDXProvider components={mdComponents}>
      <MDXRenderer localImages={localImages}>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDX;
