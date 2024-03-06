import React from 'react';
import { Col, Card } from 'react-bootstrap';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'

const Dup2019 = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1kaip6gUylKOgMzKCvrKdrqpnbVZalnJy/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Міський етап конкурсу ДЮП-2023</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1ZJ7wVi33r4MkhtxLA9J6gdxEqJfkfOUQ/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Обласний етап конкурсу ДЮП-2023</p>
            </div>
          </div>
        </a>
      </div>
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
