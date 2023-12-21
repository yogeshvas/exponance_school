import React from "react";
import { CiSearch } from "react-icons/ci";
import CarouselPage from "./components/Carousel";
import SearchButton from "../../Components/SearchButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import course from "../../assets/course.png";

function Heading() {
  return (
    <div className="top">
      <div className="left">
        <h2>Great!</h2>
        <p>What Class are You Looking For?</p>
      </div>
      <div className="right">
        <SearchButton />
      </div>
    </div>
  );
}
const Courses = ({ handleClass }) => {
  return (
    <Main>
      {Heading()}

      <CarouselPage handleClass={handleClass} />
      {/* Demo */}
      <div className="coursesOption">
        <div className="card">
          <NavLink className="listCardLink" to="/attributes">
            <div className="listCard">More Info</div>
          </NavLink>
        </div>
        <div className="image">
          <img src={course} alt="" />
        </div>
      </div>
    </Main>
  );
};

export default Courses;

const Main = styled.div`
  margin: 3rem;
  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left {
      h2 {
        color: var(--darkBlue);
        font-size: 3rem;
      }
      p {
        color: var(--darkBlue);
        font-weight: 300;
        font-size: 2rem;
      }
    }
  }

  .coursesOption {
    display: flex;

    justify-content: space-between;
    img {
      position: fixed;
      width: 15rem;
      bottom: 0;
      right: 0;
    }
    .listCardLink {
      text-decoration: none;
    }
    .listCard {
      background-color: var(--darkBlue);

      color: white;
      padding: 1rem;
      border-radius: 1rem;
      position: relative;
      bottom: 0;
      left: 0;
      transition: all 0.2s ease;
    }
    .listCard:hover {
      color: var(--darkBlue);
      background-color: var(--lightBlue);
    }
  }
`;
