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
      <NavLink
        onClick={() => handleRoll(roll)}
        to={`/courses/${classNum}/${secNum}/${roll}`}
        className="effects"
      >
        <div key={name} className="card">
          <div className="avatar">
            <img
              style={{ width: "3rem", borderRadius: "50%" }}
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
    margin: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &:hover {
      background-color: #c0b8ea;
    }
    align-items: center;
    border-radius: 1rem;
  }
`;
