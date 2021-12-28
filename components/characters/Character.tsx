import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  Image
} from '@chakra-ui/react';

// Height:{item.height}
// Mass:{item.mass}
// Hair Color:{item.hair_color}
// Skin Color:{item.skin_color}
// Eye Color:{item.eye_color}
// Birth Year: {item.birth_year}
// Gender: {item.gender}
// Species: {''}

function Character({item}: any) {
  return (
    <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt="person"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading mb={3} fontSize={'2xl'} fontFamily={'body'}>
            {item.name}
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
          <Text>Height:{item.height}</Text>
          <Text>Mass:{item.mass}</Text>
          <Text>Hair Color:{item.hair_color}</Text>
          <Text>Skin Color:{item.skin_color}</Text>
          <Text>Eye Color:{item.eye_color}</Text>
          <Text>Birth Year: {item.birth_year}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>Species: {''}</Text>
          </Text>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              More Info
            </Button>
          </Stack>
        </Stack>
      </Stack>
  )
}

export default Character
