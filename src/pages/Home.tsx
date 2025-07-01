import { Box, Flex, Table, Text } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import ListTab from "../components/ListTab";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";

const Home = () => {
  return (
    <Box mx={"auto"} p={"3"} maxWidth={"1024px"} height={"100vh"}>
      <Navbar />
      <Flex align={"center"} justify={"end"} gap={"3"} mb={"1"}>
        <Sorting />
        <Filter />
      </Flex>
      <ListTab />
    </Box>
  );
};

export default Home;
