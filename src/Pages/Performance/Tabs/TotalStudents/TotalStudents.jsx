import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentVCard from "../../../../Components/Card/StudentVCard";
import StudentHCard from "../../../../Components/Card/StudentHCard";

const TotalStudents = ({ studentData, classNum, secNum, handleRoll }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState(studentData);
  const filters = ["90", "80", "70", "60"];

  const handleFilterButton = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter(null); // Clear filter if already selected
    } else {
      setSelectedFilter(selectedCategory);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilter, studentData]);

  const filterItems = () => {
    let tempItems = [...studentData];

    if (selectedFilter !== null) {
      let lowerBound = parseInt(selectedFilter, 10);

      tempItems = tempItems.filter((item) => item.percentageData > lowerBound);
    }

    // Sort the filtered items based on marks in descending order
    tempItems.sort((a, b) => b.percentageData - a.percentageData);

    setFilteredItems(tempItems);
  };

  const showAllStudents = () => {
    // Show all students without any filtering
    setFilteredItems([...studentData]);
    setSelectedFilter(null);
  };

  // const showLessThan70 = () => {
  //   // Show students with percentage less than 70
  //   let tempItems = studentData.filter((item) => item.percentageData < 70);
  //   // Sort the filtered items based on marks in descending order
  //   tempItems.sort((a, b) => b.percentageData - a.percentageData);
  //   setFilteredItems(tempItems);
  //   setSelectedFilter(null);
  // };

  return (
    <Main>
      <div className="heading">
        <h1>Class {classNum} Percentage</h1>
      </div>
      <div className="buttonCategories">
        <button
          className={selectedFilter === null ? "active" : ""}
          onClick={showAllStudents}
        >
          ALL
        </button>

        {filters.map((category) => (
          <button
            key={category}
            className={selectedFilter === category ? "active" : ""}
            onClick={() => handleFilterButton(category)}
          >
            {category}%
          </button>
        ))}
      </div>
      <div className="itemHeading">
        <h3>Total Students {filteredItems.length}</h3>
      </div>

      <div className="itemContainer">
        {filteredItems.map((item, index) => (
          <StudentHCard
            name={item.name}
            avatar={item.avatar}
            percentage={item.percentageData}
            roll={item.roll}
            classNum={classNum}
            secNum={secNum}
            handleRoll={handleRoll}
          />
        ))}
      </div>
    </Main>
  );
};

export default TotalStudents;

const Main = styled.div`
  .itemContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    align-items: center;
  }

  .buttonCategories {
    /* margin-bottom: 1rem; */
  }

  .buttonCategories button {
    margin-right: 0.5rem;
    padding: 1rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    background-color: var(--lightBlue);
    &:hover {
      background-color: #c0b8ea;
    }
  }

  .buttonCategories button.active {
    background-color: var(--darkBlue);
    color: white;
  }
  @media (max-width: 768px) {
    .itemContainer {
      justify-content: center;
    }
  }
`;
