import {   Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login"; 
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
 
 
function App() {
  const [pass, setPass] = useState(false)
  useEffect( () => {
    console.log('pass :', pass)
  }, [pass])

  return (
    <>
      <h1>Shop</h1>
      <Nav pass={pass} setPass={setPass} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setPass={setPass} />} />
        <Route path="/product/:id" element={<PrivateRoute pass={pass} />} />
      </Routes>
    </>
  )
}

export default App
