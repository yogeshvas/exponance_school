import React, { useEffect, useState } from "react";

import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const IndividualProfilePage = ({ rollNum, secNum, classNum }) => {
  const [student, setStudent] = useState({
    percentageData: "70",
    name: "Yogesh",
    roll: "221030323",
    grade: "9",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
  });
  return (
    <Main>
      <div className="back">
        <NavLink
          className="iconDecoration"
          to={`/courses/${classNum}/${secNum}`}
        >
          <IoArrowBackCircle className="icon" />
        </NavLink>
      </div>
    </Main>
  );
};

export default IndividualProfilePage;

const Main = styled.div`
  .iconDecoration {
    text-decoration: none;
    color: var(--darkBlue);

    .icon {
      transition: 0.5s;
      &:hover {
        font-size: 3rem;
        border-radius: 50%;
        color: #c0b8ea;
      }
    }
  }
  .back {
    font-size: 3rem;
    color: var(--darkBlue);
  }
`;
