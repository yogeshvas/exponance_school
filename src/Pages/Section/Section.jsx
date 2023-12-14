import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Section = ({ secNum, classNum, handleSec }) => {
  const section = ["a", "b", "c", "d"];
  return (
    <Main>
      <div className="classes">
        <div className="card">
          {section.map((item) => (
            <NavLink
              to={`/courses/${classNum}/${item}`}
              onClick={() => handleSec(item)}
            >
              <div className="listCard">
                <p>{item}</p>
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

export default Section;
