import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Cpage from "./Pages/contactus";
import Lab from "./Pages/Facility/lab";
import Signup from "./Pages/Signup";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import Faclity from "./Pages/Faclity";
import Wards from "./Pages/Facility/Wards";
import Bloodbank from "./Pages/Facility/Bloodbank";
import Hospitalsupport from "./Pages/Facility/Hospital_Support";
import Insurance from "./Pages/Facility/Insurance";
import Emergency from "./Pages/Facility/Emergency ";
import Pharamacy from "./Pages/Facility/pharmacy";
import Cafeteria from "./Pages/Facility/Cafeteria";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.esm";
import "bootstrap/js/dist/scrollspy";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Contactus'  element={<Cpage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path="/Faclity" element={<Faclity/>} />
            <Route path="/Hospitalsupport" element={<Hospitalsupport/>} />
            <Route path="/Emergency" element={<Emergency/>} />
            <Route path="/Pharamacy" element={<Pharamacy/>} />
            <Route path="/Lab" element={<Lab/>} /> 
            <Route path="/Bloodbank" element={<Bloodbank/>} />
            <Route path="/Wards" element={<Wards/>} />
            <Route path="/Cafeteria" element={<Cafeteria/>} />
            <Route path="/Insurance" element={<Insurance/>}/>
            <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy/>}/>
            <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
            <Route path='*' element={<Error/>} />
       </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
