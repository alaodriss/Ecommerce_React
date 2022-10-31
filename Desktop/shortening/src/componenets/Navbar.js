import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const StyledRow = styled.div`
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 110px;
  }
`;
const StyledPage = styled.ul`
  .listNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: hsl(257, 7%, 63%);
    margin: 0 30px;
    color: hsl(257, 7%, 63%);
    font-family: "Barlow", sans-serif;
    font-weight: 900;
    font-size: 19px;
  }
  .listNav > li {
    padding: 15px;
  }

  .link-atcive:hover {
    color: hsl(255, 11%, 22%);
    cursor: pointer;
  }

  .ctn-atcive:hover {
    background-color: hsl(180, 66%, 49%);
    color: #FFF;
    cursor: pointer;
}
`;

function Navbar() {
  return (
    <StyledRow>
      <div className="navBar">
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <StyledPage>
          <div className="listNav">
            <ul className="listNav">
              <li className="link-atcive" to="#">
                Factures
              </li>
              <li className="link-atcive" to="#">
                Pricing
              </li>
              <li className="link-atcive" to="#">
                Ressources
              </li>
            </ul>
            <ul className="listNav ">
              <li  className="ctn-atcive" to="#">Login</li>
              <li  className="ctn-atcive" to="#">Sign Up</li>
            </ul>
          </div>
        </StyledPage>
      </div>
    </StyledRow>
  );
}
export default Navbar;
