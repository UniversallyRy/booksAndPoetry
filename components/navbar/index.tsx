import { useRouter } from 'next/router'
import Link from "next/link";
import { Button, IconButton, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavBarContainer from "./Container";

type NavBarProps = React.PropsWithChildren<{}>;

const Navbar = ( props: NavBarProps ) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter()

  return (
    <NavBarContainer { ...props }>
      <ButtonGroup mx={5}>
        <Link href="/" passHref>
          <Button 
            aria-label='Go To Book Page'
            bg={router.pathname === '/poetry' ? "red.900" : undefined}
            _focus={{outline: "hidden"}}
          > 
            Books </Button>
        </Link>
        <Link href="/poetry" passHref>
          <Button 
            aria-label='Go To Poetry Page'
            bg={router.pathname === '/poetry' ? undefined: "red.900" }
            _focus={{outline: "hidden"}}
          > 
            Poetry </Button>
        </Link>
      </ButtonGroup>
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