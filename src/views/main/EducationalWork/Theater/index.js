import React from 'react';
// import { Col, Card } from 'react-bootstrap';

// import one from './one.jpg'
// import two from './two.jpg'
// import three from './three.jpg'

const Theater = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
        <div className="section__grid">

        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?v=1301060557421005">
            <div className="section__box">
              <div className="section__content">
                <h3>Клікни, щоби читати</h3>

                <p>Байки</p>
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?v=5928057203930706">
            <div className="section__box">
              <div className="section__content">
                <h3>Клікни, щоби читати</h3>

                <p>Драмтеатр «Первоцвіт» декламує (керівник Оксана Хибінь).
Читаємо твори Лесі Українки</p>
              </div>
            </div>
          </a>
        </div>
        
      {/* <h5>Оксана Хибінь, керівник літературно-драматичного театру “Первоцвіт”</h5> */}

      {/* <div className="cardWrapper">
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

          </Card>
        </Col>
      </div> */}
      </div>

    </React.Fragment>
  );
};

export default Theater;
