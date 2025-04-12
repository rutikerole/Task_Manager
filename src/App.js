import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskPage from './pages/TaskPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">

        <header className="app-header">
          <div className="logo">📋 TaskManager</div>
          <nav className="nav-links">
            <Link to="/">Tasks</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
