import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./layouts/NavbarLayout";
import Cookies from "universal-cookie";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Register from "./views/Register";
import Appointments from "./views/Appointments";
import Configuration from "./views/Configuration";
import Treatments from "./views/Treatments";
import Farmacies from "./views/Farmacies";
import Patients from "./views/Patients";
import Medicines from "./views/Medicines";
import { useEffect, useState } from "react";

function App() {
  const cookies = new Cookies();
  const [dataLoaded, setDataLoaded] = useState(false);

  const checkAuth = async () => {
    const authToken = cookies.get("authToken");
    if (authToken) {
    }
    setDataLoaded(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      {dataLoaded ? (
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/farmacies" element={<Farmacies />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/medicines" element={<Medicines />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : null}
    </>
  );
}

export default App;
