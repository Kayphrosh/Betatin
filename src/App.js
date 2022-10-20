import { Routes, Route } from "react-router-dom";

import LandingPage from './Landing Page/LandingPage';
import SignUp from './sign up/SignUp';
import SignIn from "./sign up/SignIn";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>


  );
}

export default App;
