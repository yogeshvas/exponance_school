import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchButton from "../../Components/SearchButton";
import { IoArrowBackCircle } from "react-icons/io5";
import sectionImg from "../../assets/section.png";

const Section = ({ secNum, classNum, handleSec }) => {
  const backBtn = (
    <NavLink to="/courses">
      <div className="backBtn">
        <IoArrowBackCircle className="iconBtn" />
      </div>
    </NavLink>
  );
  const section = ["A", "B", "C", "D", "E"];
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

  const SectionOption = (
    <div className="classes">
      <div className="card">
        {section.map((item) => (
          <NavLink
            to={`/courses/${classNum}/${item}`}
            onClick={() => handleSec(item)}
          >
            <div className="listCard">
              <p>Section {item}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );

  return (
    <Main>
      {Heading}
      {SectionOption}
      <div className="footer">
        <div className="image">
          <img
            style={{ bottom: "0", position: "absolute", width: "26rem" }}
            src={sectionImg}
            alt=""
          />
        </div>
        <div>
          <NavLink className="button" to="/courses">
            classes
          </NavLink>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
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
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .listCard {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13vw;
      height: 13vw;
      border: 4px solid var(--darkBlue);
      border-radius: 1rem;
      text-align: center;

      p {
        margin: 0; /* Remove default margin for paragraphs */
      }
    }
  }
  a {
    text-decoration: none;
    color: var(--darkBlue);
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
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rem;
    .button {
      background-color: var(--darkBlue);
      color: var(--textColor);
      padding: 0.5rem 3rem;
      border-radius: 1rem;
    }
  }
`;

export default Section;
