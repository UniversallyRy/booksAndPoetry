import { Button, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import CoverMeta from "./CoverMeta";
import { truncate, languages } from "../../utils";
import moment from "moment";

export type TextProps = {
    title: string | undefined; 
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
    // date changed YYYY-MM-DD format to MMMM, Do, YYYY, e.g: from 2019-07-30 to July 30th, 2019
    const momentDate = moment(publishedDate).format("MMMM Do, YYYY")
    return (
        <VStack 
            bg={ useColorModeValue("rgba(23, 25, 35, 0.20)", "rgba(23, 25, 35, 0.40)") } 
            p={ 2 } 
            rounded={ "sm" } 
            boxShadow={ "inner" }
            aria-label={ "contains book meta and other information" }
        >
            <Heading align={"center"} color={ useColorModeValue("orange.400", "orange.300") } fontSize={ "lg" } fontWeight={ 600 }>
                { title }
            </Heading>
            { publishedDate !== undefined && <span>*Released – { momentDate } </span> }
            { authors !== undefined && authors.length > 0 && <CoverMeta name={ "Author" } value={ authors.join(", ") } /> }
            { pageCount !== undefined && <CoverMeta name={ "Page Amount" } value={ pageCount } /> }
            { categories !== undefined && <CoverMeta name={ "Category" } value={ categories } /> }
            { language !== undefined && <CoverMeta name={ "Language" } value={ languages.filter((item: { code: string }) => { return item.code === language })[0].name } /> }
            { description !== undefined && <Text boxShadow={"inner"} p={1} borderRadius={"lg"} color={ "orange.400" } fontSize={ ["10px", "14px"] } fontWeight={ 400 }>{ truncate(description, 500).replace(/<[^>]+>/g, "") }</Text> }
            { webReaderLink !== undefined &&
                <Button align={"center"} borderRadius={ 2 } boxShadow={ "md" } color={ "orange.300" }>
                    <a target="_blink" href={ webReaderLink }> 
                        Read Now
                    </a>
                </Button> 
            }
        </VStack>
    );
};

export default CoverText;