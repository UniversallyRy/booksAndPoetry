import type { NextPage, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import { useState } from "react";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import { poemHandler, pSearchHandler } from "../../utils/coverHandlers";
// todos: TESTS, carousel
const Poetry: NextPage = ({ quote }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [poemObj, setPoem] = useState({
    searchedInput: "",
    items: [],
    item: quote,
  });
  //quote OBJ
//  author: "Walt Whitman"
// linecount: "217"​​
// lines: Array(252) [ "1", "I SING the Body electric;", "The armies of those I love engirth me, and I engirth them;", … ]
// title: "I Sing the Body Electric."

  const getSearchHandler = ( e: { target: { value: string | undefined } } ) => {
    pSearchHandler({ e, axios, poemObj, setPoem })
  };
  // change dropdown book onClick
  const getPoemHandler = ( id: string ) => {
    poemHandler({ id, axios, poemObj, setPoem })
  };

  const { searchedInput, items, item } = poemObj;
  return (
    <Container align="center">
        <SearchBar
            data={items}
            value={searchedInput}
            changeHandler={getSearchHandler}
            clickHandler={getPoemHandler}
        />
        <Heading m={1}>{item[0].title}</Heading>
        <Heading m={1}>{ "By" }</Heading>
        <Heading m={1}>{item[0].author}</Heading>
        <VStack m={4}>
            {item[0].lines.map((line:string, i:number) => {
                return <Text key={i}>{line}</Text>
            })}
        </VStack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ( context: GetStaticPropsContext ) => {
  const res = await axios.get("https://poetrydb.org/random");
  const quote = await res.data;
  return {
    props: {
      quote, 
      revalidate: 60 * 60 * 6,
    },
  };
};

export default Poetry;