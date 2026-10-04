import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from "./components/Menu";
import Drift from "./pages/Drift";
import Forza from "./pages/Forza";
import Home from "./pages/Home";
import TimeAttack from "./pages/TimeAttack";

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
            <Route 
              path="*" 
              element={
                <article className="article">
                  <h1 className="article__title">Страница не найдена</h1>
                  <p className="article__paragraph">Такой страницы не существует
                    <a href="/" style={{ color: '#9f9' }}>На главную</a>
                  </p>
                </article>
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}