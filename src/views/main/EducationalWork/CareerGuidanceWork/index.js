import React from 'react';
import { Col, Card } from 'react-bootstrap';

import one from './one.jpg'

const CareerGuidanceWork = () => {
  return (
    <React.Fragment>

<div className="article__wrapper">
    <div className="section__grid">
      <a target="_blank" rel="noreferrer" href="https://youtu.be/1YWWQgXp20g">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Харківський національний університет Повітряних Сил імені Івана Кожедуба</p>
            </div>
          </div>
        </a>

      <a target="_blank" rel="noreferrer" href="https://youtu.be/mx9A_0ABMw4">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ВІТАЄМО З ДНЕМ ПОВІТРЯНИХ СИЛ ЗБРОЙНИХ СИЛ УКРАЇНИ</p>
            </div>
          </div>
        </a>
    

    
      <a target="_blank" rel="noreferrer" href="https://youtu.be/qQtQfaR4KOE">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Факультет ХНУПС ім. Івана Кожедуба</p>
            </div>
          </div>
        </a>

      <a target="_blank" rel="noreferrer" href="https://youtu.be/K_jjKRtNXGA">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ХНУПС ім. Івана Кожедуба презентує</p>
            </div>
          </div>
        </a>
    

    
      <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1XM12iP6GFsKGGOLzhD7z8XpInCt5DdNS/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ХНУПС ім. Івана Кожедуба. Агітація </p>
            </div>
          </div>
        </a>

      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1k24irqABkaLgDfsTS-B_M93xjQ6-o5ru/view?usp=sharing">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Інженерно-авіаційний факультет ХНУПС запрошує до вступу 2023 році</p>
            </div>
          </div>
        </a>
    </div>
    </div>

            <div className="article__wrapper">
        <p>Головною потребою глобалізованого світу у XXI столітті є комунікація. Спілкування та взаємодія між глобальними суб’єктами, країнами потребує висококласних фахівців з перекладу. Перекладач — професія, яка не втрачає актуальності. Перекладачі завжди потрібні в консульствах та міністерствах, бізнесі та на виробництвах, у торгових мережах і маленьких фірмах і, звичайно, видавництвах.</p>
        <p>Отримавши диплом перекладача, ти зможеш реалізувати себе в багатьох сферах: від перекладу важливих міжнародних переговорів до перекладу художніх текстів чи роботи над адаптацією голлівудських фільмів.</p>
        <p>Вступай на спеціальність «Філологія (переклад-англійська мова)» в Університет Короля Данила та разом з професіоналами ти досягнеш своєї мрії!</p>

            <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Університет Короля Данила – простір формування успішних</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                  <div>
                    <img src={one} alt="" className="cardHero" />
                  </div>
              </blockquote>

              <blockquote>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=kynyI4wUZsU&feature=emb_imp_woyt">
                  <div className="section__box">
                    <div className="section__content">
                      <h3>Клікни, щоби дивитися</h3>

                      <p>Університет Короля Данила.</p>
                    </div>
                  </div>
                </a>
              </blockquote>

              <blockquote className="blockquote text-right">
                 <Card.Text className="mb-2">
                  <a target="_blank" rel="noreferrer" href="https://ukd.edu.ua/specialty/filologiya">
                  Філологія
                  </a>
                </Card.Text>

                <Card.Text className="mb-2">
                  <a target="_blank" rel="noreferrer" href="https://ukd.edu.ua/specialnosti-ta-osvitni-programi">
                  Обрати спеціальність
                  </a>
                </Card.Text>

                <footer className="blockquote-footer">
                  <cite title="Source Title">Дізнайся більше про освітню програму та умови вступу на нашому сайті</cite>
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

export default CareerGuidanceWork;
