import { ChangeEventHandler } from 'react';
import { Box, List, ListItem, IconButton, HStack } from '@chakra-ui/react';  
import { SearchIcon } from '@chakra-ui/icons';
import { DebounceInput } from 'react-debounce-input';

export type ListProps = {
  id: string;
  volumeInfo: { title:string };
}

export type SearchProps = {
  data: ListProps[];
  value: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  clickHandler: (id: string) => void;
}

const SearchBar = ( props: SearchProps ) => {
  const { value, changeHandler, data, clickHandler } = props;
  
  return (
    <Box 
      position={ "relative" }
      mt={ 8 }
      mb={ 8 }
      boxShadow={ ["base", "md"] }
      w={ ["sm", "sm", "xl", "2xl"] }
      aria-label="searchBarContainer"
    >
      <HStack
        width={ "full" }
        opacity={ 0.7 }   
        borderRadius={ [0.5, 1] }
        justifyContent={ "space-between" }
      >
        <DebounceInput
          minLength={ 3 }
          debounceTimeout={ 300 }
          style={{ outline:"none", color: "orange",padding: "6px", width: "90%",height:"40px", backgroundColor: "transparent" }}
          value={ value }
          aria-label={ "input for title searching" }
          placeholder={ "Look Up A Favorite" }
          onChange={ changeHandler } 
        />
        <IconButton
          w={"10%"}
          color={ "gray.600" }
          boxShadow={ ["sm", "md"] }
          rounded="sm"
          icon={ <SearchIcon/> } 
          aria-label={ "Search Icon" } 
          _focus={{ boxShadow: "none" }}
          _placeholder={{ color: "gray" }}
        />
      </HStack>
        {
          data.length > 0 &&
            <List 
              width={ "full" } 
              position={ "absolute" }
              boxShadow={ "md" }
              max-height={ "250px" }
              margin={ 0 }
              overflow-y={ "auto" }
              top={ "42px" }
              color={ "#000" }
              bg={ "red.900" }
              aria-label={ "list generated from input values" }
              borderBottomRightRadius={ "4px" }
              borderBottomLeftRadius={ "4px" }
              zIndex= { 99 }
            >
              {
              data.map(( book: ListProps ) => (
                <ListItem 
                  key={ book.id }
                  onClick={ () => clickHandler( book.id )}
                  cursor={ "pointer" }
                  fontSize={ "14px" }
                  width={ "full" }
                  list-style={ "none" }
                  display={ "block" }
                  padding={"8px 15px"}
                  borderBottom={"1px solid gray"}
                  transition={"(all .25s)"}
                  _hover={{ backgroundColor: "gray" }}
                  aria-label={ "list item generated from input" }
                >
                  { book.volumeInfo.title }
                </ListItem>
              ))}
            </List>
        }
      </Box>
    );
  };
  
  export default SearchBar;