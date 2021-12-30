import { Box } from '@chakra-ui/react'
import BookCard from './CoverCard'
import { CoverType } from './CoverCard'

export type CoversProps = {
  readonly books: CoverType[]
}

const CoverList = ({books}: CoversProps) => {
  return (
    <Box>
      {books && books.map((book:any) => (
          <BookCard key={book.key} item={book}/>
      ))}
    </Box>
  )
}

export default CoverList