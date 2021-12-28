import { Box } from '@chakra-ui/react'
import FilmCard from './FilmCard'

const FilmList = ({movies}: any) => {
  return (
    <Box>
      {movies.results.map((film:any) => (
          <FilmCard key={film.title} item={film}/>
      ))}
    </Box>
  )
}

export default FilmList