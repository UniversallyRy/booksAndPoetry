import { Box, Flex, Image } from '@chakra-ui/react';
import Blob from './Blob';

export type ImageProps = {
  title: string | undefined; 
  imageLink: string | undefined;
}

function CoverImage( props: ImageProps ) {
  const { title, imageLink } = props;
  return (
    <Flex 
      justify={ 'center' }
      align={ 'center' }
      position={ 'relative' }
      w={ 'full' }
      boxShadow={[ "md", 'lg' ]}
      { ...props }
    >
      <Blob
        position={ 'absolute' }
        h={ "sm" }
        zIndex={ 0 }
        color={ 'gray.700' }
      />
      <Box
        position={ 'relative' }
        overflow={ 'hidden' }
        borderWidth={5}
        borderColor={"transparent"}
        borderRadius={7}
        boxShadow={"md"}
      >
        <Image 
          objectFit='cover' 
          borderRadius={ "sm" }
          w={["md", "xl"]}
          alt={ `${ title } image` } 
          aria-label={ "book thumbnail image" }
          src={ imageLink !== undefined ? imageLink : './static/empty-cover.jpeg' }
          thumbnail={ 'true' }
        />
      </Box>
    </Flex>
  );
};

export default CoverImage;