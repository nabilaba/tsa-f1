import React, {
  ComponentPropsWithRef,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import { Flex, Grid, Heading, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

type ContainerProps = {
  [property: string]: unknown; // extra Chakra UI properties
};

export const AnimatedContainer = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <SlideFade
      in={visible}
      offsetY="100px"
      transition={{ enter: { duration: 0.5 } }}
    >
      <Flex ref={ref} {...otherProps}>
        {children}
      </Flex>
    </SlideFade>
  );
};

export const HomeContainer = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => {
  return (
    <Flex
      flexDirection="column"
      marginX="auto"
      minH={{ base: "auto", md: "80vh" }}
      maxH="100%"
      padding={{ base: 5, md: 10 }}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

type BlogContainerProps = ComponentPropsWithRef<"div"> & {
  [property: string]: unknown;
};

export const BlogContainer = forwardRef<
  HTMLInputElement,
  PropsWithChildren<BlogContainerProps>
>(({ children, ...otherProps }, ref) => {
  return (
    <Grid
      ref={ref}
      templateColumns={{ base: "1fr", lg: "2fr 1.5fr", xl: "3fr 1.5fr" }}
      gap={{ base: 0, lg: 6 }}
      marginBottom="6rem"
      marginX="auto"
      marginTop={{ base: "2rem", lg: "4rem" }}
      minH="100vh"
      paddingX={{ base: 8, lg: 8 }}
      w="full"
      {...otherProps}
    >
      {children}
    </Grid>
  );
});

BlogContainer.displayName = "BlogContainer";

export const SectionHeading = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => (
  <Heading
    fontSize={{ base: "3xl", xl: "5xl" }}
    textAlign="center"
    marginBottom={10}
    display="inline-block"
    lineHeight="1.1em"
    {...otherProps}
  >
    {children}
  </Heading>
);
