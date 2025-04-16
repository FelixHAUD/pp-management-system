import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
}