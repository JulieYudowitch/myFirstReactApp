import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SearchImages from'./pages/SearchImages/SearchImages';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (  
      <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/SearchImages" exact element={<SearchImages />}></Route>
          <Route path="/Blog" exact element={<Blog />}></Route>
          <Route path="/Shop" exact element={<Shop />}></Route>
        </Routes>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
