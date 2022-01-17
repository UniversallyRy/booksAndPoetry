import { ButtonGroup, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavBarContainer from "./Container";
import NavButton from "./Button";

type NavBarProps = React.PropsWithChildren<{}>;

const Navbar = ( props: NavBarProps ) => {
  // chakra-ui  hook for toggling
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NavBarContainer { ...props }>
      <ButtonGroup mx={5}>
        <NavButton
          buttonName={"Books"}
          pathName="/"
        />
        <NavButton
          buttonName={"Poetry"}
          pathName="/poetry"
        />
      </ButtonGroup>
      <IconButton 
        aria-label={ "Clicking toggles day or night mode" }
        onClick={ toggleColorMode } 
        rounded={"sm"}
        // todo: edit outline styling to match navbuttons
        _focus={{ boxShadow: "none" }}
      >
        { colorMode === "light" ? <MoonIcon /> : <SunIcon /> }
      </IconButton>
    </NavBarContainer>
  );
};

export default Navbar;