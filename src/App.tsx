import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin"; // make sure your SignIn page is inside pages folder

function App() {
  return (
    <Routes>
      
      <Route path="/signin" element={<SignIn />} />

      

      {/* Any other path → redirect to SignIn */}
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default App;
