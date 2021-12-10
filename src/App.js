import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SearchImages from'./pages/SearchImages/SearchImages';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCChor_TESQFKMV534VHCPUOgIsR6CRerA",
  authDomain: "my-first-react-app-dc047.firebaseapp.com",
  projectId: "my-first-react-app-dc047",
  storageBucket: "my-first-react-app-dc047.appspot.com",
  messagingSenderId: "754305008200",
  appId: "1:754305008200:web:d0f2eb25a9bb1f68378e7d",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
            <Route path="./SignIn" exact element={<SignIn />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
