import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.png'

const MusicalArt = () => {
  return (
    <React.Fragment>
      <h5>Керівники:</h5>
      <p>Протас Л.О., учитель  музичного мистецтва</p>
      <p>Тимків Х.П., учитель музичного мистецтва</p>
      <p>Цібій  П.О.</p>

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

            <Card.Body>
              <blockquote>
                <div>
                  <img src={four} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

    </React.Fragment>
  );
};

export default MusicalArt;
