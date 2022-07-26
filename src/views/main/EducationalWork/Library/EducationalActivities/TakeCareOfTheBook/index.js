import React from 'react';

const TakeCareOfTheBook = () => {
  return (
    <React.Fragment>
      <div className="section__grid">
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/16DzBMF89g5HyPQm0yCn2b8oqRLs8v8rs/edit">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Виховна година</p>
            </div>
          </div>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/presentation/d/1Y8OuhELjPci369Ah7ZahiX0a574uSTCp/edit#slide=id.p1"
        >
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Пам’ятники літературним героям</p>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default TakeCareOfTheBook;
