import { Flex } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...props }: any) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="flex-end"
        w="100%"
        h={12}
        mb={8}
        p={1}
        bg={["primary.500", "primary.500", "red.900", "red.900"]}
        color={["orange.300", "orange.300", "orange.300", "orange.300"]}
        opacity={[0.5]}
        {...props}
      >
        {children}
      </Flex>
    )
  }
  
  export default NavBarContainer