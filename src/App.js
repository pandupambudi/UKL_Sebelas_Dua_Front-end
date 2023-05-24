import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './PagesDashboard/Login'
import Dashboard from './PagesDashboard/Dashboard'
import Meja from "./PagesDashboard/Meja";
import Menu from "./PagesDashboard/Menu";
import User from "./PagesDashboard/User";
import HistoryTransaksi from "./PagesDashboard/HistoryTransaksi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/meja" element={<Meja />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/historytransaksi" element={<HistoryTransaksi />}></Route>
{/* 
        <Route path="/logincust" element={<LoginCust />}></Route>
        <Route path="/registercust" element={<RegisterCust />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/mybookings" element={<MyBookings />}></Route>
        <Route path="/struck" element={<StrukBooking />}></Route> */}

      </Routes>
    </BrowserRouter>

  );
}

export default App;
