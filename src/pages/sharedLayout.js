import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/stayledNavbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
