import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export type MetaProps = {
  name: string;
  value: number | string | string[];
}

const BookMeta = ( props: MetaProps ) => {
  const { name, value } = props;
  return (
    <VStack>
      <Box>
        <Heading
          color= "red.900"
          fontSize= "sm"
          fontWeight= {600}
        >
          {name}
        </Heading>
        <Text fontSize="lg">{value}</Text>
      </Box>
    </VStack>
  );
};

export default BookMeta;