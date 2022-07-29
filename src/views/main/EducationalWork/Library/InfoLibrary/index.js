import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';


const InfoLibrary = () => {
  return (
    <React.Fragment>
      <div className="section__grid">
        <a target="_blank" href="https://docs.google.com/document/d/17XCCF-ouid27bTZ0V3ZOEAV7jXKmQ_us/edit?rtpof=true&sd=true" rel="noreferrer">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Акт інвентаризації 1-11 класи</p>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Q7vINwnVH_5Prvg9UUKmctqnZdyiQMym/edit?rtpof=true&sd=true#gid=645548984" rel="noreferrer">
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Облік підручників НВК “Школа-гімназія №3”</p>
            </div>
          </div>
        </a>

        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1VY2HOdce4zyR7QDMJvE-n1lP97EP54Ej/edit?rtpof=true&sd=true#gid=1070912854"
          rel="noreferrer"
        >
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Картотека підручників для ЗНЗ</p>
            </div>
          </div>
        </a>

        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1-28s4AKDMFPL20x8kbpRY_jM_p91gBlt/edit?rtpof=true&sd=true"
          rel="noreferrer"
        >
          <div className="section__box">
            <div className="section__content">
              <h3>Клікни, щоби читати</h3>

              <p>Облік програмової літератури для НВК “Школа-гімназія №3”</p>
            </div>
          </div>
        </a>

      </div>


    </React.Fragment>
  );
};

export default InfoLibrary;
