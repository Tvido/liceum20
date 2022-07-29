import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'

const MuseumOfTheHeavenlyHundred = () => {
  return (
    <React.Fragment>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Музей Небесної Сотні</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

          </Card>
        </Col>
      </div>

    </React.Fragment>
  );
};

export default MuseumOfTheHeavenlyHundred;
