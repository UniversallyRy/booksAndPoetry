import { Box } from "@chakra-ui/react";
// Loading component to be used while data is being fetched
const Loading = () => {
    return (
      <Box className="Loading">
        <Box className="Ellipsis"><Box></Box><Box></Box><Box></Box><Box></Box></Box>
      </Box>
    );
  };
  
  export default Loading;