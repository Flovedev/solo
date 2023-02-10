import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleDay from "./SingleDay";

const MainComponent = () => {
  const params = useParams();
  //   console.log(params);

  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      let res = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${params.id}&appid=4c9e1cc96f0601510d0a6ce9db5d0706`
      );

      if (res.ok) {
        let data = await res.json();
        setCity(data.list);
        setCityName(data.city.name);
        // console.log(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Container className="m-5 pl-5 pt-5 main-container ml-auto mr-auto">
      {city ? (
        <>
          <Row>
            <Col sm={12}>
              <h1 className="mb-4">{cityName}:</h1>
            </Col>
            {/* <Button
                color="info"
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: bookSelected,
                  })
                }}
              > */}
          </Row>
          <Row sm={5}>
            {city.map((day, i) => {
              return <SingleDay data={day} i={i} key={day.dt} />;
            })}
          </Row>
        </>
      ) : (
        <h2>Start by searching for a city...</h2>
      )}
    </Container>
  );
};

export default MainComponent;
