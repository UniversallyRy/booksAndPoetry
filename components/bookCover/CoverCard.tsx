import { Stack, Center, VStack } from '@chakra-ui/react';
import CoverImage from './CoverImage';
import CoverRating  from './CoverRating';
import CoverText from './CoverText';
import Loading from './Loading';
import { isEmpty } from '../../utils';

export type BookProps = {
  data: {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      industryIdentifiers: [ [Object], [Object] ];
      readingModes: { text: boolean, image: boolean };
      pageCount: number;
      printedPageCount: number;
      printType: string;
      categories: string[];
      averageRating: number 
      ratingsCount: number
      maturityRating: string;
      allowAnonLogging: boolean;
      contentVersion: number;
      panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false };
      imageLinks: {
        thumbnail: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        smallThumbnail: string;
      },
      language: string | undefined;
      previewLink: string;
      infoLink: string;
      canonicalVolumeLink: string;
    },
    layerInfo: { layers: [ [Object] ] };
    saleInfo: {
      country: string;
      saleability: string;
      isEbook: boolean;
      listPrice: { amount: number, currencyCode: string };
      retailPrice: { amount: number, currencyCode: string };
      buyLink: string;
      offers: [ [Object] ];
    },
    accessInfo: {
      country: string;
      viewability: string;
      embeddable: boolean;
      publicDomain: boolean;
      textToSpeechPermission: string;
      epub: {
        isAvailable: boolean;
        acsTokenLink: string;
      },
      pdf: { isAvailable: boolean };
      webReaderLink: string;
      accessViewStatus: string;
      quoteSharingAllowed: boolean;
    }
  }
}

const CoverCard = ( props: BookProps  ) => {
  let title, imageLink, averageRating = 0, ratingsCount = 0, publishedDate, authors, pageCount, categories, language, description, webReaderLink;
    // if props aren't empty, deconstruct data obj 
  if (!isEmpty( props.data )) {
    const { volumeInfo, accessInfo } = props.data;

    title = volumeInfo.title;
    if ( volumeInfo.imageLinks !== undefined && !isEmpty(volumeInfo.imageLinks) ) {
      imageLink   = volumeInfo.imageLinks.thumbnail;
    }
    averageRating = (volumeInfo.averageRating) ? volumeInfo.averageRating : averageRating ;
    ratingsCount  = (volumeInfo.ratingsCount) ? volumeInfo.ratingsCount : ratingsCount
    publishedDate = volumeInfo.publishedDate;
    authors       = volumeInfo.authors;
    pageCount     = volumeInfo.pageCount;
    categories    = volumeInfo.categories;
    language      = volumeInfo.language;
    description   = volumeInfo.description;
    webReaderLink = accessInfo.webReaderLink;
  }
  
  return (
    <Center 
      w={ ["sm", "sm", "xl", "2xl"] }
      padding= {['2px', '5px', '10px']}
      boxShadow={ "xl" }
      rounded={ 'sm' }
      backgroundColor={ "transparent" }  
      { ...props }
    >
      {
       !isEmpty( props.data )
        ?  <Stack direction={["column", "column", "row"]} rounded="base" boxShadow="sm">
             <VStack>
               <CoverImage imageLink={ imageLink } title={ title }/>
               <CoverRating rating={ averageRating } count={ ratingsCount } />
             </VStack>
             <CoverText 
               title={ title } 
               authors={ authors }
               language={ language }
               publishedDate={ publishedDate }
               description={ description }
               pageCount={ pageCount }
               categories={ categories }
               webReaderLink={ webReaderLink }
             />
           </Stack> 
        :  <Loading />
      }
    </Center>
  );
}

export default CoverCard;