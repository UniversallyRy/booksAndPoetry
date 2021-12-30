import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

const BookMeta = ( props: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; value: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; } ) => {
  return (
    <VStack>
      <Box>
        <Heading
          color= "red.900"
          fontSize= "sm"
          fontWeight= {600}
        >
          {props.name}
        </Heading>
        <Text fontSize="lg">{props.value}</Text>
      </Box>
    </VStack>
  );
}

export default BookMeta;