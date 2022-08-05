import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../components/General/signUp";
import NotFound from "../components/General/404page";
import LogIn from "../components/General/logIn";

function routes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/user/register" element={<SignUp />}></Route>
        <Route exact path="/user/login" element={<LogIn />}></Route>
        {/*  when React starts looking for urls. it looks over all the over routes. but if it does not find it will render NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default routes;
