import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/register.jsx";
import Contactus from "./pages/contactus/contactus.jsx"
import MyReservation from "./pages/myReservation/UserReservations.jsx";
import About from "./pages/about/about.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/myreservation" element={<MyReservation />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
