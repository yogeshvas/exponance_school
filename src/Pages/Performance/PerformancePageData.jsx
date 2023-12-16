import React, { useState } from "react";
import SearchButton from "../../Components/SearchButton";
import styled from "styled-components";
import StudentVCard from "../../Components/Card/StudentVCard";
import LocalTabBar from "./Tabs/LocalTabBar";

const PerformancePageData = ({
  studentData,
  selectedTab,
  setSelectedTab,
  classNum,
  secNum,
  rollNum,
  setRollNum,
  handleRoll,
}) => {
  // Filter and sort students with percentage greater than 90
  const highScoringStudents = studentData
    .filter((item) => parseFloat(item.percentageData) > 90)
    .sort(
      (a, b) => parseFloat(b.percentageData) - parseFloat(a.percentageData)
    );

  return (
    <Main>
      <div className="search"></div>
      <div className="heading">
        <h1>Batch </h1>
      </div>
      <LocalTabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="heading">
        <h1>High Scoring Students</h1>
      </div>
      <div className="card">
        {highScoringStudents.map((item) => (
          <div className="Content" key={item.roll}>
            <StudentVCard
              name={item.name}
              percentage={item.percentageData}
              roll={item.roll}
              grade={item.grade}
              avatar={item.avatar}
              rollNum={rollNum}
              classNum={classNum}
              secNum={secNum}
              setRollNum={setRollNum}
              handleRoll={handleRoll}
            />
          </div>
        ))}
      </div>
    </Main>
  );
};

export default PerformancePageData;

const Main = styled.div`
  h1,
  h2 {
    color: var(--darkBlue);
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    // Add additional styling if needed
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    .card {
      justify-content: center;
    }
  }
`;
