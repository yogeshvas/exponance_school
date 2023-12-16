import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StudentVCard = ({
  name,
  percentage,
  roll,
  grade,
  avatar,

  classNum,
  secNum,

  handleRoll,
}) => {
  return (
    <Card>
      <NavLink
        onClick={() => handleRoll(roll)}
        to={`/courses/${classNum}/${secNum}/${roll}`} // replace classNum, secNum with your actual values
        className="effect"
      >
        <div className="effects">
          <div className="top">
            <img
              style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
              src={avatar}
              alt=""
            />
          </div>
          <div className="middle">
            <div className="percentage">
              <h1>{percentage}%</h1>
            </div>
            <div className="name">{name}</div>
          </div>
          <div className="bottom">
            <p>{roll}</p>
            <p>Class {grade}</p>
          </div>
        </div>
      </NavLink>
    </Card>
  );
};

export default StudentVCard;

const Card = styled.div`
  .effect {
    text-decoration: none;
    color: var(--darkBlue);
  }
  .effects {
    height: 22rem;
    width: 17rem;
    background-color: var(--lightBlue);
    border-radius: 1rem;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #c0b8ea;
    }

    .middle {
      .percentage {
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
    }
  }
`;
