import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { FaSpinner } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import DetailsCard from "../../Component/DetailsCard";

const AcademicTab = ({ student }) => {
  const [loading, setLoading] = useState(false);

  const handleSnapshotClick = () => {
    setLoading(true);

    const elementToCapture = document.getElementById("elementToCapture");

    html2canvas(elementToCapture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      // Set a custom height for the image (e.g., 150 mm)
      const customHeight = 150;
      const aspectRatio = canvas.width / canvas.height;
      const customWidth = customHeight * aspectRatio;

      pdf.addImage(imgData, "PNG", 0, 0, customWidth, customHeight);
      pdf.save(`${student.name} Academic Details`);

      setLoading(false);
    });
  };
  return (
    <Main>
      <div className="heading">
        <h3>Current Session Details</h3>
        <button
          className="downloadBtn"
          onClick={handleSnapshotClick}
          disabled={loading} // Disable the button when loading
        >
          {loading ? (
            // If loading, show the spinner icon
            <FaSpinner
              style={{ fontSize: "1.5rem", color: "var(--darkBlue)" }}
              className="loadingIcon"
            />
          ) : (
            // Otherwise, show the download icon
            <MdDownloadForOffline
              style={{ fontSize: "2.3rem", color: "var(--darkBlue)" }}
            />
          )}
        </button>
      </div>
      <div className="mainContent" id="elementToCapture">
        <DetailsCard student={student} />
        <div className="MarksCard">
          <div className="row">
            <div className="title">OverAll Marks</div>
            <div className="value">
              <h3>{student.score}</h3>
            </div>
          </div>
          <div className="row">
            <div className="title">Current Exam Marks</div>
            <div className="value">
              <h3>{student.score}</h3>
            </div>
          </div>
          <div className="row">
            <div className="title">OverAll Grade</div>
            <div className="value">
              <h3>{student.overAllGrade}</h3>
            </div>
          </div>
          <div className="row">
            <div className="title">Disciplinary Grade</div>
            <div className="value">
              <h3>{student.descipilinaryGrade}</h3>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AcademicTab;

const Main = styled.div`
  .mainContent {
    display: flex;
    flex-wrap: wrap;
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .downloadBtn {
      border: none;
      background-color: white;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--darkBlue);
    }
  }

  .detailsCard {
    background-color: var(--lightBlue);
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    align-items: center;
    border-radius: 1rem;
    font-weight: 500;
    padding-right: 1rem;
    justify-content: space-between;
    text-align: left;
    color: var(--darkBlue);

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    .profile {
      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .details {
      .middle {
        p {
          font-size: 0.8rem;
        }

        h3 {
          font-size: 1rem;
        }
      }
    }
  }

  .MarksCard {
    background-color: var(--lightBlue);
    border-radius: 1rem;
    padding: 1rem;
    color: var(--darkBlue);
    /* Remove the fixed height to allow dynamic height based on content */
  }

  .row {
    padding: 0;
    display: flex;
    flex-direction: column; /* Keep it as column for small screens */

    @media (min-width: 768px) {
      flex-direction: row; /* Change to row for larger screens */
    }

    justify-content: space-between;
    text-align: left;
    align-items: center;
    border: 1px solid var(--darkBlue);
    border-radius: 1rem;

    .title,
    .value {
      padding: 0.5rem;
    }
  }

  .loadingIcon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
