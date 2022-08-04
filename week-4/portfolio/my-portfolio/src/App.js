import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/works' element={} */}
        <Route path='/workDetail' element={<WorkDetail />} />
        <Route path='/works' element={<Work />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
