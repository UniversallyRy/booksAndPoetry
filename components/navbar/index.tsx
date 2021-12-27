import{ useState } from 'react'
import MenuToggle from './MenuToggle'
import Logo from './Logo'
import NavBarContainer from './Container'
import MenuLinks from './MenuLinks'
import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = (props:any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return(
      <NavBarContainer {...props}>
        <Flex align="center">
          <Logo
            w="50px"
            h="25px"
          />
        </Flex>
        <MenuToggle toggleMenu={toggle} show={isOpen} />
        <MenuLinks show={isOpen} />
          <Button alignSelf='flex-end' onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
      </NavBarContainer>
    )
  }

export default Navbar;
  