import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import Navbar from "./pages/navbar"; 
import Fotter from "./pages/fotter";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
      </Routes>

      {/* Footer always visible */}
      <Fotter />
    </>
  );
}

export default App;
