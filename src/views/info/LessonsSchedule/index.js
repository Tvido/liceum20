import React from 'react';
import { Tabs, Tab, Card, Table } from 'react-bootstrap';

const LessonsSchedule = () => {
  return <React.Fragment>
        <div className="article__wrapper">

          <h5 className="mt-4">Режими групи подовженого дня та розклад дзвінків</h5>
          <hr />
          <Tabs variant="pills" defaultActiveKey="1stclassName" className="mb-3">
            <Tab eventKey="1stclassName" title="1 класу">
              <Card.Body>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <th scope="row">11:15 - 11:35</th>
                      <th>
                        Прийом дітей на свіжому повітрі (дезінфекція кабінетів)
                      </th>
                    </tr>

                    <tr>
                      <th scope="row">11:35 - 13:10</th>
                      <th>Ранкова зустріч. Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">13:15 - 13:45</th>
                      <th>Обід</th>
                    </tr>

                    <tr>
                      <th scope="row">13:45 - 14:45</th>
                      <th>Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">14:45 - 15:25</th>
                      <th>Відпочинок</th>
                    </tr>

                    <tr>
                      <th scope="row">15:20 - 16:20</th>
                      <th>Заходи емоційно-розвивального характеру</th>
                    </tr>

                    <tr>
                      <th scope="row">16:20 - 17:00</th>
                      <th>Спортивно-оздоровча година</th>
                    </tr>

                    <tr>
                      <th scope="row">17:00 - 17:15</th>
                      <th>Підсумок дня. Повернення дітей додому</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>

              <Card.Body>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <th scope="row">12:00 - 12:30</th>
                      <th>
                        Прийом дітей на свіжому повітрі (дезінфекція кабінетів)
                      </th>
                    </tr>

                    <tr>
                      <th scope="row">12:30 - 13:10</th>
                      <th>Ранкова зустріч. Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">13:15 - 13:45</th>
                      <th>Обід</th>
                    </tr>

                    <tr>
                      <th scope="row">13:45 - 15:25</th>
                      <th>Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">15:25 - 16:00</th>
                      <th>Відпочинок</th>
                    </tr>

                    <tr>
                      <th scope="row">16:00 - 16:40</th>
                      <th>Заходи емоційно-розвивального характеру</th>
                    </tr>

                    <tr>
                      <th scope="row">16:40 - 17:40</th>
                      <th>Спортивно-оздоровча година</th>
                    </tr>

                    <tr>
                      <th scope="row">17:40 - 18:00</th>
                      <th>Підсумок дня. Повернення дітей додому</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Tab>

            <Tab eventKey="2dclassName" title="2 класу">
              <Card.Body>
                <Table responsive hover>
                <tbody>
                  <tr>
                    <th scope="row">12:20 - 12:50</th>
                    <th>
                      Прийом дітей на свіжому повітрі (дезінфекція кабінетів)
                    </th>
                  </tr>

                  <tr>
                    <th scope="row">12:50 - 13:10</th>
                    <th>Ранкова зустріч. Прогулянка</th>
                  </tr>

                  <tr>
                    <th scope="row">13:15 - 13:45</th>
                    <th>Обід</th>
                  </tr>

                  <tr>
                    <th scope="row">13:45 - 15:20</th>
                    <th>Прогулянка</th>
                  </tr>

                  <tr>
                    <th scope="row">15:20 - 16:20</th>
                    <th>Самопідготовка</th>
                  </tr>

                  <tr>
                    <th scope="row">16:20 - 17:00</th>
                    <th>Заходи емоційно-розвивального характеру</th>
                  </tr>

                  <tr>
                    <th scope="row">17:00 - 18:00</th>
                    <th>Спортивно-оздоровча година</th>
                  </tr>

                  <tr>
                    <th scope="row">18:00 - 18:20</th>
                    <th>Підсумок дня. Повернення дітей додому</th>
                  </tr>
                </tbody>
                </Table>
              </Card.Body>

              <Card.Body>
                <Table responsive hover>
                <tbody>
                  <tr>
                    <th scope="row">11:30 - 12:00</th>
                    <th>
                      Прийом дітей на свіжому повітрі (дезінфекція кабінетів)
                    </th>
                  </tr>

                  <tr>
                    <th scope="row">12:00 - 13:10</th>
                    <th>Ранкова зустріч. Прогулянка</th>
                  </tr>

                  <tr>
                    <th scope="row">13:15 - 13:45</th>
                    <th>Обід</th>
                  </tr>

                  <tr>
                    <th scope="row">13:45 - 14:45</th>
                    <th>Прогулянка</th>
                  </tr>

                  <tr>
                    <th scope="row">14:45 - 15:45</th>
                    <th>Самопідготовка</th>
                  </tr>

                  <tr>
                    <th scope="row">15:45 - 16:15</th>
                    <th>Заходи емоційно-розвивального характеру</th>
                  </tr>

                  <tr>
                    <th scope="row">16:15 - 17:15</th>
                    <th>Спортивно-оздоровча година</th>
                  </tr>

                  <tr>
                    <th scope="row">17:15 - 17:30</th>
                    <th>Підсумок дня. Повернення дітей додому</th>
                  </tr>
                </tbody>
                </Table>
              </Card.Body>
            </Tab>
            
            <Tab eventKey="3dclassName" title="3-4 класу">
              <Card.Body>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <th scope="row">12:20 - 12:45</th>
                      <th>
                        Прийом дітей на свіжому повітрі (дезінфекція кабінетів)
                      </th>
                    </tr>

                    <tr>
                      <th scope="row">12:45 - 14:15</th>
                      <th>Ранкова зустріч. Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">14:15 - 14:45</th>
                      <th>Обід</th>
                    </tr>

                    <tr>
                      <th scope="row">14:45 - 15:15</th>
                      <th>Прогулянка</th>
                    </tr>

                    <tr>
                      <th scope="row">15:15 - 16:15</th>
                      <th>Самопідготовка</th>
                    </tr>

                    <tr>
                      <th scope="row">16:15 - 17:00</th>
                      <th>Заходи емоційно-розвивального характеру</th>
                    </tr>

                    <tr>
                      <th scope="row">17:00 - 18:00</th>
                      <th>Спортивно-оздоровча година</th>
                    </tr>

                    <tr>
                      <th scope="row">18:00 - 18:20</th>
                      <th>Підсумок дня. Повернення дітей додому</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              </Tab>
          </Tabs>

          <hr />

          <Tabs variant="pills" defaultActiveKey="schedule" className="mb-3">
            <Tab eventKey="schedule" title="Розклад дзвінків">
              {/* <div className="terms__link">
                <a target="_blank" href="https://drive.google.com/file/d/1OqgPRcXzQi5kw4XvBxreBpaN2qOlPtRl/view" rel="noreferrer">
                  Розклад I ступінь 2020-2021 (початкова школа)        
                </a>
              </div>

              <div className="terms__link">
                <a target="_blank" href="https://docs.google.com/document/d/1vxBpLmNxBfoFtIfWEzyMV0kewIRMT0sp/edit?rtpof=true&sd=true" rel="noreferrer">
                  Розклад II та III ступенів 2020-2021        
                </a>
              </div> */}

              <Card.Body>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <th>Початок занять</th>
                      <th>8:00</th>
                    </tr>

                    <tr>
                      <th>Закінчення занять</th>
                      <th>15:15</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>

              <Card.Body>
                <Table responsive hover>
                  <tbody>
                    <tr>
                      <th>Тривалість уроків у 1х класах</th>
                      <th>35 хв.</th>
                    </tr>

                    <tr>
                      <th>Тривалість уроків у 2-4х класах</th>
                      <th>40 хв.</th>
                    </tr>

                    <tr>
                      <th>Тривалість уроків у 5-11х класах</th>
                      <th>45 хв.</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>

              <Card.Body>
                <Table responsive hover>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <th>1 класи</th>
                    <th>2 - 4 класи</th>
                    <th>5 - 11 класи</th>
                    
                  </tr>

                  <tr>
                    <th scope="row">1 урок</th>
                    <th>8:30 – 9:05</th>
                    <th>8:30 – 9:10</th>
                    <th>8:30 - 9:15</th>
                  </tr>

                  <tr>
                    <th scope="row">Перерва</th>
                    <th>9:05 – 9:20 (15хв)</th>
                    <th>9:10 - 9:20 (10хв)</th>
                    <th>9:15 – 9:25 (10хв)</th>
                  </tr>

                  <tr>
                    <th scope="row">2 урок</th>
                    <th>9:20 – 9:55</th>
                    <th>9:20 – 10:00</th>
                    <th>9:25 - 10:10</th>
                  </tr>

                  <tr>
                    <th scope="row">Перерва</th>
                    <th>9:55 - 10:15 (20хв)</th>
                    <th>10:00 – 10:20 (20хв)</th>
                    <th>10:10 - 10:30 (20хв)</th>
                  </tr>

                  <tr>
                    <th scope="row">3 урок</th>
                    <th>10:15 – 10:50</th>
                    <th>10:20 – 11:00</th>
                    <th>10:30 – 11:15</th>
                  </tr>

                  <tr>
                    <th scope="row">Перерва</th>
                    <th>10:50 – 11:10 (20хв)</th>
                    <th>11:00 - 11:20 (20хв)</th>
                    <th>11:15 - 11:35 (20хв)</th>
                  </tr>

                  <tr>
                    <th scope="row">4 урок</th>
                    <th>11:10 – 11:45</th>
                    <th>11:20 – 12:00</th>
                    <th>11:35 - 12:20</th>
                  </tr>

                  <tr>
                    <th scope="row">Перерва</th>
                    <th>11:45 – 12:00 (15хв)</th>
                    <th>12:00 – 12:10 (10хв)</th>
                    <th>12:20 – 12:40 (20хв)</th>
                  </tr>

                  <tr>
                    <th scope="row">5 урок</th>
                    <th>12:00 - 12:35</th>
                    <th>12:10 – 12:50</th>
                    <th>12:40 – 13:25</th>
                  </tr>

                  <tr>
                    <th>Перерва</th>
                    <th></th>
                    <th>12:50 – 13:00 (10хв)</th>
                    <th>13:25 – 13:35 (10хв)</th>
                  </tr>

                  <tr>
                    <th>6 урок</th>
                    <th></th>
                    <th>13:00 – 13:40</th>
                    <th>13:35 - 14:20</th>
                  </tr>

                  <tr>
                    <th scope="row">Перерва</th>
                    <th></th>
                    <th></th>
                    <th>14:20 - 14:30 (10хв)</th>
                  </tr>

                  <tr>
                    <th scope="row">7 урок</th>
                    <th></th>
                    <th></th>
                    <th>14:30 - 15:15</th>
                  </tr>
                </tbody>
              
                </Table>
              </Card.Body>
              </Tab>
          </Tabs>
        </div>

  </React.Fragment>;
};

export default LessonsSchedule;