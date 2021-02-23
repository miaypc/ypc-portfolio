import './App.css';
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const PortfolioContainer = styled.div`
color:#111;
font-family: IBM Plex Sans,sans-serif;

`;

function App() {
  return (
    <PortfolioContainer>
      <Header/>
      <Main/>
    </PortfolioContainer>
  );
}

export default App;
