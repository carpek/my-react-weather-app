

import "./styles.css";
import Form from "./Form";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import WeatherDescription from "./WeatherDescription";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App(city,
  description,
  date,
  time,
  temperature,
  measure,
  result) {
  return (
    <div className="App">
      <div className="body">
        
            <Form />
        

        <City
          city="Vienna"
          description="It is sunny with clouds"
          date="Sunday, March 28 2021"
          time="9:00pm"
        />

        <Forecast temperature={12} />

        <div className="CurrentWeather">
         <div>
              <CurrentWeather />
              </div>
              <WeatherDescription measure="Feels Like" result="9°" />
              <WeatherDescription measure="Humidity" result="30%" />
              <WeatherDescription measure="Windspeed" result="20km/h" />
           
          </div>
        </div>
    
      <Footer />
    </div>
  );
}

export default App;
