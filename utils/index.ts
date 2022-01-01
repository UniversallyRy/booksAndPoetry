import { Dispatch, SetStateAction } from "react";

export const isEmpty = ( obj: {} ) => {
  return Object.keys(obj).length === 0;
}
  
export const truncate = ( string: string, size: number ) => {
  return string.length > size ? string.slice(0, size - 1) + "..." : string;
}
  
export const languages = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'ga', name: 'Irish' },
  { code: 'sq', name: 'Albanian' },
  { code: 'it', name: 'Italian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ja', name: 'Japanese' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'kn', name: 'Kannada' },
  { code: 'eu', name: 'Basque' },
  { code: 'ko', name: 'Korean' },
  { code: 'bn', name: 'Bengali' },
  { code: 'la', name: 'Latin' },
  { code: 'be', name: 'Belarusian' },
  { code: 'lv', name: 'Latvian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'ca', name: 'Catalan' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'zh-CN', name: 'Chinese Simplified' },
  { code: 'ms', name: 'Malay' },
  { code: 'zh-TW', name: 'Chinese Traditional' },
  { code: 'mt', name: 'Maltese' },
  { code: 'hr', name: 'Croatian' },
  { code: 'no', name: 'Norwegian' },
  { code: 'cs', name: 'Czech' },
  { code: 'fa', name: 'Persian' },
  { code: 'da', name: 'Danish' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'en', name: 'English' },
  { code: 'ro', name: 'Romanian' },
  { code: 'eo', name: 'Esperanto' },
  { code: 'ru', name: 'Russian' },
  { code: 'et', name: 'Estonian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'tl', name: 'Filipino' },
  { code: 'sk', name: 'Slovak' },
  { code: 'fi', name: 'Finnish' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'gl', name: 'Galician' },
  { code: 'sw', name: 'Swahili' },
  { code: 'ka', name: 'Georgian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'de', name: 'German' },
  { code: 'ta', name: 'Tamil' },
  { code: 'el', name: 'Greek' },
  { code: 'te', name: 'Telugu' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'th', name: 'Thai' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'tr', name: 'Turkish' },
  { code: 'iw', name: 'Hebrew' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'is', name: 'Icelandic' },
  { code: 'cy', name: 'Welsh' },
  { code: 'id', name: 'Indonesian' },
  { code: 'yi', name: 'Yiddish' }
];

export const searchHandler = ( e: { target: { value: any } }, axios:any, bookObj:{}, setBook: any  ) => {
  const searchedInput = e.target.value;

  if (searchedInput) {
    axios(`https://www.googleapis.com/books/v1/volumes?q=${searchedInput}`)
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

export const bookHandler = ( id: any, bookObj:{searchedInput: string, items: never[], item: {}}, setBook: Dispatch<SetStateAction<{ searchedInput: string; items: never[]; item: any; }>>) => {
  const { items } = bookObj;
  const targetItem = items.filter((item:any) => { return item.id === id })[0];
  
  setBook({
    searchedInput: '',
    items: [],
    item: targetItem
  });
}
