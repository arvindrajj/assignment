import styled from "styled-components";

export const HomeEl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  height: auto;
  top: 10vh;
  position: relative;
`;

export const ContentCont = styled.div`
  display: flex;
  flex-direction: space-around;
  width: 80%;
  margin: auto;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media all and (max-width: 480px) {
    order: 2;
  }
`;

export const Heading = styled.h1`
  color: #1e293b;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  @media all and (min-width: 468px) {
    font-size: 30px;
    text-align: left;
  }
`;

export const Para = styled.p`
  font-family: "Roboto";
  margin-top: 36px;
  font-size: 14px;
  line-height: 28px;
  color: #64748b;
  margin-bottom: 0px;
  text-align: center;
  @media all and (min-width: 468px) {
    margin-top: 0px;
    text-align: left;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto";
  color: #ffffff;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  background-color: #0967d2;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  @media all and (min-width: 468px) {
    width: 150px;
    font-size: 16px;
  }
`;

export const HomeImage = styled.img`
  width: 50%;
  max-width: 430px;
  max-height: 390px;
  margin-left: 85px;
  @media all and (max-width: 598px) {
    margin: auto;
    width: 206px;
    height: 240px;
  }
`;
