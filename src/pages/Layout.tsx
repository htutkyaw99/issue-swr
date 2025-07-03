import { Box } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box mx={"auto"} p={"3"} maxWidth={"1024px"} height={"100vh"}>
      <nav>
        <Navbar />
      </nav>
      <main className="mt-1">
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
