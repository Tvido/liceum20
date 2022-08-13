import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'

const RulesOfBehaviorOnTheInternet = () => {
  return (
    <React.Fragment>
      <div class="article__wrapper">
      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=1ozgrqHBqjQ&ab_channel=DialogHub">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ЯК УБЕЗПЕЧИТИ ДІТЕЙ В ІНТЕРНЕТІ 9-12 РОКІВ. КІБЕРБЕЗПЕКА</p>
            </div>
          </div>
        </a>
                
        <a target="_blank" rel="noreferrer" href="https://stop-sexting.in.ua/category/materials/">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Захист дітей від сексуальних ризиків в інтернеті</p>
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

               <blockquote>
                <div>
                  <img src={two} alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote>
                <div>
                  <img src={three} alt="" className="cardHero" />
                </div>
              </blockquote>

               <blockquote>
                <div>
                  <img src={four} alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote>
                <div>
                  <img src={five} alt="" className="cardHero" />
                </div>
              </blockquote>

               <blockquote>
                <div>
                  <img src={six} alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote>
                <div>
                  <img src={seven} alt="" className="cardHero" />
                </div>
              </blockquote>

               <blockquote>
                <div>
                  <img src={eight} alt="" className="cardHero" />
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

export default RulesOfBehaviorOnTheInternet;
