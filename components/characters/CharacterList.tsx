import { Grid, GridItem, HStack } from '@chakra-ui/react'
import Character from './Character'

const CharacterList = ({list}: any) => {
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
      {list.map((person:any) => (
        <GridItem m={5} key={person.name}>
          <Character item={person}/>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CharacterList