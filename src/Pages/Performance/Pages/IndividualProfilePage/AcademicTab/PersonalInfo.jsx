import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { FaSpinner } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import DetailsCard from "../../Component/DetailsCard";

const PersonalInfo = ({ student }) => {
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

      // Add a heading to the PDF document
      pdf.text(`${student.name} Personal Details`, 10, 10);

      // Set a custom height for the image (e.g., 150 mm)
      const customHeight = 150;
      const aspectRatio = canvas.width / canvas.height;
      const customWidth = customHeight * aspectRatio;

      // Add the image to the PDF document
      pdf.addImage(imgData, "PNG", 0, 20, customWidth, customHeight);

      // Save the PDF with a specific filename
      pdf.save(`${student.name} Personal Details`);

      setLoading(false);
    });
  };
  return (
    <Main>
      <div className="heading">
        <h3>Student Personal Details!</h3>
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
      <div id="elementToCapture" className="screenshot">
        <div className="mainContent">
          <div className="cardContainer">
            <DetailsCard className="mainData" student={student} />
          </div>
          <div className="cardContainer">
            <div className="personalDetails">
              <div className="row">
                <h5>Date of Birth</h5>
                <p>{student.dob}</p>
              </div>
              <div className="row">
                <h5>Father Name</h5>
                <p>{student.fatherName}</p>
              </div>
              <div className="row">
                <h5>Date of Birth</h5>
                <p>{student.dob}</p>
              </div>
              <div className="row">
                <h5>Previous Class Score</h5>
                <p>-</p>
              </div>
              <div className="row">
                <h5>Current Year</h5>
                <p>{student.year}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="address">
            <div className="addressDetails">
              <div className="row">
                <div className="title">Address</div>
                <div className="value">{student.address}</div>
              </div>
              <div className="row">
                <div className="title">City/State</div>
                <div className="value">{student.address}</div>
              </div>
              <div className="row">
                <div className="title">Pincode</div>
                <div className="value">
                  {student.city}/{student.pincode}
                </div>
              </div>
              <div className="row">
                <div className="title">Mobile No.</div>
                <div className="value">{student.mobile}</div>
              </div>
              <div className="row">
                <div className="title">Email</div>
                <div className="value">{student.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PersonalInfo;

const Main = styled.div`
  .heading {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 2rem;
      color: var(--darkBlue);
    }
    .downloadBtn {
      border: none;
      background-color: white;
    }
  }

  .mainContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cardContainer {
    width: calc(50% - 10px); /* Adjust as needed, considering margins */
    margin-bottom: 20px;

    .personalDetails {
      background-color: var(--lightBlue);
      border-radius: 1rem;
      padding: 0.5rem; /* Adjust padding */

      .row {
        font-size: 1rem;
        color: var(--darkBlue);
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .address {
    border-radius: 1rem;
    background-color: var(--lightBlue);
    padding: 1rem;
    width: 100%; /* Make it full width in mobile view */

    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    .cardContainer {
      width: 100%;
      .personalDetails {
        background-color: var(--lightBlue);
        border-radius: 1rem;
        padding: 0.5rem; /* Adjust padding */

        .row {
          font-size: 1rem;
          color: var(--darkBlue);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
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
