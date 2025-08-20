import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
