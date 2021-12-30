import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';

export type AvailabilityType = {
    status: string;
    available_to_browse: boolean;
    available_to_borrow: boolean;
    available_to_waitlist: boolean;
    is_printdisabled: boolean;
    is_readable: boolean;
    is_lendable: boolean;
    identifier: string;
    isbn: null;
    oclc: null;
    openlibrary_work: string;
    openlibrary_edition: string;
    last_loan_date: null;
    num_waitlist: null;
    last_waitlist_date: null;
    collection: string;
    is_restricted: boolean;
    is_browseable: boolean;
    __src__: string;
}

export type CoverType =  {
  kind: string; 
  id: string;
  etag: string; 
  selfLink: string; 
  saleInfo: {};
  accessInfo: {};
  searchInfo: {}
  volumeInfo: { 
    title: string;
    subtitle: string | null
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: string[];
    readingModes: Object[],
    pageCount: number;
    printType: string;
    categories: string[],
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean
    contentVersion: string;
    panelizationSummary: Object[];
    imageLinks: {
      thumbnail:string;
      smallThumbnail:string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  }
};

export interface CardProps {
  readonly item: CoverType
} 
function CoverCard({item }: CardProps) {
  const { kind, id, etag, selfLink, volumeInfo, saleInfo, accessInfo, searchInfo} = item;
  return (
      <Box
        w='300px'
        h='500px'
        bg={useColorModeValue('telegram.900', 'blue.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'200px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={
              `${volumeInfo.imageLinks.thumbnail}`
            }
            layout={'fill'}
            alt="img"
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {volumeInfo.title}
          </Heading>
          <Text color={'gray.500'}>
            {volumeInfo.subtitle}
          </Text>
        </Stack>
        <Stack alignSelf="center" mt={6} direction={'row'} spacing={4} align={'center'}>
          {/* <Avatar
            src={`https://covers.openlibrary.org/b/id/${item.cover_id}-S.jpg`}
            alt={'Card'}
          /> */}
          <Stack align="center" direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Author: {volumeInfo.authors[0]}</Text>
            <Text fontWeight={600}>Publisher: {volumeInfo.publisher}</Text>
            <Text fontWeight={600}>Published: {volumeInfo.publishedDate}</Text>
            {/* <Text fontWeight={600}>Producers: {item.producer}</Text> */}
            {/* <Text color={'gray.500'}>{item.release_date}</Text> */}
          </Stack>
        </Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          mt={1}
          fontSize={'sm'}
          letterSpacing={1.1}>
        </Text>
        <NextLink href={`/book/${id}`} passHref>
          <Button />
        </NextLink>
    </Box>
  )
}

export default CoverCard
