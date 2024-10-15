import {Button, Col, Row} from "react-bootstrap"
import Card from "react-bootstrap/Card"


const Trends = [
    {
        img:"Img/Img1.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder Turbo",
        price:"$41,400"
    },
    {
        img:"Img/Img2.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder Turbo",
        price:"$41,400"
    },
    {
        img:"Img/Img3.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder Turbo",
        price:"$41,400"
    }
]

export const TrendingCar = () => {
    return (
      <div style={{ paddingTop: "100px" }} className="container">
        <h1 className="text-center fw-bold HeadingMargin">Trending near you</h1>
  
        <Row
          style={{ paddingTop: "54px" }}
          className="d-flex justify-content-center"
        >
          {Trends.map(
            ({ img, title, cylinders, miles, price, transmission }, i) => (
              <Col md={4} key={i}>
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="opacity-500 CardText">{miles} Miles</Card.Text>
                    <Card.Text className="opacity-500 CardText">
                      {cylinders} . {transmission}
                    </Card.Text>
                    <div className="d-flex flex-row gap-3">
                      <Button variant="primary" className="fw-bold PriceBTN">
                        {price}
                      </Button>
                      <Button variant="secondary" className="fw-bold BestSeller">
                        Bestseller
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    );
  };