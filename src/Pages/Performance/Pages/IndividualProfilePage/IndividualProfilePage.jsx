import React, { useEffect, useState } from "react";

import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import ProfileTabBar from "./ProfileTabBar";
import AcademicTab from "./AcademicTab/AcademicTab";
import PersonalInfo from "./AcademicTab/PersonalInfo";

import AttendanceTab from "./AcademicTab/AttendanceTab";

const IndividualProfilePage = ({ rollNum, secNum, classNum }) => {
  const [student, setStudent] = useState({
    name: "Yogesh",
    roll: "221030323",
    grade: "9",
    score: "70%",
    descipilinaryGrade: "A+",
    overAllGrade: "B+",
    dob: "10-04-2003",
    fatherName: "Dinesh Raj",
    year: "2019",
    address: "Flat -889, Block-55, Rajeev Colony Sec-ii New Delhi",
    city: "Sundernagar",
    state: "Himachal Pradesh",
    pincode: "17123",
    mobile: "94187656502",
    email: "something@gmail.com",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais",
  });

  const [localTab, setLocalTab] = useState(() => {
    const storedTab = localStorage.getItem("localTab");
    return storedTab !== null ? storedTab : "Academic";
  });
  11;

  const backButton = (
    <div className="back">
      <NavLink className="iconDecoration" to={`/courses/${classNum}/${secNum}`}>
        <IoArrowBackCircle className="icon" />
      </NavLink>
    </div>
  );

  return (
    <Main>
      {backButton}

      <div className="tabSwitch">
        <ProfileTabBar localTab={localTab} setLocalTab={setLocalTab} />
        {localTab === "Academic" ? (
          <AcademicTab student={student} />
        ) : localTab === "Personal" ? (
          <PersonalInfo student={student} />
        ) : localTab === "Attendance" ? (
          <AttendanceTab />
        ) : (
          <AcademicTab student={student} />
        )}
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
