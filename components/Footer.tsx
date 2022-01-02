import { Box, HStack, Image, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <HStack justify="center" align="center">
        <Text
          mt={ 5 } 
          as="a"
          fontSize="xs"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Box as="span">
            <Image src="/vercel.svg" alt="Vercel Logo" width={ 12 } height={ 12 } />
          </Box>
        </Text>
    </HStack>
  )
}

export default Footer