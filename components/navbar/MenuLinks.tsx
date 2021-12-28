import { Box, Button, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem" 

const MenuLinks = ({ show }:any) => {
  return (
    <Box
    display={{ base: show ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
    >
    <Stack
      align={["center", "center", "center", "center"]}
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/films">Movies</MenuItem>
      <MenuItem to="/characters">People</MenuItem>  
      <MenuItem to="/planets">Planets</MenuItem>
      <MenuItem to="/species">Species</MenuItem>
      <MenuItem to="/starships">Starships</MenuItem>
      <MenuItem to="/vehicles">Vehicles</MenuItem>
      <MenuItem isLast>
        <Button
          size="sm"
          rounded="sm"
          color={["orange.300", "orange.300", "orange.300", "orange.300"]}
          bg={["blue.700", "blue.700", "blue.700", "blue.700"]}
          _hover={{
            bg: [
              "blue.200",
              "blue.300",
              "blue.600",
              "blue.600",
            ],
          }}
        >
          Search
        </Button>
      </MenuItem>
    </Stack>
    </Box>
  )
}

export default MenuLinks