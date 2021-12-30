import { Box, Text, IconButton } from "@chakra-ui/react"
import Image from 'next/image'
import logo from '../../public/preview-Star_Wars50.png'
import { InfoOutlineIcon } from '@chakra-ui/icons'

 
function Logo(props:any) {
  return (
    <Box {...props}>
      <IconButton   
        icon={<InfoOutlineIcon/>}
        aria-label='Logo' 
      /> 
    </Box>
  )
}

export default Logo