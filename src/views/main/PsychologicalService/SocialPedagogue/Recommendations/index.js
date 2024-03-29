import React from 'react';
import { Col, Card } from 'react-bootstrap';
import one from './one.jpg'


const Recommendations = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>ПОРАДИ БАТЬКАМ як допомогти дитині в період адаптації</h5>

      <p>Будь – які перехідні періоди життя і діяльності дітей висувають специфічні проблеми, що пов’язані зі зміною в організації навчальної діяльності у середніх класах. Умови, які змінилися, пред’являють більш високі вимоги до інтелектуального і особистісного розвитку, до ступеня сформованості у дітей певних учбових знань, дій, навичок. Процес звикання до шкільних вимог і порядків, нового для п’ятикласників оточення, нових умов життя розуміється як адаптація. Адже дитина в школі адаптується не тільки до своєї соціальної ролі, але перш за все до особливостей засвоєння знань у нових умовах.</p>
      
      <ul>
        <li>Якщо Вас щось турбує в поведінці дитини, якомога швидше зустріньтеся і обговоріть це із класним керівником, шкільним психологом.</li>
        <li>Якщо в родині відбулися події, що вплинули на психологічний стан дитини, повідомте про це класного керівника. Саме зміни в сімейному житті часто пояснюють раптові зміни в поведінці дітей.</li>
        <li>Цікавтеся шкільними справами, обговорюйте складні ситуації, разом шукайте вихід із конфліктів.</li>
        <li>Допоможіть дитині вивчити імена нових учителів, запропонуйте описати їх, виділити якісь особливі риси.</li>
        <li>Порадьте дитині в складних ситуаціях звертатися за порадою до класного керівника, шкільного психолога.</li>
        <li>Не слід відразу ослабляти контроль за навчальною діяльністю, якщо в період навчання в початковій школі вона звикла до контролю з вашого боку. Привчайте дитину до самостійності поступово: вона має сама збирати портфель, телефонувати однокласникам і питати про уроки тощо.</li>
        <li>Основними помічниками у складних ситуаціях є терпіння, увага, розуміння.</li>
        <li>Головне новоутворення підліткового вікового періоду – відкриття своєї індивідуальності, свого «Я». Підвищується інтерес до свого тіла, зовнішності.</li>
        <li>Зростає дух незалежності, який впливає на стосунки підлітка в родині, школі.</li>
        <li>У дітей настає криза, пов’язана з бажанням здобути самостійність, звільнитися від батьківської опіки, з’являється страх перед невідомим дорослим життям.</li>
        <li>Бажання звільнитися від зовнішнього контролю поєднується зі зростанням самоконтролю й початком свідомого самовиховання.</li>
        <li>Внутрішній світ дитини ще нестабільний, тому батькам не слід залишати своїх дітей без нагляду. Підліток дуже вразливий і легко піддається впливам як позитивним, так і негативним.</li>
        <li>Розширюється коло спілкування, з’являються нові авторитети.</li>
        <li>Недоліки й суперечності в поведінці близьких і старших сприймаються гостро.</li>
        <li>У батьках підлітки хочуть бачити друзів і порадників, а не диктаторів.</li>
      </ul>

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


      <h5>Рекомендації для батьків щодо стримування агресивної поведінки підлітків</h5>
      <ul>
        <li>Проявляйте до підлітка більше уваги, любові та ласки.</li>
        <li>Батьки повинні стежити за своєю поведінкою в сім’ї. Кращий спосіб виховання дітей – єдність їхніх дій.</li>
        <li>Не застосовуйте фізичні покарання.</li>
        <li>Допомагайте підлітку знаходити друзів. Заохочувати розвиток позитивних аспектів агресивності, а саме завзятості, активності, ініціативності, перешкоджати її негативним рисам, зокрема ворожості, скутості.</li>
        <li>Пояснюйте підлітку наслідки агресивної поведінки.</li>
        <li>Враховуйте у вихованні та навчанні особистісні властивості підлітка.</li>
        <li>Надавайте підлітку можливість задовольнити потреби в самовираженні й самоствердженні.</li>
        <li>Обмежуйте перегляд відеофільмів та комп’ютерних ігор зі сценами насильства.</li>
        <li>Спрямовуйте енергію підлітка у правильне русло. Залучайте до занять у спортивних секціях; заохочуйте до участі в культурних заходах.</li>
      </ul>
        </div>
    
    </React.Fragment>
  );
};

export default Recommendations;
