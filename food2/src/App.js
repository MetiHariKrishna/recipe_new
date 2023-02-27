import React from 'react';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
// import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';


// export const usercontext = React.createContext()






function App() {

  return (
    <>
    <div className="App">
    {/* <usercontext.Provider value={"harikrishna"}> */}
      <Router>
        <Routes>
          <Route exact path ="/" element={<Home />}></Route>
          <Route path ="/About" element={<About />}></Route>
          <Route path ="/login" element={<Login />}></Route>
          {/* <Route path ="/Contact" element={<Contact />}></Route> */}

        </Routes>
      </Router>
    
  {/* </usercontext.Provider> */}
    </div>
    </>
  );
}

export default App;
