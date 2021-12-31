
import { isEmpty, truncate, languages } from '../../utils/';
import CoverMeta  from './CoverMeta';
import CoverRating  from './CoverRating';
import Loading from './Loading';
import { VStack, HStack, Image, Center, Button, Heading, Text, useColorModeValue, Flex, Box, Icon, IconProps } from '@chakra-ui/react';

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

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
      backgroundColor={useColorModeValue('telegram.900', 'blue.900')}  
      boxShadow={'3xl'}
      shadow="lg"
      rounded={'sm'}
      p={1}
    >
      {
      !isEmpty(props.data) ?
        <HStack  w={550} align="center" justify="center" rounded="xl" boxShadow="sm">
          <VStack mr={1}>
          <Flex 
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'120%'}
            h={'90%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color="blue.700"
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'outline'}
            boxShadow={'sm'}
            width={'full'}
            overflow={'hidden'}>
            <Image 
              objectFit='cover' 
              shadow="lg"
              borderStyle="groove"
              borderRadius={4}
              ml={2}
              w={325} 
              alt={`${title} image`} 
              src={imageLink !== undefined ? imageLink : './static/empty-cover.jpeg'} 
              thumbnail 
            />
                  </Box>
              </Flex>
            <CoverRating rating={averageRating} count={ratingsCount} />
          </VStack>
          <VStack bg='gray.900' p={2} rounded="sm" boxShadow="xl">
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
                <Button mr={3} borderRadius={2} boxShadow="sm" color="orange.300">
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