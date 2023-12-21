import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselPage = ({ handleClass }) => {
  const classes = [
    { class: "Class 1", link: "1" },
    { class: "Class 2", link: "2" },
    { class: "Class 3", link: "3" },
    { class: "Class 4", link: "4" },
    { class: "Class 5", link: "5" },
    { class: "Class 6", link: "6" },
    { class: "Class 7", link: "7" },
    { class: "Class 8", link: "8" },
    { class: "Class 9", link: "9" },
    { class: "Class 10", link: "10" },
    { class: "Class 11", link: "11" },
    { class: "Class 12", link: "12" },
  ];

  // Reverse the classes array
  const reversedClasses = [...classes].reverse();

  const items = reversedClasses.map((item) => (
    <NavLink
      key={item.link}
      to={`${item.link}`}
      onClick={() => handleClass(item)}
    >
      <div className="listCard">
        <p>{item.class}</p>
      </div>
    </NavLink>
  ));

  const responsive = {
    0: {
      items: 1,
    },

    786: {
      items: 3,
    },

    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const renderPrevButton = ({ isDisabled }) => (
    <StyledButton
      style={{ left: "0", left: "-1%", top: "30%" }}
      className="prev"
      disabled={isDisabled}
    >
      &lt;
    </StyledButton>
  );

  const renderNextButton = ({ isDisabled }) => (
    <StyledButton
      style={{ left: "auto", right: 0, top: "30%" }}
      className="next"
      disabled={isDisabled}
    >
      &gt;
    </StyledButton>
  );

  return (
    <Main>
      <div className="classes">
        <div className="card">
          <AliceCarousel
            items={items}
            disableDotsControls="true"
            responsive={responsive}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            autoPlay
            autoPlayInterval={4000}
          />
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  .card {
    /* margin: 0 5rem; */
    display: flex;
    flex-wrap: wrap;

    .listCard {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13rem;
      height: 13rem;
      border: 4px solid var(--darkBlue);
      border-radius: 1rem;

      p {
        margin: 0; /* Remove default margin for paragraphs */
      }
    }
  }
  a {
    text-decoration: none;
    color: var(--darkBlue);
  }
`;

const StyledButton = styled.button`
  background-color: white;
  color: ${(props) => (props.disabled ? "#fff" : "var(--darkBlue)")};
  /* color: #fff; */
  font-size: 1rem;
  scale: 2;
  padding: 8px;
  margin: 0 5px;
  border: none;
  border-radius: 10%;
  position: absolute;
  background: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${(props) => (props.disabled ? "#ccc" : "var(--lightBlue)")};
  }
`;

export default CarouselPage;
