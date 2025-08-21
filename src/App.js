import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Design from './pages/Design';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/design"
          element={<Design user={{ id: 1, username: 'cos' }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
