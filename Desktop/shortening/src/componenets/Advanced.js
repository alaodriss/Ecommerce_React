import React from "react";
import styled from "styled-components";
const StyledAdvanced = styled.div`
  .block_adavance {
    padding: 281px 0px;
    text-align: center;
    line-height: 2;
  }
  h2 {
    font-size: 29px;
    font-family: "Barlow", sans-serif;
  }

  p {
    font-family: "Barlow", sans-serif;
    color: hsl(255, 3%, 71%);
    font-size: 19px;
    line-height: 1.4;
  }
`;

function Advanced() {
  return (
    <StyledAdvanced>
      <div className="block_adavance">
        <div className="block_adavance_infos">
          <h2> Advanced Statistics </h2>
          <p>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>
      </div>
    </StyledAdvanced>
  );
}
export default Advanced;
