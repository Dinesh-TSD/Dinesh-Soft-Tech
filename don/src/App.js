import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
