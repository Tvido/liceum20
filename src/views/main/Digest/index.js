import React from 'react';
import { Col, Card } from 'react-bootstrap';
import algorithm from './algorithm_diy.png';
import do_uvagu_batkiv from './do_uvagu_batkiv.png';
import onlain_rejestraciya from './onlain_rejestraciya.jpg';
import promisl_palata from './promisl_palata.jpg';
import second_stage from './second_stage.png';
import alert_1 from './alert_1.png';
import alert_2 from './alert_2.png';
import attention from './attention.png';
import nakaz_1 from './nakaz_1.jpeg';
import nakaz_2 from './nakaz_2.jpeg';

const Digest = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">16.06.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={nakaz_1} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote>
                  <div>
                    <img src={nakaz_2} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Про зарахування здобувачів освіти на вільні місця до 1-ого класу на 2022-2023 н.р.</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">22.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17B7Pz0Vu7EL5ddHbvHQ_I_62M7hrlTyG/view">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>Наказ про зарахування здобувачів освіти у перші класи 2022-2023 н.р. (1)</p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1MKJLP1bLd9GwtBn0yczwrcph_1O-eZvE/view">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>Наказ про зарахування здобувачів освіти у перші класи 2022-2023 н.р. (2)</p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1heySw3twL5q4zmq1LrNR5Dt9Ew1k3caj/view">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>Наказ про зарахування здобувачів освіти у перші класи 2022-2023 н.р. (3)</p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1XlGAGTynDdjkoHwQPi8HX8QT5vWzd9yX/view">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>Наказ про зарахування здобувачів освіти у перші класи 2022-2023 н.р. (4)</p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Зарахування до 1-ого класу</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">30.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={attention} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">До уваги батьків майбутніх першокласників!</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">30.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={alert_1} alt="" className="cardHero" />
                  </div>
                  <div>
                    <img src={alert_2} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <Card.Text className="mb-2">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/if.nvk3/posts/649135199848205">
                      Перейти за посиланням
                    </a>
                  </Card.Text>

                  <footer className="blockquote-footer">
                    <cite title="Source Title">Увага! Важлива інформація для батьків майбутніх першокласників!</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">24.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={second_stage} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">
                      Результати II етапу Всеукраїнських учнівських олімпіад з навчальних предметів у 2021-2022 н.р.
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">23.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={promisl_palata} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Дякуємо Торговій промисловій палаті за неодноразову допомогу у скрутний для країни час.</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">13.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={onlain_rejestraciya} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <Card.Text className="mb-2">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSewMlxwE6M45eD6MC_U1Pu5fW4U_lYc0ef6Kr0N_ZOBKH46cQ/viewform"
                    >
                      учні закладів загальної середньої освіти
                    </a>
                  </Card.Text>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">
                      З метою залучення до навчання учнів із числа внутрішньо переміщених осіб на території Івано-Франківської територіальної
                      громади необхідно зареєструватися за посиланням
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">14.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={do_uvagu_batkiv} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <Card.Text className="mb-2">
                    <a target="_blank" rel="noreferrer" href="https://school.bloqly.com/#/">
                      Перейти на платформу блокчейн
                    </a>
                  </Card.Text>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Електронна реєстрація дітей для зарахування до 1-ого класу</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">22.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <div>
                    <img src={algorithm} alt="" className="cardHero" />
                  </div>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Алгоритм дій учасників освітнього процесу в разі виникнення надзвичайної ситуації</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="cardWrapper">
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">22.03.2022</Card.Title>
              </Card.Header>
              <Card.Body>
                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/17_WP7Tz6JamaTYDcDldUA7ocNfHQWjlg/edit">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>ДІЇ УЧАСНИКІВ ОСВІТНЬОГО ПРОЦЕСУ У РАЗІ ВИНИКНЕННЯ ЧИ ЗАГРОЗИ ВИНИКНЕННЯ НАДЗВИЧАЙНИХ СИТУАЦІЙ</p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1b3SzLv8x0xMGTjNMG5CqDwyRE00QSUi5/edit">
                    <div className="section__box">
                      <div className="section__content">
                        <h3>Клікни, щоби читати</h3>

                        <p>
                          Як діяти у випадку, якщо на території, де ви перебуваєте, розпочалися військові дії або стався терористичний акт.
                        </p>
                      </div>
                    </div>
                  </a>
                </blockquote>

                <blockquote className="blockquote text-right">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Дії учасників освітнього процесу у разі загрози виникнення надзвичайних ситуацій</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </div>
        </div>

    </React.Fragment>
  );
};

export default Digest;
