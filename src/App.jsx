import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Signin from "./pages/sign-in";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
