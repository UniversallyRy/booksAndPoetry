import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavBarContainer from './Container';

type NavBarProps = React.PropsWithChildren<{}>;

const Navbar = ( props: NavBarProps ) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NavBarContainer { ...props }>
      <Button onClick={ toggleColorMode }>
        { colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
      </Button>
    </NavBarContainer>
  );
};

export default Navbar;