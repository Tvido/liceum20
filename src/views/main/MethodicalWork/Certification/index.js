import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Certification = () => {
  return (
    <React.Fragment>
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

      <div class="section__grid">
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/12QAq5OrqpqCgizAvBsoLP-2vlFzZrtcs/view">
          <div class="section__box">
            <div class="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>ПЕРСПЕКТИВНИЙ ПЛАН-ГРАФІК АТЕСТАЦІЇ ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ НА 2019-2024 РОКИ</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ic_QCU8fOoelhdvsOwOke1JXLzji3RrE/view">
          <div class="section__box">
            <div class="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Кількісний та якісний склад педагогічного колективу Ліцею №20</p>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Certification;
