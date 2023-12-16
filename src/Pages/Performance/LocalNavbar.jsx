import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import styled from "styled-components";
import { NavLink, Navigate } from "react-router-dom";

const LocalNavbar = ({ classNum, selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
    localStorage.setItem("selectedTab", tabName);
  };
  function GoBack() {
    return (
      <NavLink to={`../../courses/${classNum}`}>
        <div className="backBtn">
          <IoArrowBackCircle className="backBtnIcon" />
        </div>
      </NavLink>
    );
  }

  function GoHome() {
    return (
      <NavLink to="/courses">
        <div className="homeBtn">
          <BiSolidHome className="homeBtnIcon" />
        </div>
      </NavLink>
    );
  }

  return (
    <Section>
      {GoBack()}
      <div className="mainNav">
        <div className="performance ">
          <a
            href=""
            className={`${selectedTab === "Performance" && "active"}`}
            onClick={() => {
              handleOnClick("Performance");
            }}
          >
            Performance
          </a>
        </div>
        <div className="attendance">
          <a
            href=""
            className={`${selectedTab === "Attendance" && "active"}`}
            onClick={() => {
              handleOnClick("Attendance");
            }}
          >
            Attendance
          </a>
        </div>
        <div className="contest">
          <a
            href=""
            className={`${selectedTab === "Contest" && "active"}`}
            onClick={() => {
              handleOnClick("Contest");
            }}
          >
            Contest
          </a>
        </div>
      </div>
      {GoHome()}
    </Section>
  );
};

export default LocalNavbar;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .backBtnIcon {
    font-size: 3rem;
    color: var(--darkBlue);
    transition: 0.5s;
    &:hover {
      color: var(--lightBlue);
    }
  }

  .homeBtnIcon {
    font-size: 2rem;
    color: var(--darkBlue);
  }

  .mainNav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    a {
      padding: 1rem;
      border-radius: 1rem;
      text-decoration: none;
      color: var(--darkBlue);
    }
    .performance {
      .active {
        background-color: var(--darkBlue);
        color: var(--textColor);
      }
    }
    .attendance {
      .active {
        color: var(--textColor);
        background-color: var(--darkBlue);
      }
    }
    .contest {
      .active {
        color: var(--textColor);
        background-color: var(--darkBlue);
      }
    }
  }
`;
