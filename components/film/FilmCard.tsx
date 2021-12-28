import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';


function FilmCard({item}: any) {
  return (
    <Center py={6}>
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Box
        h={'210px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}>
        <Image
          src={
            'https://unsplash.com/photos/epRFE_hBNjo'
          }
          layout={'fill'}
          alt="img"
        />
      </Box>
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          Movie number {item.episode_id}
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {item.title}
        </Heading>
        <Text color={'gray.500'}>
          {item.opening_crawl}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar
          src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
          alt={'Director'}
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>Director: {item.director}</Text>
          <Text fontWeight={600}>Producers: {item.producer}</Text>
          <Text color={'gray.500'}>{item.release_date}</Text>
        </Stack>
      </Stack>
    </Box>
  </Center>
  )
}

export default FilmCard
