import React from "react";
import { CiSearch } from "react-icons/ci";
import CarouselPage from "./components/Carousel";
import SearchButton from "../../Components/SearchButton";
import styled from "styled-components";

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
    </Main>
  );
};

export default Courses;

const Main = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    .left {
      h2 {
        font-size: 3rem;
      }
      p {
        font-weight: 300;
        font-size: 2rem;
      }
    }
  }
`;
