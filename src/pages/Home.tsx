import { Box, Flex, Table, Text } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import ListTab from "../components/ListTab";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";

const Home = () => {
  return (
    <>
      <Flex align={"center"} justify={"end"} gap={"3"} mb={"1"}>
        <Sorting />
        <Filter />
      </Flex>
      <ListTab />
    </>
  );
};

export default Home;
