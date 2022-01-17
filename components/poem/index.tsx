import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

 export type PoemProps = {
    poem:{
        author: string;
        lines: string[];
        title: string;
        linecount: string;
    }
}
function PoemCard({ poem }: PoemProps) {
  return (
    <Box p={1} w="full" bg={"red.900"} rounded={"sm"} boxShadow={"lg"}>
        <Heading fontSize={"xl"} m={1}>{poem.title}</Heading>
        <Heading fontSize={"lg"} m={1}>{ "By" }</Heading>
        <Heading fontSize={"xl"} m={1}>{poem.author}</Heading>
        <VStack m={4}>
            {poem.lines.map((line:string, i:number) => {
                return <Text key={i}>{line}</Text>
            })}
        </VStack>
    </Box>
  );
};

export default PoemCard;
