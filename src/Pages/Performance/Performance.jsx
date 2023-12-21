import React, { useState } from "react";
import styled from "styled-components";
import LocalNavbar from "./LocalNavbar";
import PerformancePageData from "./PerformancePageData";
import Attendance from "../Attendance/Attendance";
import Contest from "../Contest.jsx/Contest";
import TotalStudents from "./Tabs/TotalStudents/TotalStudents";
import AverageMarks from "./Tabs/Average Marks/AverageMarks";

const Performance = ({
  classNum,
  secNum,
  rollNum,
  setRollNum,
  handleRoll,
  selectedTab,
  setSelectedTab,
}) => {
  const studentData = [
    {
      percentageData: "70",
      name: "Yogesh",
      roll: "221030323",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "85",
      name: "Sara",
      roll: "221030324",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "60",
      name: "Alex",
      roll: "221030325",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "78",
      name: "Ella",
      roll: "221030326",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "92",
      name: "Ryan",
      roll: "221030327",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "75",
      name: "Sophia",
      roll: "221030328",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "8",
      name: "Ethan",
      roll: "221030329",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "68",
      name: "Isabella",
      roll: "221030330",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "69",
      name: "Kartik",
      roll: "221030331",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "88",
      name: "Olivia",
      roll: "221030332",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "79",
      name: "Mia",
      roll: "221030333",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "95",
      name: "Jackson",
      roll: "221030334",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "83",
      name: "Ava",
      roll: "221030335",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "77",
      name: "Lucas",
      roll: "221030336",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
    {
      percentageData: "62",
      name: "Emma",
      roll: "221030337",
      grade: "9",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
    },
  ];

  return (
    <Main>
      <LocalNavbar
        classNum={classNum}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "Performance" ? (
        <PerformancePageData
          studentData={studentData}
          classNum={classNum}
          secNum={secNum}
          rollNum={rollNum}
          setRollNum={setRollNum}
          handleRoll={handleRoll}
        />
      ) : selectedTab === "Attendance" ? (
        <Attendance
          studentData={studentData}
          secNum={secNum}
          classNum={classNum}
        />
      ) : selectedTab === "Contest" ? (
        <Contest />
      ) : selectedTab === "Total Students" ? (
        <TotalStudents
          studentData={studentData}
          classNum={classNum}
          secNum={secNum}
          handleRoll={handleRoll}
        />
      ) : selectedTab === "Average Marks" ? (
        <AverageMarks />
      ) : (
        <PerformancePageData
          studentData={studentData}
          classNum={classNum}
          secNum={secNum}
          rollNum={rollNum}
          setRollNum={setRollNum}
          handleRoll={handleRoll}
        />
      )}
    </Main>
  );
};

export default Performance;

const Main = styled.div``;
