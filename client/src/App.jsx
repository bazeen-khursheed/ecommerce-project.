import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
