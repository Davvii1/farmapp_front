import { useState } from "react";
import Logo from "../assets/Logo.png";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const registerFieldsNames = [
    "Nombre",
    "Apellido",
    "Edad",
    "Teléfono",
    "Tipo de usuario",
    "Tiene Cuidador?",
    "Nombre del cuidador",
    "Email",
    "Contraseña",
  ];
  const registerFields = {
    first_name: "",
    last_name: "",
    age: "",
    phone: "",
    user_type: 0,
    caretaker: true,
    caretaker_name: "",
    email: "",
    password: "",
  };
  const [registerForm, setRegisterForm] = useState(registerFields);
  const handleForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  //Styles
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
    keysContanier: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      columnGap: "1rem",
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
        <div style={styles.keysContanier}>
          {Object.keys(registerFields).map((key, index) => {
            return key != "user_type" && key != "caretaker" ? (
              <div style={styles.loginContainer}>
                <p>{registerFieldsNames[index]}</p>
                <Input
                  width={"100%"}
                  name={key}
                  type={key == "password" ? "password" : "text"}
                  value={registerForm[key]}
                  onChange={(e) => handleForm(e)}
                />
              </div>
            ) : null;
          })}
        </div>
        <button style={styles.button} onClick={() => {}}>
          Registrar
        </button>
        <p>
          Tienes una cuenta?{" "}
          <span style={styles.underlined} onClick={() => navigate("/login")}>
            Entra aquí
          </span>
        </p>
      </div>
    </>
  );
}

export default Register;
