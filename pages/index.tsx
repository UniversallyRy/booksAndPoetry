import type { NextPage, GetStaticProps} from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import CoverCard, { BookProps } from '../components/bookCover/CoverCard';
import { searchHandler, bookHandler } from '../utils';
// const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Book: NextPage = ({ book }:any) => {
  const [bookObj, setBook] = useState({
    searchedInput: '',
    items: [],
    item: book,
  });
  // Search bookObj by searchedInput
  const getSearchHandler = ( e: { target: { value: string | undefined } } ) => {
    searchHandler(e, axios, bookObj, setBook)
  }
  // change dropdown book onClick
  const getBookHandler = ( id: string ) => {
    bookHandler(id, bookObj, setBook)
  }

  const { searchedInput, items, item } = bookObj;

  return (
    <Container align="center">
      <Head>
        <title>Google Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar
        value={searchedInput}
        data={items}
        changeHandler={getSearchHandler}
        clickHandler={getBookHandler}
      />
      <CoverCard data={item} />
    </Container>
  )
}
export const getStaticProps: GetStaticProps = async ( context:any) => {
  // const bookId = params.id
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/yl4dILkcqm4C`)
  const book: BookProps = await res.data
  return {
    props: {
      book: book, 
      revalidate: 60 * 60 * 6,
    },
  };
};

export default Book;