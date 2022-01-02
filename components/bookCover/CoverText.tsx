import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import CoverMeta from './CoverMeta';
import { truncate, languages } from '../../utils';

export type TextProps = {
    title: string | undefined; 
    imageLink: string | undefined;
    authors: string[] | undefined;
    language: string | undefined;
    publishedDate: string | undefined;
    description: string | undefined;
    pageCount: number | undefined;
    categories: string[] | undefined;
    webReaderLink: string | undefined;
}

const CoverText = ( props: TextProps ) => {
    const { title, publishedDate, authors, pageCount, categories, language, description, webReaderLink } = props;
    return (
        <VStack bg={ 'gray.900' } p={ 2 } rounded={ "sm" } boxShadow={ "base" }>
            <Heading align={"center"} color={ "orange.300" } fontSize={ "lg" } fontWeight={ 500 }>
                { title }
                { publishedDate !== undefined && <span> – {publishedDate} </span> }
            </Heading>
            { authors !== undefined && authors.length > 0 && <CoverMeta name={ "Author" } value={ authors.join(', ') } /> }
            { pageCount !== undefined && <CoverMeta name={ "Page Amount" } value={ pageCount } /> }
            { categories !== undefined && <CoverMeta name={ "Category" } value={ categories } /> }
            { language !== undefined && <CoverMeta name={ "Language" } value={ languages.filter((item: { code: string }) => { return item.code === language })[0].name } /> }
            { description !== undefined && <Text color={ "orange.300" } fontSize={ "14px" } fontWeight={ 300 }>{ truncate(description, 500).replace(/<[^>]+>/g, '') }</Text> }
            { webReaderLink !== undefined &&
                <Button mr={ 3 } borderRadius={ 2 } boxShadow={ "sm" } color={ "orange.300" }>
                    <a 
                        target="_blink"
                        href={ webReaderLink }
                    > 
                        Read Now
                    </a>
                </Button> 
            }
        </VStack>
    );
};

export default CoverText;