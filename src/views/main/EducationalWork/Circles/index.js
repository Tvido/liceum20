import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'

const Certification = () => {
  return (
    <React.Fragment>
      <h5>Розклад гурткових занять у Ліцеї № 20 на 2020-2021 н.р.</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>

            <tr>
              <td>Назва гуртка</td>
              <td>Керівник</td>
              <td>Дата та час проведення</td>
            </tr>

            <tr>
              <td>Драматичний гурток «Первоцвіт»</td>
              <td>Хибінь О.З.</td>
              <td>чт 15:20-16:50</td>
            </tr>

            <tr>
              <td>Журналістика</td>
              <td>Гурова О.А.</td>
              <td>вт 15:20-16:50</td>
            </tr>

            <tr>
              <td>ARDUINO</td>
              <td>Савків І.І.</td>
              <td>пн 15:20-16:50</td>
            </tr>

            <tr>
              <td>Китайська мова</td>
              <td>Пінчак Л.В.</td>
              <td></td>
            </tr>

            <tr>
              <td>Туристично-краєзнавчий</td>
              <td>Козак Н.С.</td>
              <td>ср 15:20-16:50</td>
            </tr>

            <tr>
              <td>Соломоплетіння</td>
              <td>Танчак Г.Я.</td>
              <td>ср 15:20-16:50</td>
            </tr>

            <tr>
              <td>Велоспорт</td>
              <td>Гайдейчук Л.В.</td>
              <td>вт 15:20-16:05</td>
            </tr>

            <tr>
              <td>Футбол</td>
              <td>Бекер Р.Р.</td>
              <td>чт 15:30-16:15</td>
            </tr>

            <tr>
              <td>Хор і малі вокальні форми</td>
              <td>Протас Л.О.</td>
              <td>пн 15:20-16:30, вт 14:30-16:05, чт 15:20-16:30</td>
            </tr>

            <tr>
              <td>Хор і малі вокальні форми</td>
              <td>Тимків Х.П.</td>
              <td>пн 12:30-14:15, ср 13:20-15:00</td>
            </tr>

            <tr>
              <td>Оркестр народних інструментів</td>
              <td>Цібій П.О.</td>
              <td>пт 15:20-17:45, ср 15:20-17:45, чт 14:30-16:55</td>
            </tr>

            <tr>
              <td>Танцювальний ансамбль «Тайстра»</td>
              <td>Зіновенко І.О.</td>
              <td>пн 13:20-14:54,  15:20-16:05</td>
            </tr>

            <tr>
              <td>Танцювальний ансамбль «Тайстра»</td>
              <td>Зіновенко І.О.</td>
              <td>пт 12:30-14:05, 15:20-16:05</td>
            </tr>

            <tr>
              <td>Танцювальний ансамбль «Тайстра»</td>
              <td>Зіновенко І.О.</td>
              <td>сб 10:00-11:35, 11:40-12:25</td>
            </tr>

            <tr>
              <td>Влучний стрілець</td>
              <td>Липовецький С.І.</td>
              <td>пн 15:20-17:35</td>
            </tr>

            <tr>
              <td>Джура</td>
              <td>Липовецький С.І.</td>
              <td>ср 15:20-17:35</td>
            </tr>

            <tr>
              <td>Юний стрілець</td>
              <td>Липовецький С.І.</td>
              <td>сб 11:00-13:15</td>
            </tr>

            <tr>
              <td>Історико-краєзнавчий</td>
              <td>Вінтонюк І.Я.</td>
              <td>пн, чт 15:20-17:35</td>
            </tr>

            <tr>
              <td>Економічне краєзнавство</td>
              <td>Козак Н.С.</td>
              <td>ср 15:00-16:55</td>
            </tr>

            <tr>
              <td>«Юні туристи-краєзнавці»</td>
              <td>Козак Н.С.</td>
              <td>пн, ср 17:00-19:15</td>
            </tr>

            <tr>
              <td>Спортивний туризм. Велотуризм</td>
              <td>Гайдейчук Л.В.</td>
              <td>пн, ср 15:20-17:35</td>
            </tr>

            <tr>
              <td>Спортивний туризм. Пішохідний туризм</td>
              <td>Кутова Д.О.</td>
              <td>вт, чт 15:30-17:55</td>
            </tr>

            <tr>
              <td>Тхеквондо та кікбоксинг</td>
              <td>Грешко Р.В.</td>
              <td>вт, чт 16:00-17:00 – І група, 17:00-18:00 – ІІ група,</td>
            </tr>

            <tr>
              <td>Тхеквондо та кікбоксинг</td>
              <td>Грешко Р.В.</td>
              <td>сб 10:00-11:00 – І група, 11:00-12:00 – ІІ група</td>
            </tr>

            <tr>
              <td>Баскетбол (юнаки)</td>
              <td>Кошовець А.С.</td>
              <td>вт 18:00-19:30, чт 16:30-19:30, сб 09:00-12:30</td>
            </tr>

            <tr>
              <td>Баскетбол (дівчата)</td>
              <td>Редюк К.Ю.</td>
              <td>пн, ср, пт 15:20-16:50</td>
            </tr>

            <tr>
              <td>Футбол (дівчата)</td>
              <td>Тиханський М.І.</td>
              <td>пн, ср, пт, 17:30-19:45, сб 14:00-16:15</td>
            </tr>

            <tr>
              <td>Флорбол</td>
              <td>Крум М.І.</td>
              <td>вт 16:30-18:30, сб 17:00-19:00</td>
            </tr>


          </tbody>
        </Table>
      </Card.Body>

      <p>Директор Ліцею № 20 Дмитро Скиданчук</p>


      <h5>Танчак Галина Ярославівна, керівник гуртка “Дивосвіт”</h5>

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

export default Certification;
