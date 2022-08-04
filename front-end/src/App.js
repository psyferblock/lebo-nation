import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./components/General/signUp";
import NotFound from "./components/General/404page";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/user/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
