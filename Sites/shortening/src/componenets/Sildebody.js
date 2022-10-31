import React from "react";
import ImgAvatar from "../assets/illustration-working.svg";
import styled from "styled-components";

const StyledBlock = styled.div`
  .block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 110px;

    h1{
        font-family: 'Barlow', sans-serif;
        color: hsl(255, 11%, 22%);
        font-size: 70px;
    }

    p{
        font-family: 'Barlow', sans-serif;
        color: hsl(255, 3%, 71%); 
        font-size: 19px;
        line-height: 1.4;
    }
    .moreInfos{

        margin: 30px 0;
        border: none;
        background-color: hsl(180,66%,49%);
        padding: 20px 52px;
        font-size: 19px;
        font-family: 'Barlow',sans-serif;
        color: #FFF;
        border-radius: 50px;
        cursor: pointer;
    }
  }
  .image {
    margin: 0 -7rem 0 0;    
  }
`;

function Sildebody() {
  return (
    
      <StyledBlock>
        <div className="block">
          <div className="block_information">
            <h1>
              {" "}
              More than just <br /> shorter links{" "}
            </h1>
            <p>
              Build your brand’s recognition and get detailed <br /> insights on
              how your links are performing.
            </p>
            <button className="moreInfos">Get Started</button>
          </div>

          <div className="image">
            <img src={ImgAvatar} alt="Images" />
          </div>
        </div>
      </StyledBlock>
  );
}

export default Sildebody;
