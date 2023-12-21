import React from "react";
import styled from "styled-components";
import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SearchButton from "../../Components/SearchButton";
import image from "../../assets/otherAttributes.png";

const OtherAttributes = () => {
  const backBtn = (
    <NavLink to="/courses">
      <div className="backBtn">
        <IoArrowBackCircle className="iconBtn" />
      </div>
    </NavLink>
  );

  const Heading = (
    <div className="heading">
      <div className="left">
        <div className="icon">{backBtn}</div>
        <div className="heads">
          <h1>Heyy!</h1>
          <p>Glad to see you again!</p>
        </div>
      </div>
      <div className="right">
        <SearchButton />
      </div>
    </div>
  );

  const navOptions = (
    <div className="optionsTab">
      <NavLink to="/attributes/leave">
        <div className="container">
          <p>Leave</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/timetable">
        <div className="container">
          <p>Time Tables</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/cabinet">
        <div className="container">
          <p>Cabinets</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/events">
        <div className="container">
          <p>Events</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/complaints">
        <div className="container">
          <p style={{ textAlign: "center" }}>Complaints & Consultancy</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/teachers">
        <div className="container">
          <p>Teachers Details</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/homework">
        <div className="container">
          <p>Homeworks</p>
        </div>
      </NavLink>

      <NavLink to="/attributes/exams">
        <div className="container">
          <p>Exams</p>
        </div>
      </NavLink>
    </div>
  );
  return (
    <Main>
      {Heading}
      <div className="wrapper">{navOptions}</div>
      <div className="footer">
        <img src={image} alt="" />
      </div>
    </Main>
  );
};

export default OtherAttributes;

const Main = styled.div`
  /* * {
    margin: 0;
    padding: 0;
  } */
  .wrapper {
    margin: 0 5rem;
  }

  .iconBtn {
    padding: 0;
    margin: 0;
    color: var(--darkBlue);
    font-size: 3rem;
    transition: all 0.2s;
    &:hover {
      color: var(--lightBlue);
    }
  }
  .left {
    display: flex;
  }
  .heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--darkBlue);
      font-size: 2rem;
    }
    p {
      color: var(--darkBlue);
      font-size: 1.5rem;
    }
  }
  .optionsTab {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    margin-top: 1rem;
    margin: 0 3rem;
    padding: 2rem;
    justify-content: center;
    a {
      color: var(--darkBlue);
      text-decoration: None;
    }
    .container {
      border: 4px solid var(--darkBlue);
      width: 14rem;
      height: 14rem;
      border-radius: 1rem;
      display: grid;
      align-items: center;
      transition: all 0.3s ease-in-out;
      justify-content: center;
      /* flex: 0 1 calc(10% - 1rem); */
      &:hover {
        background-color: var(--darkBlue);

        color: var(--textColor);
      }
    }
  }

  .footer {
    img {
      position: absolute;
    }
  }
`;
