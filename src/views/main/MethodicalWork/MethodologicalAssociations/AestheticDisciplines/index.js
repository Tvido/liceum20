import React from 'react';
import { Card, Table } from 'react-bootstrap';

const AestheticDisciplines = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Методичне об’єднання вчителів естетичних дисциплін, трудового навчання</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>
                <b>Танчак Галина Ярославівна</b> – керівник методичного об’єднання естетичних дисциплін, трудового навчання
              </td>
            </tr>

            <tr>
              <td>
                <b>Смоляк Іван Васильович</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Протас Любов Олександрівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Тимків Христина Петрівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Костик Ілона Володимирівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Микитюк Марія Іванівна</b>
              </td>
            </tr>

 
            <tr>
              <td>
                <b>Прокопів Ганна Іванівна</b>
              </td>
            </tr>

          </tbody>
        </Table>
      </Card.Body>
        </div>

    </React.Fragment>
  );
};

export default AestheticDisciplines;
