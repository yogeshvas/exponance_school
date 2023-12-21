// OtherAttributes.jsx
import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const ExamsPaper = () => {
  const [numQuestions, setNumQuestions] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [hideBorders, setHideBorders] = useState(false);
  const [marksList, setMarksList] = useState(Array(numQuestions).fill(""));
  const [exam, setExam] = useState("");

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(parseInt(e.target.value, 10));
    setQuestionsGenerated(false);
    setMarksList(Array(parseInt(e.target.value, 10)).fill(""));
  };

  const handleExamChange = (e) => {
    setExam(e.target.value);
  };

  const handleTeacherNameChange = (e) => {
    setTeacherName(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMarksChange = (e, index) => {
    const updatedMarksList = [...marksList];
    updatedMarksList[index] = e.target.value;
    setMarksList(updatedMarksList);
  };

  const handleDownloadPDF = () => {
    setHideBorders(true);
    const element = document.getElementById("otherAttributesForm");
    html2pdf(element);
  };

  const generateQuestions = () => {
    setQuestionsGenerated(true);
    setHideBorders(false);

    // Replace newline characters with <br /> tags
    const formattedDescription = description.replace(/\n/g, "<br />");
    setDescription(formattedDescription);
  };

  return (
    <div>
      <div
        className="scroll"
        style={{ maxWidth: "80vw", maxHeight: "80vh", overflow: "auto" }}
      >
        <form
          style={{
            margin: "5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            color: "var(--darkBlue)",
          }}
        >
          <label>
            <p>Teacher Name:</p>
            <input
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
              type="text"
              value={teacherName}
              onChange={handleTeacherNameChange}
            />
          </label>
          <label>
            <p>Exam</p>
            <input
              type="text"
              value={exam}
              onChange={handleExamChange}
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
            />
          </label>
          <label>
            <p>Time:</p>
            <input
              type="text"
              value={dueDate}
              onChange={handleDueDateChange}
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
            />
          </label>
          <label>
            <p>Subject:</p>
            <input
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
            />
          </label>

          <label>
            <p>Year:</p>
            <input
              type="text"
              value={year}
              onChange={handleYearChange}
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
            />
          </label>
          <label>
            <p>Number of Questions:</p>
            <input
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                border: "1px solid var(--darkBlue)",
              }}
              type="number"
              value={numQuestions}
              onChange={handleNumQuestionsChange}
            />
          </label>
          <label>
            <p>Instructions:</p>
            <textarea
              style={{
                padding: "0.5rem",
                borderRadius: "1rem",
                margin: "0.1rem 0",
                width: "20rem",
                height: "10rem",
                border: "1px solid var(--darkBlue)",
                whiteSpace: "pre-line",
              }}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>
          <button
            style={{ maxHeight: "3rem" }}
            type="button"
            onClick={generateQuestions}
          >
            Generate Form
          </button>
        </form>

        <div>
          <div>
            {questionsGenerated && (
              <div>
                <div id="otherAttributesForm" className="paper">
                  <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
                    CITY MONSETTORY SCHOOL, Kanpur
                  </p>
                  <p style={{ textAlign: "center" }}>{`${exam}`}</p>
                  <h3 style={{ textAlign: "center" }}>{`${subject}`}</h3>
                  <p>{`Time: ${dueDate}hrs`}</p>
                  <p>Instructions to the candidate:</p>
                  <p
                    style={{ marginLeft: "20px" }}
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                  <hr style={{ margin: "1rem 0" }} />
                  {[...Array(numQuestions)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <p style={{ marginRight: "10px" }}>{`Que No. ${
                        index + 1
                      }:`}</p>
                      <div
                        contentEditable="true"
                        style={{
                          textAlign: "left",
                          border: hideBorders ? "none" : "1px solid #ccc",
                          padding: "8px",
                          maxWidth: "55vw",
                          wordWrap: "break-word",
                          marginRight: "10px",
                        }}
                      ></div>
                      <label style={{ marginRight: "1px" }}>
                        Marks:
                        <input
                          type="text"
                          value={marksList[index]}
                          onChange={(e) => handleMarksChange(e, index)}
                          style={{
                            border: hideBorders ? "none" : "1px solid #ccc",
                          }}
                        />
                      </label>
                    </div>
                  ))}

                  <footer>
                    <hr style={{ margin: "1rem 0" }} />
                    <div
                      className="foot"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>CITY MONSETTORY SCHOOL</p>
                      <p>Exam paper is designed By: {teacherName}</p>
                    </div>
                  </footer>
                </div>
                <button
                  style={{ margin: "1rem 0" }}
                  onClick={handleDownloadPDF}
                >
                  Download Exam Paper
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsPaper;
