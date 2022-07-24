import React from 'react';
import { Row, Col, Tabs, Tab, Nav,  Card, Table } from 'react-bootstrap';

const AnnualPlan = () => {
  return (
  <React.Fragment>

    <div class="terms__link">
      <a target="_blank" href="https://drive.google.com/file/d/10XcXvRwy-Y2GX1fYOr_r4PH2AUEt7RjD/view" rel="noreferrer">
        Читати увесь документ        
      </a>
    </div>

    <Card.Body>
      <Table responsive hover>
          <tbody>
              <tr>
                <td>Загальні положення</td>
                <td>3</td>
              </tr>

              <tr>
                <td>Аналіз роботи ЗЗСО за минулий рік</td>
                <td>3</td>
              </tr>

              <tr>
                <td>
                  Проблеми й виклики, над якими працюватиме ЗЗСО у цьому
                  навчальному році
                </td>
                <td>9</td>
              </tr>

              <tr>
                <td>Освітній процес</td>
                <td>10</td>
              </tr>

              <tr>
                <td>Організація освітнього процесу в ЗЗСО</td>
                <td>10</td>
              </tr>

              <tr>
                <td>Виховний процес</td>
                <td>16</td>
              </tr>

              <tr>
                <td>Система оцінювання навчальних досягнень учнів</td>
                <td>26</td>
              </tr>

              <tr>
                <td>Педагогічна діяльність</td>
                <td>31</td>
              </tr>

              <tr>
                <td>Управлінська діяльність</td>
                <td>34</td>
              </tr>

              <tr>
                <td>Упровадження політики академічної доброчесності</td>
                <td>37</td>
              </tr>

              <tr>
                <td>Діяльність педагогічної ради</td>
                <td>43</td>
              </tr>

              <tr>
                <td>Внутрішня система забезпечення якості освіти</td>
                <td>45</td>
              </tr>

              <tr>
                <td>Фінансово-господарська діяльність</td>
                <td>49</td>
              </tr>

              <tr>
                <td>Міжнародна співпраця</td>
                <td>51</td>
              </tr>

              <tr>
                <td>Література</td>
                <td>52</td>
              </tr>
            </tbody>      </Table>
    </Card.Body>
  </React.Fragment>
  );
};

export default AnnualPlan;
