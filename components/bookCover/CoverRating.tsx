import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'; 

export type RatingProps = {
  rating: number; 
  count: number;
}

const RatingStars = () => {
  let starItems = [];
  for (let i = 0; i < 5; i++) { 
    starItems.push(
        <IconButton 
          mr={0} 
          size='sm' 
          aria-label={`Rating Star_${i}`} 
          key={`star${i}`} 
          icon={<StarIcon/>} 
        />
    )
  };
  return (<> {starItems} </>);
};

const BookRating = ( props: RatingProps ) => {
  const { rating, count } = props;

  let divWidth = 0;
  if (rating > 0 && rating !== undefined) {
    divWidth = rating * 27.5;
  }

  return (
    <Box 
      display="block"
      width= '100%'
      padding= '40px 20px'
      borderRadius='5px'
      backgroundColor= 'rgba($color: $black, $alpha: 0.65)'
    >
      <Text 
        fontSize='lg'
        display= 'block'
        m= '10px 0 0 0'
        color='orange.300'
      >
        { rating }
        <Text fontSize="sm">
          { count } ratings
        </Text>
      </Text>
      <Box 
        display= "inline-block"
        width= "116px"
        height= "18px"
        mb= "20px"
        mr='35px' 
        position='relative'
        boxShadow="md"
      >
        <Flex 
          _last={{marginRight: 0}}
          height= "18px"
        >
          <RatingStars />  
        </Flex>
        <Box 
          display= "inline-block"
          height= "33px"
          mr='35px'
          mb= "20px"
          position= "absolute"
          overflow= "hidden"
          top= {0}
          left= {0}
          zIndex= {1}
          width={`${divWidth}%`}
        >
          <Flex 
            height= "18px"
            color={count > 0 ? 'yellow': 'white'}
            _last={{marginRight: 0}}
          >
            <RatingStars />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default BookRating;