import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export type CharacterType =  {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string | [];
  vehicles: string[];
  starships: string[]
  created: string;
  edited: string;
  url: string;
}

export interface PersonProps {
  readonly person: CharacterType
} 

const Character = ({ person }: PersonProps) => {
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
            {person.name}
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {/* dry */}
          <Text>Height:{person.height}</Text>
          <Text>Mass:{person.mass}</Text>
          <Text>Hair Color:{person.hair_color}</Text>
          <Text>Skin Color:{person.skin_color}</Text>
          <Text>Eye Color:{person.eye_color}</Text>
          <Text>Birth Year: {person.birth_year}</Text>
          <Text>Gender: {person.gender}</Text>
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
