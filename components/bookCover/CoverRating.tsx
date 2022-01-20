import { Box, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"; 

export type RatingProps = {
  rating: number; 
  count: number;
}

const RatingStars = () => {
  let starItems = [];
  // creation of deafult 5 stars for book rating
  for (let i = 0; i < 5; i++) { 
    starItems.push(
      <IconButton 
        size={ "sm" }
        borderRadius={"base"}
        mx={0.5} 
        aria-label={ `Rating Star_${i}` } 
        key={ `star${i}` } 
        icon={ <StarIcon/> } 
        _focus={{ boxShadow: "none" }}
      />
    )
  };
  return (<> { starItems } </>);
};

const BookRating = ( props: RatingProps ) => {
  const { rating, count } = props;
  // variable that sets width of star icons container in proportion to rating prop number
  let divWidth = 0;
  if (rating > 0 && rating !== undefined) {
    divWidth = rating * 27.7;
  };

  return (
    <Center 
      display="block"
      width={ "full" }
      align={"center"}
      padding= {"40px 20px"}
    >
      <Text 
        fontSize="lg"
        display= "block"
        m= "10px 0 0 0"
        color="orange.300"
      >
        { rating }
        <Text fontSize="sm">
          { count } ratings
        </Text>
      </Text>
      <Box 
        display= "inline-block"
        width= "130px"
        mr={45} 
        position="relative"
        boxShadow="xl"
      >
        <Flex 
          _last={{ marginRight: 0 }}
          height= "18px"
        >
          <RatingStars />  
        </Flex>
        {/* fills in white rating star icons to match the rating number prop  */}
        <Box 
          display= "inline-block"
          height= "33px"
          position= "absolute"
          overflow= "hidden"
          top= {0}
          left= {0}
          zIndex= {1}
          width={ `${divWidth}%` }
        >
          <Flex 
            height= "18px"
            color={ count > 0 ? "yellow.600": "white" }
            _last={{ marginRight: 0 }}
          >
            <RatingStars />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default BookRating;