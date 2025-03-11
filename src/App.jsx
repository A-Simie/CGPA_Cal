import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Signin from "./pages/sign-In/index";
import CGPA from "./pages/cgpa-Page";
import Calculate from "./pages/cgpa-Page/calculate";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Signin />} />
          <Route path="cgpa" element={<CGPA />} />
          <Route path="cgpa_calculator" element={<Calculate />} />
          <Route path="landing_page" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
