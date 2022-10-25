import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/Landing Page/LandingPage";
import SignIn from "./Pages/sign up/SignIn";
import SignUp from "./Pages/sign up/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard Overview/Dashboard";
import AddMoneyContainer from "./Pages/Dashboard/Add Money/AddMoneyContainer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/add-money" element={<AddMoneyContainer />}></Route>
      </Routes>
    </div>


  );
}

export default App;
