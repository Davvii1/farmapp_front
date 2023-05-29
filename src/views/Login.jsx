import { useState } from "react";
import Logo from "../assets/Logo.png";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      width: "40%",
    },
    loginContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    button: {
      width: "8.5rem",
      height: "2.75rem",
      fontSize: "1rem",
      borderRadius: "20px",
      marginTop: "1rem",
    },
    underlined: {
      textDecoration: "underline",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={styles.authContainer}>
        <img src={Logo} style={styles.img} alt="Logo" />
        <div style={styles.loginContainer}>
          <p>Email</p>
          <Input
            width={"100%"}
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={styles.loginContainer}>
          <p>Password</p>
          <Input
            width={"100%"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={styles.button} onClick={() => {}}>
          Entrar
        </button>
        <p>
          Nuevo Usuario?{" "}
          <span style={styles.underlined} onClick={() => navigate("/register")}>
            Crea una cuenta
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
