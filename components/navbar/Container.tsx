import { Flex } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...props }: any) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "red.900", "red.900"]}
        color={["orange.300", "orange.300", "orange.300", "orange.300"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }
  
  export default NavBarContainer