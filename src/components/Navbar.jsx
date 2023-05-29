import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "../assets/Hamburger.svg";
import Close from "../assets/Close.svg";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const link = [
    { label: "Citas", nav: "/appointments" },
    { label: "Tratamientos", nav: "/treatments" },
    { label: "Farmacias", nav: "/farmacies" },
    { label: "Pacientes", nav: "/patients" },
    { label: "Medicamentos", nav: "/medicines" },
  ];
  const styles = {
    navbarContainer: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
    listContainer: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      height: "2rem",
    },
    closeDrawer: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      height: "2rem",
    },
    phoneItems: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: "5rem",
    },
  };
  return width > 1024 ? (
    <div style={styles.navbarContainer}>
      {link.map((link) => {
        return (
          <p key={link.label} className="navbarItem" onClick={() => navigate(link.nav)}>
            {link.label}
          </p>
        );
      })}
    </div>
  ) : (
    <>
      <img
        style={styles.listContainer}
        src={Hamburger}
        onClick={() => setIsOpen(true)}
        alt="List"
      />
      <div className={`${isOpen ? "openDrawer" : "drawer"}`}>
        <img
          style={styles.closeDrawer}
          src={Close}
          alt="Close"
          onClick={() => setIsOpen(false)}
        />
        <div style={styles.phoneItems}>
          {link.map((link) => {
            return (
              <p key={link.label} className="navbarItem" onClick={() => navigate(link.nav)}>
                {link.label}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
