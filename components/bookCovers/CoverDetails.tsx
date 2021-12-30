
import { isEmpty, truncate, languages } from '../../utils/';
import CoverMeta  from './CoverMeta';
import CoverRating  from './CoverRating';
import Loading from './Loading';
import { VStack, HStack, Image, Center, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const CoverDetails = ( props: any  ) => {
  let title, imageLink, averageRating, ratingsCount, publishedDate, authors, pageCount, categories, language: undefined, description, webReaderLink;
    // if props aren't empty, deconstruct data obj 
  if (!isEmpty(props.data)) {
    const { volumeInfo, accessInfo } = props.data;

    title = volumeInfo.title;
    if (volumeInfo.imageLinks !== undefined && !isEmpty(volumeInfo.imageLinks)) {
      imageLink   = volumeInfo.imageLinks.thumbnail;
    }
    averageRating = volumeInfo.averageRating;
    ratingsCount  = volumeInfo.ratingsCount;
    publishedDate = volumeInfo.publishedDate;
    authors       = volumeInfo.authors;
    pageCount     = volumeInfo.pageCount;
    categories    = volumeInfo.categories;
    language      = volumeInfo.language;
    description   = volumeInfo.description;
    webReaderLink = accessInfo.webReaderLink;
  }
  
  return (
    <Center 
      width='100%'
      padding= '40px 20px'
      color='white'
      borderRadius={4}
      backgroundColor={useColorModeValue('telegram.900', 'blue.900')}  
      boxShadow={'2xl'}
      rounded={'md'}
      p={3}
    >
      {
      !isEmpty(props.data) ?
        <HStack w={550}>
          <VStack>
            <Image 
              objectFit='cover' 
              boxShadow="2xl" 
              borderRadius={4}
              w={300} 
              alt="book image" 
              src={imageLink !== undefined ? imageLink : './static/empty-cover.jpeg'} 
              thumbnail 
            />
            <CoverRating rating={averageRating} count={ratingsCount} />
          </VStack>
          <VStack bg='gray.900' p={2} rounded="sm" boxShadow="sm">
            <Heading color="orange.300" fontSize={20} fontWeight={ 500}>
              {title}
              { publishedDate !== undefined && <span> – {publishedDate} </span> }
            </Heading>
          <VStack color="orange.300">
            { authors !== undefined && authors.length > 0 && <CoverMeta name="Author" value={authors.join(', ')} /> }
            { pageCount !== undefined && <CoverMeta name="Page number" value={pageCount} /> }
            { categories !== undefined && <CoverMeta name="Category" value={categories} /> }
            { language !== undefined && <CoverMeta name="Language" value={languages.filter((item: { code: any; }) => { return item.code === language })[0].name} /> }
          </VStack>
            { description !== undefined && <Text color="orange.300" fontSize='14px' fontWeight={300}>{truncate(description, 500).replace(/<[^>]+>/g, '')}</Text> }
            { webReaderLink !== undefined &&
                <Button mr={3} color="orange.300">
                  <a 
                    target="_blink"
                    href={webReaderLink}
                  > 
                    Read Now
                  </a>
                </Button> 
            }
          </VStack>
        </HStack> : <Loading />
      }
    </Center>
  );
}

export default CoverDetails;