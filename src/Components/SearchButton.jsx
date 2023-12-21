import React from "react";
import styled from "styled-components";

const SearchButton = () => {
  return (
    <Main>
      <div className="chat-input-container">
        <i className="chat-search-icon" />
        <input type="text" placeholder="Search student..." />
      </div>
    </Main>
  );
};

export default SearchButton;

const Main = styled.div`
  /* ChatInput.css */
  .chat-input-container {
    position: relative;
    width: 400px; /* Set your desired width */
  }
  input {
    padding: 13px;
    padding-left: 35px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1rem;
    border: 2px solid var(--darkBlue);
  }

  .chat-search-icon {
    position: absolute;
    top: 32%;
    left: 15px;
    transform: translateY(-50%);
    color: var(--darkBlue); /* Set your desired color */
    font-size: 18px; /* Set your desired font size */
  }
  @media (max-width: 768px) {
    .chat-input-container {
      width: 200px;
    }
  }
`;
