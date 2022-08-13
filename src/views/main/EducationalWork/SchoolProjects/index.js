import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import almanakh from './almanakh.png'
import tochka from './tochka.jpg'
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'

const SchoolProjects = () => {
  return (
    <React.Fragment>
<div class="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Альманах “Пролісок”</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={almanakh} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Газета “Точка зору”</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={tochka} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Україна, в якій я хочу жити</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
            
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
            
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={three} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>
        </div>

    </React.Fragment>
  );
};

export default SchoolProjects;
