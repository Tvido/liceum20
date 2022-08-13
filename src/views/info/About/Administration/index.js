import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import skydanchuk from './skydanchuk.jpg'
import grekul from './grekul.jpg'
import filipovych from './filipovych.jpg'
import knysh from './knysh.jpg'
import shkilnyk from './shkilnyk.jpg'

const Administration = () => {
  return (
    <React.Fragment>
      <div class="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Директор</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={skydanchuk} alt="" className="cardHero" />
                  </div>
              </blockquote>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2">
                  Скиданчук Дмитро Михайлович
                </Card.Text>
                <footer className="blockquote-footer">
                   <cite title="Source Title">директор, учитель української мови та літератури, “спеціаліст вищої категорії”, “старший учитель”</cite>
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
              <Card.Title as="h5">Заступник директора</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={grekul} alt="" className="cardHero" />
                  </div>
              </blockquote>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2">
                  Грекул Галина Іванівна
                </Card.Text>
                <footer className="blockquote-footer">
                   <cite title="Source Title">заступник директора з навчально-виховної роботи, учитель української мови та літератури, “спеціаліст вищої категорії”, “старший учитель”</cite>
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
              <Card.Title as="h5">Заступник директора</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={filipovych} alt="" className="cardHero" />
                  </div>
              </blockquote>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2">
                  Філіпович Лілія Іванівна
                </Card.Text>
                <footer className="blockquote-footer">
                   <cite title="Source Title">заступник директора з виховної роботи, учитель музичного мистецтва, “спеціаліст вищої категорії”</cite>
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
              <Card.Title as="h5">Заступник директора</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={knysh} alt="" className="cardHero" />
                  </div>
              </blockquote>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2">
                  Книш Іра Василівна
                </Card.Text>
                <footer className="blockquote-footer">
                   <cite title="Source Title">заступник директора з навчально-виховної роботи, учитель початкових класів, “спеціаліст вищої категорії”</cite>
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
              <Card.Title as="h5">Заступник директора</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={shkilnyk} alt="" className="cardHero" />
                  </div>
              </blockquote>
              <blockquote className="blockquote text-right">
                <Card.Text className="mb-2">
                  Шкільник Юрій Володимирович
                </Card.Text>
                <footer className="blockquote-footer">
                   <cite title="Source Title">заступник директора з господарських питань</cite>
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

export default Administration;
