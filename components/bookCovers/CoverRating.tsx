import { StarIcon } from '@chakra-ui/icons'; 
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

const RatingStars = () => {
  let starItems = [];
  for (let i = 0; i < 5; i++) {
    starItems.push(<><IconButton aria-label='rating' size='sm' key={i} icon={<StarIcon/>} /></>);
  }

  return (<> {starItems} </>);
}

const BookRating = ( props: { rating: any; count: any; } ) => {
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
        fontSize='18px'
        m= '10px 0 0 0'
        display= 'block'
        color='orange.300'
      >
        { rating > 0 && rating !== undefined ? rating : 0 }
        <Text fontSize="sm"> – { count > 0 && count !== undefined ? count : 0 } ratings</Text>
      </Text>
      <Box 
        display= "inline-block"
        width= "116px"
        height= "18px"
        mb= "20px"
        mr='35px'
        position='relative'
      >
        <Flex 
           _last={{marginRight: 0}}
            height= "18px"
        >
          <RatingStars/>  
        </Flex>
        <Box 
            display= "inline-block"
            // width= "116px"
            height= "33px"
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
}

export default BookRating;