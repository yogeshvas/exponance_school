import React from "react";
import styled from "styled-components";

const ProfileTabBar = ({ localTab, setLocalTab }) => {
  const tabSelect = (tabName) => {
    setLocalTab(tabName);
    localStorage.setItem("localTab", tabName);
  };
  return (
    <Main>
      <div className="tabs">
        <a
          href=""
          className={`${localTab === "Academic" ? "active" : ""}`}
          onClick={() => tabSelect("Academic")}
        >
          <div className="tab "> Academic </div>
        </a>

        <a
          href=""
          className={`${localTab === "Personal" ? "active" : ""}`}
          onClick={() => tabSelect("Personal")}
        >
          <div className="tab"> Personal </div>
        </a>

        <a
          href=""
          className={`${localTab === "Attendance" ? "active" : ""}`}
          onClick={() => tabSelect("Attendance")}
        >
          <div className="tab"> Attendace </div>
        </a>
      </div>
    </Main>
  );
};

export default ProfileTabBar;

const Main = styled.div`
  .tabs {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: var(--darkBlue);
      border-radius: 1rem;
      background-color: var(--lightBlue);
      transition: 0.5s;
      &:hover {
        background-color: #c0b8ea;
      }
    }

    .active {
      background-color: var(--darkBlue);
      color: var(--textColor);
      &:hover {
        background-color: var(--darkBlue);
      }
    }
  }
`;
