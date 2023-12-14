import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <Main>
      <div className="classes">
        <div className="card">
          {classes.map((item) => (
            <NavLink to={`${item.link}`} onClick={() => handleClass(item)}>
              <div className="listCard">
                <p>{item.class}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  .card {
    display: flex;
    flex-wrap: wrap;

    .listCard {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13vw;
      height: 13vw;
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

export default CarouselPage;
