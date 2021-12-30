import { VStack } from '@chakra-ui/react'
import HomeCard from './HomeCard'
import cardList from '../../utils/homeCardData'

const HomeCards = () => {
  return (
    <VStack w='full' p='5' borderWidth='1px' rounded='md'>
      {cardList.map((item: any) => {
        return(
          <HomeCard key={item} cardInfo={item}/>
        )
      })
      }
    </VStack>
  )
}

export default HomeCards
