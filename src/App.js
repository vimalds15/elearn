// import logo from './logo.svg';
import React from 'react'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen.js';
import Caroussel from './components/Carousel'
import Header from './components/Header'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import CourseScreen from './screens/CourseScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Caroussel />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path='/course'>
            <CourseScreen />
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
