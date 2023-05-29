import Logo from "../assets/Logo.png";

function Landing() {
  const styles = {
    authContainer: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      width: "80%",
    },
  };

  return (
    <>
      <div style={styles.authContainer}>
        <img src={Logo} style={styles.img} alt="Logo" />
      </div>
    </>
  );
}

export default Landing;

