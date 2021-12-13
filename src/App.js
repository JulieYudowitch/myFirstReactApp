import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import PhotoSearch from './pages/PhotoSearch/PhotoSearch';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import Cart from './pages/Cart/Cart';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (  
      <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/myFirstReactApp" exact element={<Landing />}></Route>            
            <Route path="/PhotoSearch" exact element={<PhotoSearch />}></Route>
            <Route path="/Blog" exact element={<Blog />}></Route>
            <Route path="/Shop" exact element={<Shop />}></Route>
            <Route path="/SignIn" exact element={<SignIn />}></Route>
            <Route path="/Cart" exact element={<Cart />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
