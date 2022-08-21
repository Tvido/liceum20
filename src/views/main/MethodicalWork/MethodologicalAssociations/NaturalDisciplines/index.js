import React from 'react';
import { Card, Table } from 'react-bootstrap';

const NaturalDisciplines = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Методичне об’єднання вчителів географії, біології, хімії</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>
                <b>Ванзіляк Надія Миколаївна</b> – керівник методичного об’єднання вчителів географії, біології, хімії
              </td>
            </tr>

            <tr>
              <td>
                <b>Смоляк Наталія Іванівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Рублик Любов Адамівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Голєва Віра Анатоліївна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>
                  <a target="_blank" rel="noreferrer" href="https://katrych-irina.blogspot.com/">
                    Катрич Ірина Богданівна
                  </a>
                </b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Гаріджук Світлана Василівна</b>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
        </div>

    </React.Fragment>
  );
};

export default NaturalDisciplines;
