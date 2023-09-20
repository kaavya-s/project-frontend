import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;