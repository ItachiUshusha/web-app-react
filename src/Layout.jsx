import { Routes, Route } from "react-router-dom";
import { App } from './App.jsx'
import { About } from "./content/About.jsx";
import { Appointment } from "./content/Appointment.jsx";
import { Price } from "./content/Price.jsx"

export const Layout = () => {
    return (
    <div>
       <App/>
          <Routes>
             <Route path="/about" element={<About/>}/>
             <Route path="/price" element={<Price/>} />
             <Route path="/appointment" element={<Appointment/>}/>
          </Routes>
    </div>
    );
 }