import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Certification = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Атестація</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>Ключові дати атестаційного періоду:</td>
              <td></td>
            </tr>

            <tr>
              <td>
                <b>Створення атестаційної комісії</b>
              </td>
              <td>До 20 вересня</td>
            </tr>

            <tr>
              <td>
                <b>Складання списків і подання їх до атестаційної комісії</b>
              </td>
              <td>До 10 жовтня</td>
            </tr>

            <tr>
              <td>
                <b>Затвердження списків педагогічних працівників, які атестуються та графіку роботи атестаційної комісії</b>
              </td>
              <td>До 20 жовтня</td>
            </tr>

            <tr>
              <td>
                <b>Вивчення педагогічної діяльності педагогічних працівників</b>
              </td>
              <td>До 15 березня</td>
            </tr>

            <tr>
              <td>
                <b>Оформлення характеристик педагогічних працівників</b>
              </td>
              <td>До 1 березня</td>
            </tr>

            <tr>
              <td>
                <b>Підсумкове засідання атестаційної комісії</b>
              </td>
              <td>До 1 квітня</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>

      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1r_96sFAxoLI7CTFZ89fpLVEx7di4YJmH/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Кількісний та якісний склад педагогічного колективу Ліцею №20</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href=" https://docs.google.com/document/d/1kunql054ACUPJMBAxJJqeZl5fLGz0PSM/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Список педагогічних працівників Ліцею №20, які атестуються у 2025</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UUPFr_0nbxz7Fxm_w1XVDErDmXvmHGp7/edit?usp=sharing&ouid=104991853798134703900&rtpof=true&sd=true">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ПЕРСПЕКТИВНИЙ ПЛАН-ГРАФІК АТЕСТАЦІЇ ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ НА 2024-2029 РОКИ</p>
            </div>
          </div>
        </a>
      </div>
     
        </div>

    </React.Fragment>
  );
};

export default Certification;
