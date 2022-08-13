import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'

const Dup2019 = () => {
  return (
    <React.Fragment>
      <div class="article__wrapper">
      <h5>ДЮП-2019</h5>

      <p>18 квітня 2019р. на базі НВК “Школа-гімназія №3” відбувся завершальний (фінальний) етап міських змагань дружини юних пожежних на Кубок міського голови імені Романа Шухевича. Команда «Спалах» НВК «Школа-гімназія №3» у нелегкій боротьбі здобула I місце і отримала безліч чудових подарунків</p>

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
            
            <Card.Body>
              <blockquote>
                <div>
                  <img src={five} alt="" className="cardHero" />
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

export default Dup2019;
