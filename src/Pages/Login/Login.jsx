import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Homeimg from "../../assets/loginImg.png";

function Login() {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <Main>
        {/* Right Section */}
        <div className="left">
          <div className="heading">
            <h1 style={{ fontSize: "32px", marginBottom: "1rem" }}>
              Hello Again
            </h1>
            <p style={{ fontSize: "33px", marginBottom: "1rem" }}>
              Student's Analysis Report
            </p>
            <p>
              Welcome to your educational student portal! Unlock a world of
              knowledge and resources with your secure login.
            </p>
          </div>
          <div className="login-form">
            {/* Login Form */}
            <form className="form">
              <Input
                style={{ border: "1px solid black" }}
                type="text"
                placeholder="Your E-Number"
              />
              <Input
                style={{ border: "1px solid black" }}
                type="password"
                placeholder="Password"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <SubmitButton onClick={() => navigate("/courses")}>
                  Login
                </SubmitButton>
                <p style={{ marginTop: "1rem" }}>OTP Login</p>
              </div>
            </form>
          </div>
        </div>

        {/* Left Section */}
        <div className="right">
          <img src={Homeimg} alt="Student Portal" />
        </div>
      </Main>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;

    .heading {
      margin-bottom: 2rem;
    }

    .form {
      width: 60%;
      display: flex;
      flex-direction: column;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    img {
      max-width: 100%; /* Ensures the image does not exceed the width of its container */
      max-height: 100%; /* Ensures the image does not exceed the height of its container */
      width: auto; /* Allows the image to scale with the aspect ratio */
      height: auto; /* Allows the image to scale with the aspect ratio */
    }
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  width: 240px;
  background-color: #342e98;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login;
