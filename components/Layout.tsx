import { Flex } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./Footer";

type PropType = React.PropsWithChildren<{}>;

const Layout = ({ children, ...props }: PropType ) => {
  // Layout component to make sure every page is flexed properly
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