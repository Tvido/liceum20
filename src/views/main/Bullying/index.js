import React from 'react';
import { Col, Card } from 'react-bootstrap';
import one from './one.png'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'

const Bullying = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=6m8YK6vldYI&app=desktop">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Булінг в закладі освіти відео</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ae39NNbg8N5HFHnVA9KiNA4wUQ0qi8g3/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Наказ “Про внесення змін до Закону України “Про освіту” щодо протидію булінгу”</p>
            </div>
          </div>
        </a>

         <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1OiEA5pKnT6-BjicD0ilkACGwscmIo7Vu/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Додаток №2 План заходів, спрямованих на запобігання та протидію булінгу</p>
            </div>
          </div>
        </a>

                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/13eC2-FgBpQzeZEEeyTwf7fioU-g23SB6/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Додаток №3 “Порядок подання та розгляду заяв”</p>
            </div>
          </div>
        </a>

         <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Z0KOhZeCMtjhKKUtOqqQmt5o8Me8BnvA/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Додаток №4 “Порядок реагування”</p>
            </div>
          </div>
        </a>
        
         <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1QvZ2kJjt_upcKqaMVsyvjJEClwNtn2S5/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Про організацію роботи щодо запобігання та протидії булінгу (цькуванню)”</p>
            </div>
          </div>
        </a>
      </div>

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

export default Bullying;
