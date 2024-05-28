import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import LandingPage from "./views/landingPage.jsx";
import Signup from "./views/Signin.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
