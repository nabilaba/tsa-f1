import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiAlignTop } from "react-icons/ri";
import { animateScroll } from "react-scroll";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [transY, setTransY] = useState(0);

  useEffect(() => {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
      setTransY(5);
    } else if (scrolled <= 300) {
      setVisible(false);
      setTransY(0);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const sendToTop = () => {
    animateScroll.scrollToTop({ duration: "750", smooth: true });
  };

  return (
    <IconButton
      position="fixed"
      bottom={transY}
      right={{ base: "5", lg: "10" }}
      zIndex="1"
      visibility={visible ? "visible" : "hidden"}
      opacity={visible ? "1" : "0"}
      transition="all 0.5s ease-in-out"
      aria-label="Click to top."
      bg="var(--theme-aqua)"
      size="lg"
      borderRadius="full"
      fontSize="2xl"
      icon={<RiAlignTop />}
      onClick={sendToTop}
    />
  );
};

export default Footer;
