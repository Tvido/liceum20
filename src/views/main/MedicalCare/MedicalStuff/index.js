import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';




const MedicalStuff = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <h5>Медичний персонал</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>
                <b>Ботвин Вітлана Львівна</b> – лікар
              </td>
            </tr>

            <tr>
              <td>
                <b>Дирбавка Ольга Тарасівна</b> - медична сестра
              </td>
            </tr>



          </tbody>
        </Table>
      </Card.Body>
        </div>

    </React.Fragment>
  );
};

export default MedicalStuff;
