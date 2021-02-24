import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const HeaderConatiner = styled.div`
padding-left:20px;
margin:0 auto;
max-width:1000px;
`;

const LogosContainer = styled.div`
display: flex;
justify-content: flex-end;
padding:20px 10px;
`;

const Intro = styled.div`
`;

const Name = styled.h1`
font-size:70px;
@media (max-width: 800px){
  font-size:50px;
}
`;
const TextContainer = styled.div`
max-width:70%;
`;
const Text = styled.p`
font-size:24px;
line-height:1.6;
font-weight:300;
@media (max-width: 800px){
  font-size:20px;
}
`;
const Strong = styled.span`
font-weight:400;
`;
function Header() {
  return (
<HeaderConatiner>
      <LogosContainer>
        <a href="https://www.linkedin.com/in/miayin">
        <LinkedInIcon style={{color:"#626362", padding:"0 20px", width:"25", height:"25"}}/>
        </a>
        <a href="https://github.com/miaypc">
        <GitHubIcon  style={{color:"#626362", padding:"0 20px", width:"25", height:"25"}}/>
        </a>
        <a href="mailto: me@miayin.com">
        <EmailIcon style={{color:"#626362", padding:"0 20px", width:"25", height:"25"}}/>
        </a>
      </LogosContainer>
      <Intro>
      <Name>Mia Yin</Name>
      <TextContainer>
      <Text>I am a <Strong >Frontend Developer</Strong>, and I used to work in marketing and as an executive assistant. My education background is in finance and marketing. My current focus is on building interactive applications with <Strong>Javascript</Strong> and <Strong>React</Strong>.</Text>
      </TextContainer>
      </Intro>
 </HeaderConatiner>
  );
}

export default Header;
