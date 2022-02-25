import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/body/Home';
import {Field} from './components/body/InputField';

function App() {
  return (
    <div className="m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Field />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
