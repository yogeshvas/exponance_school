import { Carousel } from "bootstrap";
import "./App.css";
import Attendance from "./Pages/Attendance/Attendance";
import Contest from "./Pages/Contest.jsx/Contest";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Complaints from "./Pages/OtherAttributes/Complaints/Complaints";
import Exams from "./Pages/OtherAttributes/Exams/Exams";
import Homework from "./Pages/OtherAttributes/HomeWork/Homework";
import Leave from "./Pages/OtherAttributes/Leave/Leave";
import TeacherDetails from "./Pages/OtherAttributes/TeacherDetails/TeacherDetails";
import Timetable from "./Pages/OtherAttributes/Timetable/Timetable";
import Section from "./Pages/Section/Section";
import Cabinet from "./Pages/OtherAttributes/Cabinet/Cabinet";
import Events from "./Pages/OtherAttributes/Events/Events";
import Performance from "./Pages/Performance/Performance";

import { useEffect, useState } from "react";
import IndividualProfilePage from "./Pages/Performance/Pages/IndividualProfilePage/IndividualProfilePage";
import OtherAttributes from "./Pages/OtherAttributes/OtherAttributes";

function App() {
  const [selectedTab, setSelectedTab] = useState(
    () => localStorage.getItem("selectedTab") || "Performance"
  );
  const [classNum, setClassNum] = useState(() =>
    localStorage.getItem("classNum")
  );
  const [secNum, setSecNum] = useState(() => localStorage.getItem("secNum"));

  const [rollNum, setRollNum] = useState(() => localStorage.getItem("rollNum"));

  const handleClass = (classData) => {
    setClassNum(classData.link);
    localStorage.setItem("classNum", classData.link);
  };

  const handleSec = (secData) => {
    setSecNum(secData);
    localStorage.setItem("secNum", secData);
  };

  const handleRoll = (rollData) => {
    setRollNum(rollData);
    localStorage.setItem("rollNum", rollData);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/courses"
          element={<Courses handleClass={handleClass} />}
        />
        <Route path="/attributes" element={<OtherAttributes />} />
        <Route path="/attributes/cabinet" element={<Cabinet />} />
        <Route path="/attributes/complaints" element={<Complaints />} />
        <Route path="/attributes/events" element={<Events />} />
        <Route path="/attributes/exams" element={<Exams />} />
        <Route path="/attributes/homework" element={<Homework />} />
        <Route path="/attributes/leave" element={<Leave />} />
        <Route path="/attributes/teachers" element={<TeacherDetails />} />

        <Route path="/attributes/timetable" element={<Timetable />} />
        <Route
          path={`/courses/${classNum}`}
          element={
            <Section
              secNum={secNum}
              classNum={classNum}
              handleSec={handleSec}
            />
          }
        />
        <Route
          path={`/courses/${classNum}/${secNum}`}
          element={
            <Performance
              classNum={classNum}
              secNum={secNum}
              rollNum={rollNum}
              setRollNum={setRollNum}
              handleRoll={handleRoll}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          }
        />
        <Route
          path={`/courses/${classNum}/${secNum}/${rollNum}`}
          element={
            <IndividualProfilePage
              rollNum={rollNum}
              classNum={classNum}
              secNum={secNum}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
