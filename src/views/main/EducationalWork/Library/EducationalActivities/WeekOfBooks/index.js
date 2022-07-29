import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one1 from './one1.jpg'
import one2 from './one2.jpg'
import two1 from './two1.jpg'
import two2 from './two2.jpg'
import three1 from './three1.jpg'
import three2 from './three2.jpg'
import four1 from './four1.jpg'
import four2 from './four2.jpg'
import five1 from './five1.jpg'
import five2 from './five2.jpg'
import six1 from './six1.jpg'
import six2 from './six2.jpg'
import seven1 from './seven1.jpg'
import seven2 from './seven2.jpg'

const WeekOfBooks = () => {
  return (
    <React.Fragment>
      <h5>Звіт про проведення Тижня дитячої та юнацької книги</h5>
      <p>НВК «Школа-гімназія №3» з 01.04.2019р. до 05.04.2019р. Під гаслом «Бібліотека: час змін – час дій!»</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Пам’яті героїв Крут</Card.Title>
            </Card.Header>

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
         </Card>
        </Col>
      </div>

      <h5>Онлайн-презентація «Читай українське»</h5>
      <p>За допомогою сторінки шкільної бібліотеки на facebook популяризувати прочитану книгу сучасного українського письменника  01.04.2019р. Класи:5(9)-Б, та 9-Ж</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">«Читай українське»</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={two1} alt="" className="cardHero" />
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
         </Card>
        </Col>
      </div>

      <h5>Творча зустріч з письменницею Дзвінкою Торохтушко.</h5>
      <p>02.04.2019р. Наукова бібліотека ПНУ 7-З клас</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Творча зустріч з письменницею Дзвінкою Торохтушко.</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={three1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={three2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
         </Card>
        </Col>
      </div>

      <h5>Майстер-клас «Жила була книжка у скарбах шкільної бібліотеки»</h5>
      <p>4-В клас к. к. Ромашко О.М. 03.04.2019р.</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">«Жила була книжка у скарбах шкільної бібліотеки»</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={four1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={four2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
         </Card>
        </Col>
      </div>

      <h5>Майстер-клас «Жила була книжка у скарбах шкільної бібліотеки»</h5>
      <p>4-Г клас к. к. Нищук Л.М. 03.04.2019р.</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">«Жила була книжка у скарбах шкільної бібліотеки»</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={five1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={five2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
         </Card>
        </Col>
      </div>

      <h5>Воркшоп для учнів 5-В класу «Кіндербук рекомендує»</h5>
      <p>к. к. Паламаренко Р.І. 04.04.2019р.</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">«Кіндербук рекомендує»</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={six1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={six2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
         </Card>
        </Col>
      </div>

      <h5>QR-квест «Від Тарасика до Тараса»</h5>
      <p>8-З клас, к. к. Смоляк Н.І. 05.04.2019р.</p>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">«Від Тарасика до Тараса»</Card.Title>
            </Card.Header>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={seven1} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                  <div>
                    <img src={seven2} alt="" className="cardHero" />
                  </div>
              </blockquote>
            </Card.Body>
         </Card>
        </Col>
      </div>


    </React.Fragment>
  );
};

export default WeekOfBooks;
