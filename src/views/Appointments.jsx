import { useEffect, useState } from "react";
import { farmApi } from "../api/farmApi.js";
import AppointmentItem from "../components/AppointmentItem.jsx";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const resp = await farmApi.get("/api/appointments");
      console.log(resp.data);
      setAppointments(resp.data);
    }
    getAppointments();
  }, []);

  const styles = {
    outsideDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.outsideDiv}>
      {appointments.map((appointment) => {
        return (
          <AppointmentItem key={appointment._id} appointment={appointment} />
        );
      })}
    </div>
  );
}

export default Appointments;
