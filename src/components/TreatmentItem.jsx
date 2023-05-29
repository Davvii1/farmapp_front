import React from "react";
import Logo from "../assets/Treatment.svg";

function TreatmentItem(props) {
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
      <img src={Logo} style={styles.logo} alt="Treatment" />
      <div>
        <p>Paciente: {props.treatment.patient.first_name + " " + props.treatment.patient.last_name}</p>
        <p>Medicamento: {props.treatment.medicine.name}</p>
        <p>Duración: {props.treatment.duration} días</p>
        <p>Frecuencia: Cada {props.treatment.frequence} horas</p>
      </div>
    </div>
  );
}

export default TreatmentItem;
