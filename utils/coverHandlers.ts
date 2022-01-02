import { Dispatch, SetStateAction } from "react";
import { Axios } from "axios";
import { BookProps } from '../components/bookCover/CoverCard';

export type BookObjProps = {
    searchedInput: string;
    items: never[];
    item: BookProps;
}

export type SearchProps = {
    e: {target: { value: string }};
    axios: Axios;
    bookObj: BookObjProps; 
    setBook: Dispatch<SetStateAction<{ searchedInput: string; items: never[]; item: BookProps }>>;
}

export type onClickProps = {
    id: number;
    bookObj: BookObjProps;
    setBook: Dispatch<SetStateAction<{ searchedInput: string; items: never[]; item: BookProps }>>;
}

export const searchHandler = ({ e, axios, bookObj, setBook}: SearchProps ) => {
    const searchedInput = e.target.value;
  
    if (searchedInput) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedInput}`)
        .then( (res:any) => res.data )
        .then( (data:any) => {
          if (data.totalItems > 0) {
            setBook({ 
              ...bookObj,
              searchedInput: searchedInput,
              items: data.items
            });
          }
        })
        .catch( (err:any) => console.log(err) );
    } else {
      setBook({ 
        ...bookObj,
        items: [], 
      });
    }
}
  
export const bookHandler = ({ id, bookObj, setBook }: onClickProps) => {
    const { items } = bookObj;
    const targetItem = items.filter((item:any) => { return item.id === id })[0];
    
    setBook({
      searchedInput: '',
      items: [],
      item: targetItem
    });
};
  