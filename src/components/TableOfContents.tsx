import { Link, Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  headingLinkVariants,
  tocVariants
} from "../constants/TableOfConstants";

import { BlogPostHeading } from "../types/BlogPost";

const TableOfContents = ({ headings }: { headings: BlogPostHeading[] }) => {
  // Depth is equal to 2 for h2 headings
  const h2Headings = headings.filter((heading) => heading.depth === 2);

  // Convert the text inside into urls that lead to the headings
  h2Headings.forEach(
    (heading) =>
      (heading.url = heading.value
        .toLowerCase()
        .replace("()", "")
        .replace("?", "")
        .split(" ")
        .join("-"))
  );

  return (
    <>
      <DesktopTOC headings={h2Headings} />
      <MobileTOC headings={h2Headings} />
    </>
  );
};

export default TableOfContents;

const DesktopTOC = ({ headings }: { headings: BlogPostHeading[] }) => (
  <Box
    position="sticky"
    top="6rem"
    right="0"
    padding={3}
    border="2px solid"
    borderTopLeftRadius={24}
    borderBottomRightRadius={24}
    display={{ base: "none", lg: "block" }}
  >
    <Heading size="lg" borderBottom="2px dotted" padding={3} color="pink.300">
      Contents
    </Heading>
    {headings.map((heading) => (
      <Box
        key={heading.value}
        _hover={{
          color: "var(--theme-aqua)",
          borderBottom: "2px dotted"
        }}
      >
        <Link
          as={ScrollLink}
          to={`${heading.url}`}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Text padding={3}>{heading.value}</Text>
        </Link>
      </Box>
    ))}
  </Box>
);

const MotionFlex = motion(Flex);

const MobileTOC = ({ headings }: { headings: BlogPostHeading[] }) => {
  const [visible, setVisible] = useState(false);
  const [transY, setTransY] = useState(5);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setTransY(20);
      } else if (scrolled <= 300) {
        setTransY(5);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Box
      display={{ base: "flex", lg: "none" }}
      position="fixed"
      right={5}
      bottom={transY}
      zIndex="2"
      transition="all 0.5s ease-in-out"
    >
      <MotionFlex
        flexDirection="column"
        paddingX={1}
        border="2px solid"
        borderTopLeftRadius={24}
        borderBottomRightRadius={24}
        bgColor="var(--theme-mobile-nav-bg)"
        overflow="hidden"
        initial="closed"
        padding={2}
        animate={visible ? "open" : "closed"}
        variants={tocVariants}
      >
        <Text
          padding={3}
          color="pink.300"
          fontWeight="bold"
          fontSize="xl"
          borderBottom="2px dotted"
        >
          Contents
        </Text>
        {headings.map((heading) => (
          <MotionFlex
            key={heading.value}
            padding={3}
            variants={headingLinkVariants}
          >
            <Link
              as={ScrollLink}
              onClick={() => setVisible(!visible)}
              to={`${heading.url}`}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {heading.value}
            </Link>
          </MotionFlex>
        ))}
      </MotionFlex>
      <IconButton
        aria-label="Click to toggle the table of contents."
        bg="var(--theme-aqua)"
        alignSelf="flex-end"
        size="lg"
        borderRadius="full"
        fontSize="2xl"
        icon={visible ? <IoClose /> : <IoMenu />}
        onClick={() => setVisible(!visible)}
        zIndex="2"
      />
    </Box>
  );
};
