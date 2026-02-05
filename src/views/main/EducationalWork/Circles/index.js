import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import DUSSH from './DUSSH.jpg'



const Certification = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Розклад гурткових занять у Ліцеї № 20 на 2024-2025 н.р.</h5>

      {/* <Card.Body>
              <blockquote>
                <div>
                  <img src="https://drive.google.com/file/d/1sbhnxmo7rvF4t51OC3_4uAz446824gwJ/view?usp=sharing" alt="" className="cardHero" />
                </div>
              </blockquote>
      </Card.Body> */}

      <div className="section__grid">

      {/* <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1sbhnxmo7rvF4t51OC3_4uAz446824gwJ/view?usp=sharing">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>
              <p>Розклад спортивних секцій 2024-2025 н.р.</p>
            </div>
          </div>
        </a> */}
      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1feGhwJLuonFFM9o8s9JMOhlsyCA22Llu/view?usp=sharing">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>
              <p>Розклад спортивних секцій 2025-2026 н.р.</p>
            </div>
          </div>
        </a>
        </div>

{/* 
      <Card.Body>
        <Table responsive hover>
          <tbody>

            <tr>
              <td>Назва гуртка</td>
              <td>Керівник</td>
              <td>Дата та час проведення</td>
            </tr>

            {/* <tr>
              <td>Драматичний гурток «Первоцвіт»</td>
              <td>Хибінь О.З.</td>
              <td>чт 15:20-16:50</td>
            </tr>

            <tr>
              <td>Журналістика</td>
              <td>Гурова О.А.</td>
              <td>вт 15:20-16:50</td
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
              <td>Тимків Х.П.</td>
              <td>пн 12:30-14:15, ср 13:20-15:00</td>
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
              <td>Тхеквондо та кікбоксинг</td>
              <td>Грешко Р.В.</td>
              <td>вт, чт 16:00-17:00 – І група, 17:00-18:00 – ІІ група,</td>
            </tr>

            <tr>
              <td>Тхеквондо та кікбоксинг</td>
              <td>Грешко Р.В.</td>
              <td>сб 10:00-11:00 – І група, 11:00-12:00 – ІІ група</td>
            </tr>*/}

             {/* <tr>
              <td>Хор і малі вокальні форми</td>
              <td>Протас Л.О.</td>
              <td>пн, ср, пт, 15:20-16:05, 16:15-17:00, 17:10-17:55</td>
            </tr>

            <tr>
              <td>Інструментальний ансамбль "Усмішка"</td>
              <td>Цібій П.О.</td>
              <td>пн, ср, пт, 15:20-16:05, 16:15-17:00, 17:10-17:55</td>
            </tr>

            <tr>
              <td>Танцювальний ансамбль «Тайстра»</td>
              <td>Зіновенко І.О.</td>
              <td>вт, чт 12:30-13:05, 13:15-14:50, 15:20-16:05</td>
            </tr>

            <tr>
              <td>Танцювальний ансамбль «Тайстра»</td>
              <td>Зіновенко І.О.</td>
              <td>сб  10:00-10:35, 10:45-11:20, 11:30-12:15</td>
            </tr>

            <tr>
              <td>Влучний стрілець</td>
              <td>Липовецький С.І.</td>
              <td>пн 15:20-17:35</td>
            </tr>

            <tr>
              <td>Юний стрілець</td>
              <td>Липовецький С.І.</td>
              <td>сб 11:00-13:15</td>
            </tr>

            <tr>
              <td>Джура</td>
              <td>Липовецький С.І.</td>
              <td>ср 15:20-17:35</td>
            </tr>

            

            <tr>
              <td>Баскетбол (юнаки) "Говерла"</td>
              <td>Кошовець А.С.</td>
              <td>вт 18:00-19:30, чт 17:00-19:30</td>
            </tr>

            <tr>
              <td>Баскетбол (дівчата) ДЮСШ №2</td>
              <td>Редюк К.Ю.</td>
              <td>пн, ср 17:00-18:30, пт, сб 15:15-16:45</td>
            </tr>

            <tr>
              <td>Футбол (дівчата) ДЮСШ №3</td>
              <td>Москалюк І.Р.</td>
              <td>пн, ср, 18:30-20:30, пт 16:45-18:45, сб 17:30-19:30</td>
            </tr>

            <tr>
              <td>Футбол (юнаки) ДЮСШ №3</td>
              <td>Яцущак С.М.</td>
              <td>пн, ср 15:30-17:30, сб 12:30-14:30</td>
            </tr>

            <tr>
              <td>Спортивний туризм ЦТКУМ</td>
              <td>Біленко І.М</td>
              <td>ср 16:00-18:15 , сб 13:00-15:15</td>
            </tr>

            <tr>
              <td>Велотуризм ЦТКУМ</td>
              <td>Біленко І.М</td>
              <td>пн 16:00-18:15, сб 10:00-12:15</td>
            </tr> 

            <tr>
              <td>«Юний турист-краєзнавець» ЦТКУМ</td>
              <td>Козак Н.С.</td>
              <td>пн 17:00-19:30, вт 17:00-19:30</td>
            </tr> 


          </tbody>
        </Table>
      </Card.Body> */}

      <Card.Body>
              <blockquote>
                <div>
                  <img src={DUSSH} alt="" className="cardHero" />
                </div>
              </blockquote>
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
        </div>


    </React.Fragment>
  );
};

export default Certification;
