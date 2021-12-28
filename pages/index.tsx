import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Heading, VStack, Flex } from '@chakra-ui/react'
import HomeCards from '../components/home'

const Home: NextPage = () => {
  return (
    <Flex  align="center" direction='column' p={1}>
      <Head>
        <title>Star Wars Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <VStack
          p={2}
        >
          <Heading
            m={0}
            lineHeight={1.15}
            fontSize='4rem'
          >
            Star Wars Wiki
          </Heading>

          <Box>
            <HomeCards/>
          </Box>
        </VStack>

    </Flex>
  )
}

export default Home
