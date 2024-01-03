import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/home/home';
import Menu from './component/menu/menu';
import Footer from './component/footer/footer';
import Navs from './component/navs/navs';
import Aboutus from './component/aboutus/aboutus';
import Reservation from './component/reservation/reservation';

function App() {
  return (
    <div className='app'>
      <Navs />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='Aboutus' element={<Aboutus />} />
          <Route path='Reservation' element={<Reservation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
