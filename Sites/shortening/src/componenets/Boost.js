import React from "react";
import ImgBosst from "../assets/bg-boost-desktop.svg";
import styled from "styled-components";

const StyledBosst = styled.div`
  .boost {
    position: relative;
  }
  .boost_bg > img {
    background-color: hsl(255, 11%, 22%);
  }

  h4 {
    font-family: "Barlow", sans-serif;
    color: #fff;
    font-size: 35px;
    line-height: 1.4;
    margin: 44px 0 0 -87px;
  }

  .btn_get {
    margin: 30px 0;
    border: none;
    background-color: hsl(180, 66%, 49%);
    padding: 20px 30px;
    font-size: 19px;
    font-family: "Barlow", sans-serif;
    color: #fff;
    //border-radius: 14px 30px;
    border-radius: 15px 50px;
    cursor: pointer;
  }
  .bg-booste{
    position: relative;
  }

  .content{

    position: absolute;
    left: 43%;
    bottom: 21px;
    z-index: 111;

}

.bar-bg{
    width: 50%;
    height: 9px;
    background-color: hsl(180, 66%, 49%);
    border-radius: 5px;
    border: none;
    position: absolute;
    left: 24%;
    top: 62%;
}

`;

function Boost() {
  return (
    <StyledBosst className='bg-booste'>
    <div className='boost'>

        <div className="boost_bg">
          <img src={ImgBosst} alt="" />
        </div>
        <div className="content">
          <h4>Boost your links today</h4>
          <button className="btn_get">Get Started</button>
        </div>
 
    </div>
    </StyledBosst>
  );
}

export default Boost;
