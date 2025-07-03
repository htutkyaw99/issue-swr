import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import useSearchStore from "../stores/searchStore";
import { Link, useLocation } from "react-router-dom";
import CreateForm from "./CreateForm";

const Navbar = () => {
  const { search, setSearch } = useSearchStore();

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Flex justify={"between"} align={"center"} pt={"3"} pb={"5"}>
      <Box>
        <Link to={"/"}>
          <Text size={"5"} weight={"bold"}>
            Issue Flow
          </Text>
        </Link>
      </Box>
      <Flex gap={"3"} align={"center"}>
        {pathname === "/" && (
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
        )}

        <CreateForm />
      </Flex>
    </Flex>
  );
};

export default Navbar;
