import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import one1 from './one1.jpg'
import one2 from './one2.jpg'
import one3 from './one3.jpg'
import one4 from './one4.jpg'
import one5 from './one5.jpg'
import one6 from './one6.jpg'
import one7 from './one7.jpg'
import one8 from './one8.jpg'
import one9 from './one9.jpg'

const ShevchenkoDays = () => {
  return (
    <React.Fragment>
<div class="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Шевченківські дні</Card.Title>
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
                    <img src={one1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one3} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one4} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one5} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one6} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one7} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one8} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one9} alt="" className="cardHero" />
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

export default ShevchenkoDays;
