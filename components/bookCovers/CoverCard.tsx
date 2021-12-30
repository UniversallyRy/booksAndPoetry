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
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
  subject: string[];
  ia_collection: string[];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  authors: {
    key: string
    name: string;
  }[],
  first_publish_year: null;
  ia: string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability: AvailabilityType;
};

export interface CardProps {
  readonly item: CoverType
} 

function CoverCard({item }: CardProps) {
  return (
    <Center py={6}>
    <Box
      w={'300px'}
      h={'500px'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Box
        h={'300px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}>
        <Image
          src={
            `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`
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
          {item.title}
        </Heading>
        <Text color={'gray.500'}>
          {}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar
          src={`https://covers.openlibrary.org/b/id/${item.cover_id}-S.jpg`}
          alt={'Card'}
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>Author: {item.authors[0].name}</Text>
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
          Edition: {item.edition_count}
        </Text>
        <NextLink href='/book' passHref>
          <Button />
        </NextLink>
    </Box>
  </Center>
  )
}

export default CoverCard
