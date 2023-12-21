import React from "react";
import styled from "styled-components";

const DetailsCard = ({ student }) => {
  return (
    <Main>
      <div className="detailsCard">
        <div className="profile">
          <img
            style={{ width: "5rem", borderRadius: "50%" }}
            src={student.avatar}
            alt=""
          />
        </div>
        <div className="details">
          <div className="middle">
            <p>{student.name}</p>
            <p>{student.roll}</p>
            <p>Class {student.grade}</p>
            <h3>Score {student.score}</h3>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default DetailsCard;

const Main = styled.div`
  .mainContent {
    display: flex;
    flex-wrap: wrap;
  }
  .heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .downloadBtn {
      border: none;
      background-color: white;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--darkBlue);
    }
  }

  .detailsCard {
    background-color: var(--lightBlue);
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    align-items: center;
    border-radius: 1rem;
    font-weight: 500;
    padding-right: 1rem;
    justify-content: space-between;
    text-align: left;
    color: var(--darkBlue);

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    .profile {
      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .details {
      .middle {
        p {
          font-size: 0.8rem;
        }

        h3 {
          font-size: 1rem;
        }
      }
    }
  }

  .MarksCard {
    background-color: var(--lightBlue);
    border-radius: 1rem;
    padding: 1rem;
    color: var(--darkBlue);
    /* width: 100%; */

    .row {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      align-items: center;
      border: 1px solid var(--darkBlue);
      border-radius: 1rem;
      margin-bottom: 0.5rem;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .title,
      .value {
        padding: 0.5rem;
      }
    }
  }
`;
