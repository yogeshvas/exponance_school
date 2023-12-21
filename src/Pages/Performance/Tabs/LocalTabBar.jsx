import React from "react";
import styled from "styled-components";
import tStudent from "../../../assets/icons8-student-100.png";
import avgMarks from "../../../assets/icons8-graph-100.png";
import activeCourse from "../../../assets/icons8-bookmark-100.png";
import fails from "../../../assets/icons8-score-100.png";

const LocalTabBar = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    localStorage.setItem("selectedTab", tabName);
  };
  return (
    <Main>
      <div className="tabs">
        <div className="wrap">
          <a
            href=""
            className={`items ${selectedTab === "Total Students" && "active"}`}
            onClick={() => {
              handleOnClick("Total Students");
            }}
          >
            <img style={{ width: "2rem" }} src={tStudent} alt="" /> Total
            Students
          </a>
        </div>
        <div className="wrap">
          <a
            href=""
            className={`items ${selectedTab === "Average Marks" && "active"}`}
            onClick={() => {
              handleOnClick("Average Marks");
            }}
          >
            <img style={{ width: "2rem" }} src={avgMarks} alt="" /> Average
            Marks
          </a>
        </div>
        <div className="wrap">
          <a
            href=""
            className={`items ${selectedTab === "Active Courses" && "active"}`}
            onClick={() => {
              handleOnClick("Active Courses");
            }}
          >
            <img style={{ width: "2rem" }} src={activeCourse} alt="" /> Active
            Courses
          </a>
        </div>
        <div className="wrap">
          <a
            href=""
            className={`items ${selectedTab === "Total Fails" && "active"}`}
            onClick={() => {
              handleOnClick("Total Fails");
            }}
          >
            <img style={{ width: "2rem" }} src={fails} alt="" /> Total Students
          </a>
        </div>
      </div>
    </Main>
  );
};

export default LocalTabBar;

const Main = styled.div`
  .tabs {
    align-items: center;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    a {
      background-color: var(--lightBlue);
      color: var(--darkBlue);
      text-decoration: none;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 1.5rem 0 0;
      border-radius: 1rem;
      transition: 0.5s;
      &:hover {
        background-color: #c0b8ea;
      }
      .wrap {
      }
    }
  }
`;
