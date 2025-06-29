import { Box, Grid, Text } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import ListTab from "../components/ListTab";

const Home = () => {
  return (
    <Box mx={"auto"} p={"3"} maxWidth={"1024px"} height={"100vh"}>
      <Navbar />
      <ListTab />
    </Box>
  );
};

export default Home;
