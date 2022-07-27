import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import tizhden_bezpeki from './tizhden_bezpeki.jpg'

const MethodicalDecades = () => {
  return (
    <React.Fragment>
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">ПРЕДМЕТНІ ТИЖНІ</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src={tizhden_bezpeki} alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote className="blockquote text-right">
                 <Card.Text className="mb-2">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/if.nvk3/posts/649135199848205">
                  Тиждень з основ безпеки життєдіяльності
                  </a>
                </Card.Text>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

    </React.Fragment>
  );
};

export default MethodicalDecades;
