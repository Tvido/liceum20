import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import one2 from './one2.jpg'
import one3 from './one3.jpg'
import one4 from './one4.jpg'
import one5 from './one5.jpg'
import one6 from './one6.jpg'
import one7 from './one7.jpg'
import one8 from './one8.jpg'
import one9 from './one9.jpg'
import one10 from './one10.jpg'
import one11 from './one11.jpg'

import two from './two.jpeg'
import two2 from './two2.jpeg'
import two3 from './two3.jpeg'
import two4 from './two4.jpg'
import two5 from './two5.jpg'
import two6 from './two6.jpg'
import two7 from './two7.jpg'

const CharityActions = () => {
  return (
    <React.Fragment>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Благодійний осінній ярмарок</Card.Title>
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
            
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one10} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
           
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one11} alt="" className="cardHero" />
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
              <Card.Title as="h5">Добро, яке ти робиш від серця, ти робиш завжди собі.</Card.Title>
              <Card.Title as="h5">Акції на підтримку воїнів АТО</Card.Title>
            </Card.Header>

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
                    <img src={two2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two3} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
            
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two4} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two5} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
            
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two6} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two7} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>


          </Card>
        </Col>
      </div>

    </React.Fragment>
  );
};

export default CharityActions;
