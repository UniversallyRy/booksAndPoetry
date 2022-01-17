import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

 export type PoemProps = {
    item:{
        author: string;
        lines: string[];
        title: string;
        linecount: string;
    }
}
function PoemCard({ item }: PoemProps) {
  return (
    <Box p={1} w="full" bg={"red.900"} rounded={"sm"} boxShadow={"lg"}>
        <Heading fontSize={"xl"} m={1}>{item.title}</Heading>
        <Heading fontSize={"lg"} m={1}>{ "By" }</Heading>
        <Heading fontSize={"xl"} m={1}>{item.author}</Heading>
        <VStack m={4}>
            {item.lines.map((line:string, i:number) => {
                return <Text key={i}>{line}</Text>
            })}
        </VStack>
    </Box>
  )
}

export default PoemCard;
