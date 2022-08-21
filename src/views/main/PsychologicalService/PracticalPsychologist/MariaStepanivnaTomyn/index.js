import React from 'react';
import { Col, Card } from 'react-bootstrap';
import tomyn from './tomyn.png'

const MariaStepanivnaTomyn = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Томин Марія Степанівна</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src={tomyn} alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote className="blockquote text-right">
                 <Card.Text className="mb-2">
                  <a target="_blank" rel="noreferrer" href="https://psychologisttomun.blogspot.com/?fbclid=IwAR1wp84WZBJqE0TQ2Oue5uqbwI93oFCtfFFgPboYVu_9UCrvfPQhBNqXyh0">
                    Блог Томин Марії Степанівни
                  </a>
                </Card.Text>

                <footer className="blockquote-footer">
                  <cite title="Source Title">Телефон: 0665272854</cite>
                </footer>
                
                <footer className="blockquote-footer">
                  <cite title="Source Title">Email: tomunm92@gmail.com</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>
        </div>

    </React.Fragment>
  );
};

export default MariaStepanivnaTomyn;
