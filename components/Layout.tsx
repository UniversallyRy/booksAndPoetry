import { Flex } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './Footer'

const Layout = ({ children, props } :any) => {
  return (
    <Flex 
        direction="column"
        align="center"
        m="0 auto"
        { ...props }
    >
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