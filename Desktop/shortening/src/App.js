import Navbar from "./componenets/Navbar";
import Sildebody from "./componenets/Sildebody";
import Shortapi from "./componenets/Shortapi";
import Advanced from "./componenets/Advanced";
import Treeblocks from "./componenets/Treeblocks";
import Boost from "./componenets/Boost"; 
// import Footer from "./componenets/Footer"; 


import styled from "styled-components";
const StyleBgColor = styled.div`

  background-color: hsl(0, 0%, 94%);
  width: 100%;
  

 
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sildebody />

      <StyleBgColor>

            <Shortapi />
            <Advanced />
            <Treeblocks />

      </StyleBgColor>

      <Boost />

    {/* <Footer /> */}
  
    </div>
  );
}

export default App;
