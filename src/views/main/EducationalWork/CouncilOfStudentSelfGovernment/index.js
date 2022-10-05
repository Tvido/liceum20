import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

import one from './one.png'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'
import nine from './nine.jpg'
import ten from './ten.jpg'

const CouncilOfStudentSelfGovernment = () => {
  return (
    <React.Fragment>
<div className="article__wrapper">
      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1iTbgsh3it4Kg85WY1gBuCqTTRDpbrwrH/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Проект «Створення комфортного середовища успішної особистості»</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1dYU3SSbSQX00vVkGmECd8iWeQqTlK1Fe/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Структура Ради учнівського самоврядування</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=m3FwWHQGZ4Y">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Вибори учнівського президента</p>
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
          </Card>
        </Col>
      </div>

       <h5>15 “золотих” правил членів РУС:</h5>

      <ul>
        <li>сміливіше внось свої пропозиції для ухвалення колективного рішення;</li>
        <li>не бійся, що вносиш ідеї прості, з банку ідей відберемо золоті;</li>
        <li>думку викладай чітко, якщо потрібно – повтори;</li>
        <li>часу не марнуй, пропозиції внось стисло і чітко;</li>
        <li>добре зрозумієш – краще зробиш;</li>
        <li>не соромся помилятися, соромно не вміти і не бажати виправитись;</li>
        <li>довіру треба розуміти так: усе перевіряється ділом, дружбою й турботою;</li>
        <li>будь тактовним, увічливим; не поводься зверхньо;</li>
        <li>до товаришів стався справедливо, суди про них за роботою, а не за словами або твоїми особистими симпатіями;</li>
        <li>зауваження бери до уваги, пропозиції виконуй;</li>
        <li>твори, фантазуй сміливіше – шукай шляхів виконання рішень;</li>
        <li>не вішай носа, коли важко;</li>
        <li>не берися за все сам: один ніколи не зробить того, що може добре організований колектив, але не сиди, склавши руки, коли всі працюють;</li>
        <li>не відкладай на завтра вирішення такого питання, як можна вирішити сьогодні;</li>
        <li>прийняв рішення – виконуй! Доручив іншим – довіряй! Довіряючи перевіряй! Допомагаючи – не підміняй!</li>
      </ul>

      <h5>План роботи Ради учнівського самоврядування Ліцею № 20 на 2020-2021н.р.</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>

            <tr>
              <td>№з/п</td>
              <td>Зміст роботи</td>
              <td>Дата</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Організація цікавого і змістовного життя учнів у закладі освіти та за його межами упродовж навчального року та в канікулярний період.</td>
              <td>Упродовж навчального року</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Співпраця з правоохоронними органами, закладами охорони здоров’я,відділом у справах сім’ї та молоді .</td>
              <td>Упродовж навчального року</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Співпраця з неурядовими організаціями, релігійними громадами, які займаються профілактикою наркоманіїта пропагандою здорового способу життя.</td>
              <td>Упродовж навчального року</td>
            </tr>
            
            <tr>
              <td>4</td>
              <td>Загальношкільна учнівська конференція.</td>
              <td>ІІ рази в рік</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Засідання Ради учнівського самоврядування.</td>
              <td>ІІ рази на семестр</td>
            </tr>
            
            <tr>
              <td>6</td>
              <td>Засідання керівного органу РУС.</td>
              <td>ІІ рази на місяць</td>
            </tr>

            <tr>
              <td>7</td>
              <td>Засідання старостату.</td>
              <td>Щоп'ятниці</td>
            </tr>
            
            <tr>
              <td>8</td>
              <td>Організація класного самоврядування.</td>
              <td>До 28.09.2020р.</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Вибори учнівського президента.</td>
              <td>06.10.2020р.</td>
            </tr>
            
            <tr>
              <td>10</td>
              <td>Випуск шкільної газети «Погляд».</td>
              <td>І раз на семестр</td>
            </tr>

            <tr>
              <td>11</td>
              <td>Участь у загальношкільних рейдах «Бережи шкільне майно».</td>
              <td>ІІ рази на семестр</td>
            </tr>
            
            <tr>
              <td>12</td>
              <td>Допомога у підготовці та проведенні загальношкільних тематичних заходів.</td>
              <td>Упродовж навчального року</td>
            </tr>

            <tr>
              <td>13</td>
              <td>Участь у загальноміських заходах, акція, конференціях тощо.</td>
              <td>Упродовж навчального року</td>
            </tr>

          </tbody>
        </Table>
      </Card.Body>

        <h5>Положення про вибори учнівського президента Ліцею № 20</h5>
        <h5>Загальні положення</h5>
        <ul>
          <li>Вибори учнівського президента проводяться за принципом загального рівного і прямого виборчого права таємним голосуванням.</li>
          <li>Право висувати кандидата в учнівські президенти має кожний класний колектив.</li>
          <li>Право обирати учнівського президента мають учні 5-11 класів, вчителі.</li>
        </ul>

        <h5>Організація та проведення виборів</h5>
        <ul>
          <li>Для проведення голосування утворюється виборча комісія.</li>
          <li>Виборча комісія:</li>
          <ul>
            <li>складає списки виборців;</li>
            <li>встановлює форму виборчого бюлетеня;</li>
            <li>проводить реєстрацію кандидатів на пост учнівського президента;</li>
            <li>встановлює результати виборців і оголошує їх.</li>
          </ul>
        </ul>

        <h5>Передвиборча агітація</h5>
        <ul>
          <li>Учень, який зареєстрований кандидатом на посаду учнівського президента, має право вести передвиборчу агітацію.</li>
          <li>Кандидат з допомогою ініціативної групи повинен підготувати передвиборчу програму.</li>
          <li>Якщо два та більше кандидатів набрали однакову кількість голосів, проводяться повторні вибори.</li>
          <li>Повідомлення про обрання учнівського президента оголошується головою виборчої комісії на загальношкільній конференції.</li>
          <li>Обраним вважається кандидат, за якого проголосувала більшість учнів, що взяла участь у голосуванні.</li>
          <li>Учнівському президенту школи вручається відповідне посвідчення.</li>
        </ul>

        <p>Згідно цього положення про вибори учнівського президента в період передвиборчої кампанії кандидати на цю посаду з ініціативною групою проводять агітацію по класах. Розклад передвиборчої агітації узгоджено з директором школи.</p>
        <p>Обов’язковою є програма дій на посаду учнівського президента, яку кожен з кандидатів висвітлює у своїй стіннівці для того, щоб учні школи мали змогу ознайомитись з нею і подумати, що для них є важливим.</p>
        <p>За два дні до виборів кандидати на цю посаду мають змогу зібрати учнівську конференцію і дати відповідь на всі запитання щодо своєї програми.</p>

        <h5>Положення затверджено на загальношкільній учнівській  конференції 26.09.2020 р.</h5>
        <h5>Передвиборча програма</h5>
        <p><b>Передвиборча програма</b> є своєрідною візитною карткою кандидата. Вона має бути зрозумілою і переконливою, тому написана повинна бути простою мовою (але не примітивною). При оголошенні програми її краще розповідати, а не читати, до того ж не буде зайвим побажання успіху опонентам.</p>

        <h5>План написання передвиборчої програми</h5>
        <h5>Про себе:</h5>
        <ul>
          <li>автобіографія;</li>
          <li>життєве кредо;</li>
          <li>ставлення до людей;</li>
          <li>досвід діяльності;</li>
          <li>захоплення.</li>
        </ul>

        <h5>Плани на майбутнє:</h5>
        <ul>
          <li>конкретні дії;</li>
          <li>механізм їх реалізації;</li>
          <li>конкретні або орієнтовні дати виконання пунктів про­грами;</li>
          <li>налагодження партнерських зв’язків.</li>
        </ul>

        <h5>Командна робота:</h5>
        <ul>
          <li>плани щодо створення або підтримання цілісності ко­манди;</li>
          <li>психологічний клімат у команді.</li>
        </ul>

        <h5>Мотиваційні моменти:</h5>
        <ul>
          <li>свої сильні риси;</li>
        </ul>

        <p>Передвиборчу агітацію проводять кандидати на посаду учнівського президента Гафійчук Анастасія та Остапів Анастасія</p>


        <h5>Інавгурація учнівського президента</h5>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
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

            <Card.Body>
              <blockquote>
                <div>
                  <img src={five} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                <div>
                  <img src={six} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                <div>
                  <img src={seven} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                <div>
                  <img src={eight} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                <div>
                  <img src={nine} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>

            <Card.Body>
              <blockquote>
                <div>
                  <img src={ten} alt="" className="cardHero" />
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

export default CouncilOfStudentSelfGovernment;