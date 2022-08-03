import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./components/Dashboard/signUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/user/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
