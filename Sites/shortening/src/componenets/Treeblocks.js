import React from "react";
import img1 from "../assets/icon-brand-recognition.svg";
import img2 from "../assets/icon-detailed-records.svg";
import img3 from "../assets/icon-fully-customizable.svg";

import styled from "styled-components";

const StyledTree = styled.div`
  .block_infos {
    display: flex;
    justify-content: space-between;
    margin: 0 125px;
    height: 500px;
  }
  .info_block {
    position: relative;
    background-color: #fff;
    width: 350px;
    height: 320px;
    border-radius: 10px;
  }
  .text_block {
    padding: 50px 40px;
  }
  h3 {
    font-family: "Barlow", sans-serif;
    color: hsl(255, 11%, 22%);
    line-height: 1.4;
    padding: 10px 0px;
  }

  p {
    font-family: "Barlow", sans-serif;
    color: hsl(255, 3%, 71%);
    font-size: 19px;
    line-height: 1.4;
  }
  .bloc_1 {
    margin-top: -65px;
  }
  .icon_1 {
    top: -14%;
    left: 10%;
  }

  .icon_2 {
    top: -14%;
    left: 10%;
  }

  .bloc_3 {
    margin-top: 53px;
  }
  .icon_3 {
    top: -14%;
    left: 10%;
  }

  .icon {
    background-color: hsl(255, 11%, 22%);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
  }

  img {
    margin: 15px 18px;
  }
`;

const txt1 = "Brand Recognition";
const des1 =
  "Boost your brand recognition with each click. Generic links don’t  mean a  thing. Branded links help instil confidence in your content.";

const txt2 = "Detailed Records";
const des2 =
  "Gain insights into who is clicking your links. Knowing when and where  people engage with your content helps inform better decisions.";

const txt3 = "Fully Customizable";
const des3 =
  " Improve brand awareness and  content discoverability through  customizable links, supercharging audience engagement.";

function Treeblocks() {
  return (
    <StyledTree>
      <div className="block_infos">
        <div className="info_block bloc_1">
          <div className="icon icon_1">
            <img src={img1} alt="recognition" />
          </div>
          <div className="text_block">
            <h3>{txt1} </h3>
            <p>{des1} </p>
          </div>
        </div>

        <div className="info_block bloc_2">
          <div className="icon icon_2">
            <img src={img2} alt="records" />
          </div>
          <div className="text_block">
            <h3> {txt2}</h3>
            <p>{des2}</p>
          </div>
        </div>

        <div className="info_block bloc_3">
          <div className="icon icon_3">
            <img src={img3} alt="recognition" />
          </div>
          <div className="text_block">
            <h3>{txt3}</h3>
            <p>{des3}</p>
          </div>
        </div>
      </div>
    </StyledTree>
  );
}

export default Treeblocks;
