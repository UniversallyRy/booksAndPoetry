import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, List, ListItem } from '@chakra-ui/react';
import { DebounceInput } from 'react-debounce-input';

const SearchBar = ( props:any ) => {
    const { value, changeHandler, data, clickHandler } = props;
  
    return (
      <Flex 
        align="center"
        position= "relative"
        marginBottom= "35px"
        >
        <Box
          width="100%"
          height="30px"
          borderTop="hidden"
          borderLeft="hidden"
          borderRight="hidden"
          borderColor= "black"
          justify="center"
          borderRadius={0}
          align="center"
          backgroundColor= "transparent"
        >
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            style={{color: "orange",padding: "2px", height:"40px", width:"100%", backgroundColor: "transparent", borderWidth: "0.5px", borderBottomColor: "black"}}
            value={value}
            placeholder="Look Up A Favorite"
            onChange={changeHandler} 
          />
          <IconButton
            w="20px"
            h="45px"
            color= "gray"
            position= "absolute"
            top= {-2} 
            m={1}
            aria-label="Search Icon" 
            _focus={{boxShadow: "none"}}
            _placeholder={{color: "gray"}}
            icon={<SearchIcon/>} 
          />
        </Box>

        {
          data.length > 0 &&
            <List 
              boxShadow="md"
              width= "100%" 
              max-height= "250px"
              margin= {0}
              padding= "10px 0"
              overflow-y= "auto"
              top= "42px"
              position= "absolute"
              color= "black"
              backgroundColor="white"
              borderBottomRightRadius="10px"
              borderBottomLeftRadius="10px"
              zIndex= {99}
            >
              {
                data.map((book:any) => (
                  <ListItem 
                    key={book.id}
                    onClick={() => clickHandler(book.id)}
                    cursor= "pointer"
                    fontSize= "14px"
                    width= "100%"
                    list-style= "none"
                    display= "block"
                    padding= "8px 15px"
                    borderBottom= "1px solid gray"
                    transition= '(all .25s)'
                    _hover={{backgroundColor: "gray"}}
                  >
                    {book.volumeInfo.title}
                  </ListItem>
                ))
              }
            </List>
        }
      </Flex>
    );
  }
  
  export default SearchBar;