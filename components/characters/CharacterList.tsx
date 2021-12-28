import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect } from 'react'
import Character from './Character'
import { CharacterType } from './Character'

// const fetcher = async (url:string) => {
//   try {
//     const res = await axios.get(url);
//     return res.data;
//   } catch (err:any) {
//     throw err.response.data;
//   }
// };
export type CharactersProps = {
  readonly characters: CharacterType[]
}

const CharacterList = ({characters}:CharactersProps) => {
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
      {characters.map((person:any) => (
        <GridItem m={5} key={person.name}>
          <Character person={person}/>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CharacterList