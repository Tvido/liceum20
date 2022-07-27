import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import scheme from './scheme.png'

const InformationMaterials = () => {
  return (
    <React.Fragment>
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">16.06.2022</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src={scheme} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

            <div className="article">
        <article>
          <h5>У Ліцеї №20 Івано-Франківської міської ради для осіб з особливими освітніми потребами створені наступні умови:</h5>

          <ul>
            <li>наявністю пандусу;</li>
            <li>розмір вхідних дверей дозволяє перемістити маломобільну людину до приміщення;</li>
            <li>
              відсутністю порогів на І поверсі, безперешкодний доступ до їдальні, медичного кабінету, спортзалу, окремих навчальних
              кабінетів;
            </li>
            <li>територія подвір’я має вільний доступ для маломобільних груп населення.</li>
          </ul>

        </article>
      </div>


    </React.Fragment>
  );
};

export default InformationMaterials;