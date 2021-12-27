import NextLink from 'next/link'
import { Text } from "@chakra-ui/react"

const MenuItem = (props:any) => {
  const { children, isLast, to = "/", ...rest } = props
    return (
      <Text 
          mb={{ base: isLast ? 0 : 8, sm: 0 }}
          mr={{ base: 0, sm: isLast ? 0 : 8 }}
          display="block"
          {...rest}
      >
        <NextLink href={to}>
            {children}
        </NextLink>
      </Text>
    )
}

export default MenuItem;  