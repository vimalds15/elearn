// import logo from './logo.svg';
import React from 'react'
import './css/bootstrap.min.css'
import HomeScreen from './screens/HomeScreen.js';
import Caroussel from './components/Carousel'
import Header from './components/Header'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import CourseScreen from './screens/CourseScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import UploadScreen from './screens/UploadScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Caroussel />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path='/course' component={CourseScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/signup' component={SignUpScreen} />
          <Route exact path='/new' component={UploadScreen} />
        </Switch>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
