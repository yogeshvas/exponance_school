// StudentHCard.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StudentHCard = ({
  name,
  avatar,
  roll,
  percentage,
  secNum,
  classNum,
  handleRoll,
}) => {
  return (
    <Main>
      <div onClick={() => handleRoll(roll)}>
        <NavLink
          to={`/courses/${classNum}/${secNum}/${roll}`}
          className="effects"
        >
          <div key={name} className="card">
            <div className="avatar">
              <img
                style={{ width: "5rem", borderRadius: "50%" }}
                src={avatar}
                alt=""
              />
            </div>
            <div className="details">
              <div className="name">{name}</div>
              <div className="roll">{roll}</div>
            </div>
            <div className="percentage">
              <h3>{percentage}%</h3>
            </div>
          </div>
        </NavLink>
      </div>
    </Main>
  );
};

export default StudentHCard;

const Main = styled.div`
  .effects {
    text-decoration: none;
  }

  .card {
    height: auto;
    background-color: var(--lightBlue);
    color: var(--darkBlue);
    margin: 1rem;
    display: grid;
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    &:hover {
      background-color: #c0b8ea;
    }
    align-items: center;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    .card {
      grid-template-columns: 1fr 1fr; // Change to 1 column for mobile devices
    }
  }
`;
