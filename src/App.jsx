// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth";
// import Signin from "./pages/sign-In/index";
// import CGPA from "./pages/cgpa-Page";
// import Calculate from "./pages/cgpa-Page/calculate";
// import Dashboard from "./pages/dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Auth />}>
//           <Route index element={<Signin />} />
//           <Route path="cgpa" element={<CGPA />} />
//           <Route path="cgpa_calculator" element={<Calculate />} />
//           <Route path="landing_page" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Signin from "./pages/sign-In/index";
import CGPA from "./pages/cgpa-Page";
import Calculate from "./pages/cgpa-Page/calculate";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./components/shared/dashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={<Auth />}>
          <Route index element={<Signin />} />
        </Route>

        {/* Dashboard and related pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="cgpa" element={<CGPA />} />
          <Route path="cgpa_calculator" element={<Calculate />} />
          {/* <Route path="messages" element={<div>Messages Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} /> */}
        </Route>

        {/* Keep these routes under Auth if they need Auth wrapper */}
        <Route path="/cgpa" element={<Auth />}>
          <Route index element={<CGPA />} />
        </Route>
        <Route path="/cgpa_calculator" element={<Auth />}>
          <Route index element={<Calculate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
