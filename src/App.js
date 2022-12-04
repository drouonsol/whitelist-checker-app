import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';


import Footer from './components/Footer'

import PageNotFound from "./pages/PageNotFound";

import Enter from "./pages/enter";

import Redirect1 from './pages/redirectenter';


function App () {



  console.log("You're cute")
  
  return (
    <Router>
    
 

      <Routes>

  
      <Route exact path='/home'title="Home" element={<Home />} />
    

        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<Enter/>} />
  
        <Route path="/redirect" element={<Redirect1/>} />

      </Routes>
     
    </Router>
  );
}

export default App;
