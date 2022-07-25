import React from 'react';
import { Card, Table } from 'react-bootstrap';

const ElementarySchool = () => {
  return (
    <React.Fragment>
      <h5>Методичне об’єднання вчителів математики, фізики, інформатики</h5>

      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <td>
                <b>Білоока Наталія Ярославівна</b> – керівник методичного об’єднання вчителів математики, фізики, інформатики
              </td>
            </tr>

            <tr>
              <td>
                <b>Юрович Марія Леонідівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Перепічка Ярослава Євгенівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Безрука Вікторія Євгенівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Рачій Галина Олексіївна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Дудій Ірина Василівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>
                  <a target="_blank" rel="noreferrer" href="https://blohinformatuka.blogspot.com/2019/01/blog-post.html">
                    Дудчак Леся Ігорівна
                  </a>
                </b>
              </td>
            </tr>

            <tr>
              <td>
                <b>
                  <a target="_blank" rel="noreferrer" href="https://krupiakhrystyna.blogspot.com/">
                    Круп’як Христина Володимирівна
                  </a>
                </b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Буртняк Руслана Михайлівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Мрічко Марія Іванівна</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Савків Іван Ігорович</b>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </React.Fragment>
  );
};

export default ElementarySchool;
