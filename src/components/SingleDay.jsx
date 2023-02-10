import { Col } from "react-bootstrap";

const SingleDay = ({ data, i }) => {
  //   console.log(data);
  return (
    <div className="days-container m-1">
      <div className="p-1">{i === 0 ? <h2>Today</h2> : <h2>Ora</h2>}</div>
      <div className="d-flex p-2">
        {data.weather[0].main}
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
      </div>
      <div className="bg-white p-3">
        <div>
          Temperature: {Math.round((data.temp.day - 273.15) * 10) / 10} °C
        </div>
        <div>Humidity: {data.humidity}</div>
        <div>Wind speed: {data.speed}</div>
        <div>Pressure: {data.pressure}</div>
        <div>
          Feels like: {Math.round((data.feels_like.day - 273.15) * 10) / 10} °C
        </div>
      </div>
    </div>
  );
};

export default SingleDay;
