import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import useSearchStore from "../stores/searchStore";

const Navbar = () => {
  const { search, setSearch } = useSearchStore();

  // console.log(search);

  return (
    <Flex justify={"between"} align={"center"} pt={"3"} pb={"5"}>
      <Box>
        <Text size={"5"} weight={"bold"}>
          Navbar
        </Text>
      </Box>
      <Flex gap={"3"} align={"center"}>
        <TextField.Root
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="soft"
          color="indigo"
          placeholder="Search"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button color="indigo" variant="soft">
          <PlusIcon height={"16"} width={"16"} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
