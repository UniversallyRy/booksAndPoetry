import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export type MetaProps = {
  name: string;
  value: number | string | string[];
}

const BookMeta = ( props: MetaProps ) => {
  const { name, value } = props;
  return (
    <Box align={ "center" }>
      <Heading
        color={ useColorModeValue("red.400", "red.900") }
        fontSize={ "sm" }
        fontWeight={ 600 }
      >
        { name }
      </Heading>
      <Text fontSize="lg">{ value }</Text>
    </Box>
  );
};

export default BookMeta;