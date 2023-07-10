import { Route, Routes } from "react-router-dom";
import Home from './Home Page/Home';
import Activities from "./Activity Pages/Activities";
import Team from "./Team Page/Team";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Activity" element={<Activities/>} />
      <Route path="/Team" element={<Team />} /> 
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
