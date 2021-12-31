import{ useState } from 'react'
import NavBarContainer from './Container'
import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = (props:any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return(
      <NavBarContainer {...props}>
        <Flex align="center">
        </Flex>
          <Button alignSelf='flex-end' onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
      </NavBarContainer>
    )
  }

export default Navbar;
  