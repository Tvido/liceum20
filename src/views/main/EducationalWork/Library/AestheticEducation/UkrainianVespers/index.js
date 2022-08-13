import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import one from './one.jpg'
import one1 from './one1.jpg'
import one2 from './one2.jpg'


const UkrainianVespers = () => {
  return (
    <React.Fragment>
<div class="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Вишиванки вчителів</Card.Title>
            </Card.Header>
              <Card.Body>
                <blockquote>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UKTNVSkIjjvLIQFz95HSQrYwQKDzszNw/view">
                  <div className="section__box">
                    <div className="section__content">
                      <h3>Клікни, щоби читати</h3>
                      <p>Українські вечорниці</p>
                      </div>
                    </div>
                  </a>
                </blockquote>
            </Card.Body>

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

          </Card>
        </Col>
      </div>
        </div>

    </React.Fragment>
  );
};

export default UkrainianVespers;
