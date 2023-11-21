
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import { Routes, Route } from "react-router-dom";


const App = () => {
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Doctors />} />
      </Routes>
    </main>
  );
};

export default App;
