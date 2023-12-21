// AppContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
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

  const contextValue = {
    selectedTab,
    setSelectedTab,
    classNum,
    setClassNum,
    secNum,
    setSecNum,
    rollNum,
    setRollNum,
    handleClass,
    handleSec,
    handleRoll,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
