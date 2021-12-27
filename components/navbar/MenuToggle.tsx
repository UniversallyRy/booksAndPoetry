import { Box, Flex, IconButton } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
 
const MenuToggle = ({ toggleMenu, show }:any) => {
  return (
    <Box
      display={{ base: "block", md: "none"   }}
      flexBasis={{ base: "auto", md: "auto" }} 
      onClick={toggleMenu}
    
    >
      {show ? <IconButton   
                icon={<CloseIcon/>}
                aria-label='Close Icon' 
              /> 
            : <IconButton
                icon={<HamburgerIcon/>}
                aria-label='Menu Icon' 
              />}
    </Box>
  )
}

export default MenuToggle