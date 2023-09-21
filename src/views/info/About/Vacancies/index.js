import React from 'react';

const Vacancies = () => {
  return (
    <React.Fragment>
      <div className="article__wrapper">
      <p>Вакансія учителя інформатики (декретне місце).</p>
      <br></br>
      
      <div className="section__grid">

        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1cP-z_xop5g1z-QDTRMTo15nFajh8DeSq/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Наказ про конкурс на посади педагогічних працівників</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1c519DO5mM6OVVBWRwzO8QuOO_DrUHyih/view">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Положення про конкурс на посади педагогічних працівників</p>
            </div>
          </div>
        </a>
      </div>
        </div>

    </React.Fragment>
  );
};

export default Vacancies;