import React from 'react';
import { Col, Card } from 'react-bootstrap';

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'

const Kruty = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Виховний захід присвячений “Пам’яті героїв Крут”</h5>
      <p>7(11)-А; 7(11)-Б класах, класні керівники: Хибінь О.З., Ванзіляк Н.М.</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Пам’яті героїв Крут</Card.Title>
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

export default Kruty;
