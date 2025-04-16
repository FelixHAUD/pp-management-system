import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';


// Links
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import LiveFeed from './pages/Live-Feed';
import Login from './pages/Login';
import Reservations from './pages/Reseverations';
import Rewards from './pages/Rewards';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}