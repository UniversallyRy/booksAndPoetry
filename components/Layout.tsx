import { Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Head from "next/head";

type PropType = React.PropsWithChildren<{}>;

const Layout = ({ children, ...props }: PropType ) => {
  return (
    <Flex 
        direction="column"
        justify="center"
        align="center"
        w="full"
        { ...props }
    >
      <Navbar aria-label="Navbar"/>
      <main aria-label="body">
        { children }
      </main>
      <footer>
        <Footer aria-label="footer"/>
      </footer>
    </Flex>
  )
}

export default Layout