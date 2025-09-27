import "./App.css";
import Login from "./authentication/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./authentication/Register";
import Home from "./pages/home";
import Logout from "./authentication/Logout";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import StockLevels from "./pages/StockLevels";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/stockLevels" element={<StockLevels />} />
          <Route path="/reports" element={<Reports />} />
          {/* <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} /> */}
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
