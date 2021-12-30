import { Box, HStack, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <HStack mt={5} align="center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={16} height={10} />
          </span>
        </a>
    </HStack>
  )
}

export default Footer