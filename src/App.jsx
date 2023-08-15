import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true); //will implement when api is ready
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Register isAuthenticated={isAuthenticated} />}
          />
          <Route
            path='/login'
            element={<Login isAuthenticated={isAuthenticated} />}
          />
          <Route
            path='/home'
            element={<Home isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
