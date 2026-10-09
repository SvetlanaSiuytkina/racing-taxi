import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./components/Menu";
import Drift from "./pages/Drift";
import Forza from "./pages/Forza";
import Home from "./pages/Home";
import TimeAttack from "./pages/TimeAttack";
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drift" element={<Drift />} />
            <Route path="/timeattack" element={<TimeAttack />} />
            <Route path="/forza" element={<Forza />} />
            <Route path="* "element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}