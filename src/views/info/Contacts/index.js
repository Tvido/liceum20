
import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Contacts = () => {
  return <React.Fragment>
    <div className="article__wrapper">
      <Card.Body>
        <Table responsive hover>
          <tbody>
            <tr>
              <th>Ліцей №20 Івано-Франківської міської ради</th>
            </tr>

            <tr>
              <th>Поштова адреса: м. Івано-Франківськ, вул. Гоголя 10, 76000</th>
            </tr>

            <tr>
              <th>Телефон +38 (0342) 56-05-73</th>
            </tr>
            
           
          </tbody>
        </Table>
      </Card.Body>

          <div className="mapbox" data-mapbox>
            <figure>
              <iframe
                title='location'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.0359277312073!2d24.73786831512756!3d48.93375750335199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c10636e696cf%3A0x39460127d0bbe2ea!2sLitsey%2020!5e0!3m2!1sru!2sua!4v1657727563544!5m2!1sru!2sua"
                width="600"
                height="450"
                allowFullScreen="1"
                loading="lazy"
              ></iframe>
            </figure>
          </div>
        </div>
  </React.Fragment>;
};

export default Contacts;

