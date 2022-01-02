import { Flex } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children, props } :any) => {
  return (
    <Flex 
        direction="column"
        justify="center"
        align="center"
        { ...props }
    >
      <Head>
        <title>Search For Books</title>
        <meta name="Home" content="Generated by next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
      <footer>
        <Footer/>
      </footer>
    </Flex>
  )
}

export default Layout