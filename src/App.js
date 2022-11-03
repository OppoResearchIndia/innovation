import './App.css'
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from './pages/aboutUs';
import Career from './pages/career';
import ContactUs from './pages/contactUs';
import Home from "./pages/home";
import Research from './pages/research';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/aboutus" element={<AboutUs/>}/>
        <Route path = "/research" element={<Research/>}/>
        <Route path = "/contactus" element={<ContactUs/>}/>
        <Route path = "/career" element={<Career/>}/>
        <Route path = "/research/:id" element={<BlogPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
