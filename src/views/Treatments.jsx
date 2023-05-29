import { useEffect, useState } from "react";
import { farmApi } from "../api/farmApi.js";
import TreatmentItem from "../components/TreatmentItem.jsx";

function Treatments() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    async function getTreatments() {
      const resp = await farmApi.get("/api/treatments");
      console.log(resp.data);
      setTreatments(resp.data);
    }
    getTreatments();
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
      {treatments.map((treatment) => {
        return (
          <TreatmentItem key={treatment._id} treatment={treatment} />
        );
      })}
    </div>
  );
}

export default Treatments;
