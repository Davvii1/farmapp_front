import { useEffect, useState } from "react";
import { farmApi } from "../api/farmApi.js";
import MedicineItem from "../components/MedicineItem.jsx";

function Medicines() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    async function getMedicines() {
      const resp = await farmApi.get("/api/medicines");
      console.log(resp.data);
      setMedicines(resp.data);
    }
    getMedicines();
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
      {medicines.map((medicine) => {
        return (
          <MedicineItem key={medicine._id} medicine={medicine} />
        );
      })}
    </div>
  );
}

export default Medicines;
