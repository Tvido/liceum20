import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'

const Workshop = () => {
  return (
    <React.Fragment>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Школа компетентності бібліотекаря “Воркошоп. Промоція дитячого читання” 28.11.2019р.</Card.Title>
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

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={four} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={five} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={six} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={seven} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

    </React.Fragment>
  );
};

export default Workshop;
