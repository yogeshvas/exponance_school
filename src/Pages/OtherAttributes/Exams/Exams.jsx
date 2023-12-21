import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoArrowBackCircle, IoAddOutline } from "react-icons/io5";
import SearchButton from "../../../Components/SearchButton";
import styled from "styled-components";
import { IoIosChatboxes } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ExamsPaper from "./pages/ExamsPaper";

// Modal components
const Modal1 = ({ closeModal }) => (
  <div className="modal">
    <ExamsPaper />
    <button className="closeIcon" onClick={closeModal}>
      <RxCross2 />
    </button>
  </div>
);

const Modal2 = ({ closeModal }) => (
  <div className="modal">
    <p>This is the modal content for Send Notification Check</p>
    <button className="closeIcon" onClick={closeModal}>
      <RxCross2 />
    </button>
  </div>
);

const Modal3 = ({ closeModal }) => (
  <div className="modal">
    <p>This is the modal content for Chat with Students</p>
    <button className="closeIcon" onClick={closeModal}>
      <RxCross2 />
    </button>
  </div>
);

const Exams = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modal) => {
    setSelectedModal(modal);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const backBtn = (
    <NavLink to="/attributes">
      <div className="backBtn">
        <IoArrowBackCircle className="iconBtn" />
      </div>
    </NavLink>
  );

  const Header = (
    <div className="heading">
      <div className="left">
        <div className="icon">{backBtn}</div>
        <div className="heads">
          <h1>Hmmm!</h1>
          <p>Test time I see.</p>
        </div>
      </div>
      <div className="right">
        <SearchButton />
      </div>
    </div>
  );

  return (
    <Main>
      {Header}

      <div className="modalOptions">
        <div className="firstOption">
          <button onClick={() => openModal(<Modal1 closeModal={closeModal} />)}>
            <IoAddOutline /> Make Question Paper
          </button>
        </div>
        <div className="secondOption">
          <button onClick={() => openModal(<Modal2 closeModal={closeModal} />)}>
            <IoAddOutline /> Send Check Notification
          </button>
        </div>
        <div className="thirdOption">
          <button onClick={() => openModal(<Modal3 closeModal={closeModal} />)}>
            <IoIosChatboxes /> Chat With Teachers
          </button>
        </div>
      </div>

      {selectedModal && (
        <div className="modal-container">
          <div className="overlay" onClick={closeModal}></div>
          {selectedModal}
        </div>
      )}
      <div className="homeworkFormat">
        <div className="content"></div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  * {
    margin: 0;
  }

  .heading {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;

      .icon {
        padding: 1rem;
        font-size: 3rem;

        .iconBtn {
          color: var(--darkBlue);
        }
      }

      .heads {
        h1 {
          color: var(--darkBlue);
        }

        p {
          color: var(--darkBlue);
        }
      }
    }
  }

  .modalOptions {
    display: flex;
    justify-content: center;
    gap: 3rem;

    button {
      background: none;
      padding: 1rem;
      border-radius: 1rem;
      border: 2px solid var(--darkBlue);
      color: var(--darkBlue);

      &:hover {
        background-color: var(--darkBlue);
        color: var(--textColor);
      }
    }
  }

  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .modal {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    position: relative;

    .closeIcon {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: var(--darkBlue);
    }

    button {
      background-color: var(--darkBlue);
      color: var(--textColor);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
  .homeworkFormat {
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .content {
      width: 80vw;
      height: 30rem;
      background-color: #eceaea;
      border-radius: 1rem;
    }
  }
`;

export default Exams;
