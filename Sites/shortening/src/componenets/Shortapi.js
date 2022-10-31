import React, { Component } from "react";
import bgInput from "../assets/bg-shorten-desktop.svg";
import styled from "styled-components";

const StyledBlockApi = styled.div`
  #shortLink {
    display: flex;
    justify-content: space-between;
    margin: -161px 236px;
  }
  #url {
    padding: 20px 220px;
    border-radius: 10px;
    border: none;
  }

  #submit {
    margin: 0 25px;
    padding: 20px 40px;
    border-radius: 10px;
    border: none;
    background-color: hsl(180, 66%, 49%);
    font-size: 19px;
    font-family: "Barlow", sans-serif;
    color: #fff;
  }

  .bg-input {
    background-color: hsl(255,11%,22%);
    border-radius: 30px;
    z-index: -11;
    margin: 46px 143px;
  }
`;

class Shortapi extends Component {
  render() {
    return (
      <StyledBlockApi>
        <div className="block_short bg-color">
          <img className="bg-input" src={bgInput} alt="" />
          <form action="#" id="shortLink">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Shorten a link here..."
              data-error-visible=""
            />

            <input id="submit" type="submit" value="Shorten It!" />
            <span className="first_error"></span>
          </form>
        </div>
      </StyledBlockApi>
    );
  }
}
export default Shortapi;
