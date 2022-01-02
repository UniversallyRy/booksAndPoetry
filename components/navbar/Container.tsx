import { Flex } from "@chakra-ui/react";

type ContainerProps = React.PropsWithChildren<{}>;

const NavBarContainer = ({ children, ...props }: ContainerProps ) => {
  return (
    <Flex
      as={ "nav" }
      align={ "center" }
      justify={ "flex-end" }
      w={ "full" }
      h={ 12 }
      p={ 1 }
      bg={[ "primary.500", "primary.500", "red.900", "red.900" ]}
      color={[ "orange.300", "orange.300", "orange.300", "orange.300" ]}
      opacity={[ 0.5 ]}
      { ...props }
    >
      { children }
    </Flex>
  );
};
  
export default NavBarContainer;