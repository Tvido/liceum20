import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'

const Theater = () => {
  return (
    <React.Fragment>
      <h5>Оксана Хибінь, керівник літературно-драматичного театру “Первоцвіт”</h5>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
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

    </React.Fragment>
  );
};

export default Theater;
