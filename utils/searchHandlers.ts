import { Dispatch, SetStateAction } from "react";
import { Axios } from "axios";
import { BookProps } from "../components/bookCover/CoverCard";

export type BookObjProps = {
  searchInput: string;
  searchList: never[];
  book: BookProps;
}

export type SearchProps = {
  e: {target: { value: string | undefined}};
  axios: Axios;
  bookObj: BookObjProps; 
  setBook: Dispatch<SetStateAction<BookObjProps>>;
}

export type onClickProps = {
  id: string;
  bookObj: BookObjProps;
  setBook: Dispatch<SetStateAction<BookObjProps>>;
}

export const getSearchedBooks = ({ e, axios, bookObj, setBook }: SearchProps ) => {
  const searchedInput = e.target.value;
  
  if (searchedInput) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedInput}`)
      .then(( res ) => res.data )
      .then((data ) => {
        if ( data.totalItems > 0 ) {
          setBook({ 
            ...bookObj,
            searchInput: searchedInput,
            searchList: data.items
          });
        }
      })
      .catch(( err ) => console.log( err ));
  }else {
    setBook({ 
      ...bookObj,
      searchList: [], 
    });
  }
}

export const getSearchedPoems = ({ e, axios, poemObj, setPoem }: any ) => {
  const searchedInput = e.target.value;
  
  if (searchedInput) {
    axios.get(`https://poetrydb.org/author,poemcount/${searchedInput};10/title`)
      .then(( res:any ) => {
        return res.data
      })
      .then((data:any ) => {
        if ( data.length > 0 ) {
          const titles:any = []
          data.map((item: {title: never}, i: number) => {
            titles.push({id: i, title: item.title});
          })
          setPoem({ 
            ...poemObj,
            searchInput: searchedInput,
            searchList: titles
          });
        }
      })
      .catch(( err:any ) => console.log( err ));
  } else {
    setPoem({ 
      ...poemObj,
      searchList: [], 
    });
  }
};
  
export const bookHandler = ({ id, bookObj, setBook }: onClickProps ) => {
  const { searchList } = bookObj;
  const targetItem = searchList.filter(( item:{ id: string }) => { return item.id === id })[0];
    
  setBook({
    book: targetItem,
    searchInput: "",
    searchList: [],
  });
};

export const poemHandler = async ({ id, axios, poemObj, setPoem }: any ) => {
  const { searchList, searchInput } = poemObj;
  const targetItem = searchList.filter(( item:{ id: string }) => { return item.id === id })[0];
  const res = await axios.get(`https://poetrydb.org/title,author/${targetItem.title};${searchInput}`);
  const poem = await res.data[0];
  setPoem({
    poem: poem,
    searchInput: "",
    searchList: [],
  });
};
  