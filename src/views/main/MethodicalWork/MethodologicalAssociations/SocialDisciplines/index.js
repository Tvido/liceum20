import React from 'react';
import { Card, Table } from 'react-bootstrap';

const SocialDisciplines = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Методичного об’єднання вчителів історії, права, християнської етики</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>
                <b>Кукурудз Наталія Олексіївна</b> – керівник методичного об’єднання вчителів історії, права, християнської етики
              </td>
            </tr>

            <tr>
              <td>
                <b>Філіпович Лілія Іванівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Гос Йосип Михайлович</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Симанчук Оксана Ярославівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Вінтонюк Іванна Ярославівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Попович Вікторія Михайлівна</b>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
        </div>

    </React.Fragment>
  );
};

export default SocialDisciplines;
