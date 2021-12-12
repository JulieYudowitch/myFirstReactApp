import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import PhotoSearch from './pages/PhotoSearch/PhotoSearch';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Bar from './components/Bar/Bar';

function App() {
  return (  
      <Router>
      <div>
        <div>
          <Bar />
        </div>
        <div>
          <Routes>
            <Route path="/myFirstReactApp" exact element={<Landing />}></Route>            
            <Route path="/PhotoSearch" exact element={<PhotoSearch />}></Route>
            <Route path="/Blog" exact element={<Blog />}></Route>
            <Route path="/Shop" exact element={<Shop />}></Route>
            <Route path="/SignIn" exact element={<SignIn />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
