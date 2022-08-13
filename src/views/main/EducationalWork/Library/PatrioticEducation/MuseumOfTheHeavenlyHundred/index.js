import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'

const MuseumOfTheHeavenlyHundred = () => {
  return (
    <React.Fragment>
<div class="article__wrapper">
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
        </div>

    </React.Fragment>
  );
};

export default MuseumOfTheHeavenlyHundred;
