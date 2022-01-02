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
      flex={ 1 }
      justify={ 'center' }
      align={ 'center' }
      position={ 'relative' }
      w={ 'full' }
      { ...props }
    >
      <Blob
        w={ '120%' }
        h={ '90%' }
        position={ 'absolute' }
        top={ '-20%' }
        left={ 0 }
        zIndex={ -1 }
        color='blue.700'
      />
      <Box
        position={ 'relative' }
        height={ '300px' }
        rounded={ 'outline' }
        boxShadow={ 'sm' }
        width={ 'full' }
        overflow={ 'hidden' }
      >
        <Image 
          objectFit='cover' 
          shadow='lg'
          borderStyle='groove'
          borderRadius={ 4 }
          ml={ 2 }
          w={ 325 } 
          alt={ `${ title } image` } 
          src={ imageLink !== undefined ? imageLink : './static/empty-cover.jpeg' }
          thumbnail='true'
        />
      </Box>
    </Flex>
  );
};

export default CoverImage;