import React from "react";
import Logo from "../assets/Medicine.svg";

function MedicineItem(props) {
  const styles = {
    itemDiv: {
      backgroundColor: "white",
      width: "90%",
      display: "flex",
      padding: "1.5rem",
      borderRadius: "20px",
      border: "1px solid",
      alignItems: "center",
    },
    logo: {
      height: "3rem",
      marginRight: "3rem",
    },
  };
  return (
    <div style={styles.itemDiv}>
      <img src={Logo} style={styles.logo} alt="Medicine" />
      <div>
        <p>Nombre: {props.medicine.name}</p>
        <p>Presentación: {props.medicine.presentation}</p>
        <p>Contenido: {props.medicine.content} pzas.</p>
        <p>Disponibilidad: Cada {props.medicine.stock} pzas.</p>
      </div>
    </div>
  );
}

export default MedicineItem;
