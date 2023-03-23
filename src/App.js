import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Registrations from './pages/Registrations';
import Edit from './pages/Edit';
import Getdetails from "./pages/Getdetails";
import Tabel from "./components/Tabel";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path= "/Edit/:id" element= {<Edit/>}/>
        <Route path= "/Registration" element= {<Registrations/>}/>
        <Route path= "/getdetails/:id" element= {<Getdetails/>}/>
        <Route path= "/mydetails" element= {<Tabel/>}/>
        <Route path= "/formsignup" element= {<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
