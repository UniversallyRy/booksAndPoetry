import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavBarContainer from "./Container";
import Link from "next/link";

type NavBarProps = React.PropsWithChildren<{}>;

const Navbar = ( props: NavBarProps ) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NavBarContainer { ...props }>
      <Link href="/poetry" passHref>
      <Button> Poetry </Button>
      </Link>
      <IconButton 
        aria-label={ "Color Toggle Button" }
        onClick={ toggleColorMode } 
        _focus={{ boxShadow: "none" }}
      >
        { colorMode === "light" ? <MoonIcon /> : <SunIcon /> }
      </IconButton>
    </NavBarContainer>
  );
};

export default Navbar;