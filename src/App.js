import React from 'react';
import './components/css/main.css';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import WeatherContext from './context/WeatherContext';

function App() {

  return (
          <div className="app-container">
            <WeatherContext>
              <Header/>
              <Menu/>
              <WeatherInfo/>
              <Footer/>
            </WeatherContext>
          </div>
  );
}

export default App;
