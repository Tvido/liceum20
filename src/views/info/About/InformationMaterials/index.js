import React from 'react';
import { Col, Card } from 'react-bootstrap';
import scheme from './scheme.png'
import security_rules from './security_rules.jpg'
import gig_rules from './gig_rules.jpg'

const InformationMaterials = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Схема руху</Card.Title>
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
          <h5><b>10 простих правил для безпечного користування мережею інтернет</b> дозволить захистити себе від основних загроз, що супроводжують роботу онлайн.</h5>

          <ul>
            <li>При встановленні будь-якого програмного забезпечення на комп’ютер читайте політику конфіденційності. Це саме стосується і налаштувань.</li>
            <li>Гарний пароль складається не менше ніж з 15 символів. Серед них є цифри, букви (великі та малі) та символи. Для 10-значних паролей вже давно є готові райдужні таблиці </li>
            <li>
              Змінювати такий пароль варто кожні 3 місяці. Це саме той час, який орієнтовно потрібен для підбору ключа для зламу.
            </li>
            <li>Варто мати різні паролі для різних екаунтів. Якщо ви використовуєте один і той самий пароль –  зламати доступ до будь-якого вашого профілю буде набагато простіше.</li>
            <li>Варто встановити двофакторну верифікацію для пошти на gmail/yahoo, фейсбуку та твіттера. Це ускладнює шлях зламу вашого екаунту для шахраїв.</li>
            <li>Телефон – це у більшості випадків уже не просто засіб, за допомогою якого можна дзвонити. Те, що у вас у руках – це маленький комп’ютер. Для нього так само потрібно встановлювати антивірусні програми. Це ж стосується і планшетів.</li>
            <li>Ніколи не відкривайте незнайомі посилання та підозрілі файли, які приходять в електронних повідомленнях, навіть від перевірених людей.</li>
            <li>Все, що існує в cloud (хмарі) чи будь-якому іншому віртуальному сховищі – вже є в Інтернеті. Відповідно, до цих даних можуть отримати доступ.</li>
            <li>Якщо ви користувач макбуку та впевнені, що на ньому немає вірусів – ви помиляєтесь.</li>
            <li>Особисто ваша електронна скринька чи інший екаунт можуть і не бути метою зламу. Однак, ви можете спілкуватись з людьми, яких хочуть “зламати” через ваш мобільний телефон чи електронну пошту, тож пильність не буде зайвою.</li>
          </ul>

        </article>
      </div>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">16.06.2022</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src={security_rules} alt="" className="cardHero" />
                </div>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </div>


      <div className="article">
        <article>
          <h5><b>ПРАВА ДИТИНИ</b></h5>

          <ul>
            <li>Дитиною є «кожна людська істота до досягнення 18-річного віку», якщо за законом, застосовуваним до даної особи, вона не досягає повноліття раніше.</li>
            <li>Всі права, передбачені цією Конвенцією, за кожною дитиною забезпечуються без будь-якої дискримінації.</li>
            <li>В усіх діях щодо дітей першочергова увага приділяється якнайкращому забезпеченню інтересів дитини.</li>
            <li>Держава поважає відповідальність, права і обов’язки батьків чи членів розширеної сім’ї.</li>
            <li>Кожна дитина має невід’ємне право на життя.</li>
            <li>Дитина має право на ім’я і набуття громадянства, а також право знати своїх батьків і право на їх піклування.</li>
            <li>Дитина має право на збереження своєї індивідуальності і громадянства.</li>
            <li>Дитина має право не розлучатися з батьками, за винятком випадків, коли компетентні органи визначають відповідно до застосовуваного закону і процедур, що таке розлучення необхідне в якнайкращих інтересах дитини.</li>
            <li>Дитина має право вільно висловлювати власні погляди з усіх питань, що торкаються дитини, причому поглядам дитини приділяється належна увага.</li>
            <li>Дитина має право вільно висловлювати свої думки; це право включає свободу шукати, одержувати і передавати інформацію та ідеї будь-якого роду.</li>
            <li>Повинно поважатися право дитини на свободу думки, совісті та релігії.</li>
            <li>Дитина має право на свободу асоціацій і мирних зборів.</li>
            <li>Жодна дитина не може бути об’єктом свавільного або незаконного втручання в здійснення її права на особисте і сімейне життя, недоторканність житла, таємницю кореспонденції або незаконного посягання на її честь і гідність.</li>
            <li>Держава забезпечує право дитини на доступ до інформації із національних та міжнародних джерел.</li>
            <li>Батьки несуть основну відповідальність за виховання і розвиток дитини.</li>
            <li>Держава вживає всіх необхідних законодавчих, адміністративних, соціальних і просвітніх заходів з метою захисту дитини від усіх форм фізичного та психологічного насильства, образи чи зловживань, відсутності піклування чи недбалого і брутального поводження та експлуатації.</li>
            <li>Дитина має право на користування найбільш досконалими послугами системи охорони здоров’я з приділенням першочергової уваги розвитку первинної медико-санітарної допомоги.</li>
            <li>Дитина має право користуватися благами соціального забезпечення.</li>
            <li>Дитина має право на рівень життя, необхідний для фізичного, розумового, духовного, морального і соціального розвитку.</li>
            <li>Дитина має право на освіту. Держава вводить обов’язкову, доступну і безплатну початкову освіту, сприяє розвиткові різних форм середньої освіти, забезпечує її доступність для всіх дітей. Шкільна дисципліна забезпечується методами, що ґрунтуються на повазі до людської гідності дитини. Освіта має бути спрямована на: розвиток особи, талантів, здібностей дитини, на виховання поваги до прав людини та основних свобод, на підготовку дитини до свідомого життя у вільному суспільстві в дусі миру, дружби, розуміння, толерантності і рівноправності, на виховання поваги до навколишньої природи.</li>
            <li>Дитина має право користуватися своєю культурою.</li>
            <li>Дитина має право на відпочинок і дозвілля, право брати участь в іграх та вільно брати участь у культурному житті та займатися мистецтвом.</li>
            <li>Дитина має право на захист від економічної експлуатації та від виконання будь-якої роботи, яка може завдати шкоди її життю та розвитку.</li>
            <li>Дитина повинна бути захищена від незаконного зловживання наркотичними засобами.</li>
            <li>Держава зобов’язана захищати дитину від усіх форм сексуальної експлуатації та сексуальних розбещень; від використання дитини з метою експлуатації у проституції або в іншій незаконній сексуальній практиці, у порнографії та порнографічних матеріалах.</li>
            <li>Держава зобов’язана вживати всіх можливих заходів з метою забезпечення захисту дітей, яких торкається збройний конфлікт, та догляду за ними.</li>
            <li>Кожній дитині, яку звинувачують у порушенні законодавства або у злочині, гарантується презумпція невинності, поки її вина не буде доведена, одержання правової допомоги при підготовці та здійсненні свого захисту, свобода від примусу щодо давання свідчень чи визнання вини, повна повага її особистого життя, а також поводження з урахуванням її віку, обставин і добробуту. Ні смертна кара, ні довічне тюремне ув’язнення, які не передбачають можливості звільнення, не призначаються за злочини, вчинені особами, молодшими 18 років.</li>
          </ul>
        </article>
      </div>

      <div className="cardWrapper">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5"><b>ВЕЛИКІ ПРАВА</b> маленької дитини</Card.Title>
            </Card.Header>
            <Card.Body>
              <blockquote>
                <div>
                  <img src={gig_rules} alt="" className="cardHero" />
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

export default InformationMaterials;