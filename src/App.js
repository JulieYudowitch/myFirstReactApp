import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SearchImages from'./pages/SearchImages/SearchImages';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Images from './pages/Images/Images';

function App() {
  return (  
      <Router>
      <div>
        <div>
           <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/myFirstReactApp" exact element={<Landing />}></Route>
            <Route path="/" exact element={<Landing />}></Route> 
            <Route path="/SearchImages" exact element={<SearchImages />}></Route>
            <Route path="/Blog" exact element={<Blog />}></Route>
            <Route path="/Shop" exact element={<Shop />}></Route>
            <Route path="/Images" exact element={<Images />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
