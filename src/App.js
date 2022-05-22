import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/body/Home';
import {Field} from './components/body/InputField';
import Signin from './components/body/Signin';
import SignUp from './components/body/SignUp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="m-0 p-0 "> 
      {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/test" element={<Field />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
