import type { NextPage, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import CoverCard, { BookProps } from '../components/bookCover/CoverCard';
import { searchHandler, bookHandler } from '../utils/coverHandlers';

const Book: NextPage = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [bookObj, setBook] = useState({
    searchedInput: '',
    items: [],
    item: book,
  });
  // Search bookObj by searchedInput
  const getSearchHandler = ( e: { target: { value: string | undefined } } ) => {
    searchHandler({ e, axios, bookObj, setBook })
  };
  // change dropdown book onClick
  const getBookHandler = ( id: string ) => {
    bookHandler({ id, bookObj, setBook })
  };

  const { searchedInput, items, item } = bookObj;
  return (
    <Container>
      <SearchBar
        value={ searchedInput }
        data={ items }
        changeHandler={ getSearchHandler }
        clickHandler={ getBookHandler }
      />
      <CoverCard 
        data={ item } 
        aria-label={ "div containing book information" } 
      />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ( context: GetStaticPropsContext ) => {
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/iCWgDwAAQBAJ`);
  const book: BookProps = await res.data;
  return {
    props: {
      book: book, 
      revalidate: 60 * 60 * 6,
    },
  };
};

export default Book;