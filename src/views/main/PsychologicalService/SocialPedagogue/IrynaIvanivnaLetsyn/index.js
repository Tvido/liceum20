import React from 'react';
import { Col, Card } from 'react-bootstrap';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'

const IrynaIvanivnaLetsyn = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Лецин Ірина Іванівна</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src="" alt="" className="cardHero" />
                </div>
              </blockquote>

              <blockquote className="blockquote text-right">
                <footer className="blockquote-footer">
                  <cite title="Source Title">Телефон: 0954603292</cite>
                </footer>
                
                <footer className="blockquote-footer">
                  <cite title="Source Title">Email: letsyn1984@gmail.com</cite>
                </footer>
                
                <footer className="blockquote-footer">
                  <cite title="Source Title">Email: irynaivanyvna@gmail.com</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>

      <div className="section__grid">

        <a target="_blank" rel="noreferrer" href="https://fb.watch/ky05f-XVg3/">
                <div className="section__box">
                  <div className="section__content">
                    <h3>Клікни, щоби читати</h3>

                    <p>Статеве виховання учнів.</p>
                  </div>
                </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1FiYgtJEOAbW7oFgkp0xOixsJ9zH4m6P4/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
                <div className="section__box">
                  <div className="section__content">
                    <h3>Клікни, щоби читати</h3>

                    <p>Інформація про діяльність гарячих ліній</p>
                  </div>
                </div>
        </a>

      </div>

      <div className="article">
        <article>
          <h5>Сім способів зняти стрес і поліпшити настрій</h5>
          <p>До Всесвітнього дня дитини  соціальним педагогом, Лецин І.І. для учнів 2, 3 класів Ліцею 20 проведені заходи ” Права та обов’язки учнів”, “Знай свої права і змінюй світ”.  Конвенція ООН про права дитини – це основний документ, який захищає права дітей. Діти повинні знати свої права. Уміти їх відстоювати. Вивчення прав людини – це, перш за все, виховання упевненості в собі, терпимості. У кожної людини, як у дорослої, так і у дитини, є права. Однак права дітей відрізняються від прав дорослих. У дітей менше можливостей захистити самого себе; вони фізично і психологічно незрілі, більш вразливі, сильніше залежить від опіки старших</p>

        </article>
      </div>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Лецин Ірина Іванівна</Card.Title>
            </Card.Header>
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

            </Card.Body>
          </Card>
        </Col>
      </div>
        </div>


    </React.Fragment>
  );
};

export default IrynaIvanivnaLetsyn;
