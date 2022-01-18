import { Box, HStack, Image, StackProps, Text } from "@chakra-ui/react"

const Footer = (props: StackProps) => {
  // default nextjs footer info
  return (
    <HStack justify="center" align="center" {...props}>
        <Text
          as="a"
          mt={ 5 } 
          fontSize="xs"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Box as="span">
            <Image src="/vercel.svg" alt="Vercel Logo" width={ 12 } height={ 12 } />
          </Box>
        </Text>
    </HStack>
  )
}

export default Footer