import React from 'react';
import { Col, Card } from 'react-bootstrap';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'

const GermanUnificationDay = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>День об’єднання Німеччини</h5>

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
        </div>

    </React.Fragment>
  );
};

export default GermanUnificationDay;
