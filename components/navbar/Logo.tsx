import { Box, Text } from "@chakra-ui/react"
import Image from 'next/image'
import logo from '../../public/preview-Star_Wars50.png'
 
function Logo(props:any) {
  return (
    <Box {...props}>
      <Image 
        src={logo}
        alt="Star Wars Logo"
      />
    </Box>
  )
}

export default Logo