import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const NavbarLayout = () => {
  const styles = {
    outletContainer: {
      padding: "1rem",
    },
  };
  return (
    <>
      <Navbar />
      <div style={styles.outletContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default NavbarLayout;
