import React from "react";
import Logo from "../assets/Appointment.svg";

function AppointmentItem(props) {
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
      <img src={Logo} style={styles.logo} alt="Appointment" />
      <div>
        <p>Doctor: {props.appointment.doctor.first_name + " " + props.appointment.doctor.last_name}</p>
        <p>Paciente: {props.appointment.patient.first_name + " " + props.appointment.patient.last_name}</p>
        <p>Fecha: {props.appointment.date}</p>
      </div>
    </div>
  );
}

export default AppointmentItem;
