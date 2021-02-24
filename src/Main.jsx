import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {ProjectsData} from "./ProjectsData"
import Project from "./Project"



const Projects = styled.h2`
color: #575757;
font-size:20px;
text-align:end;
font-weight:300;
letter-spacing:1px;
transform:rotate(-90deg);
position:absolute;
margin:0;
left:-20px;
@media (max-width: 800px){
transform:rotate(0);
text-align:left;
left:20px;
top:50px;
}
`;
const MainContainer = styled.div`
position:relative;
padding:30px 50px;
max-width:1000px;
display:flex;
flex-direction: column;
margin:0 auto;
max-width:1000px;
@media (max-width: 800px){
    padding-bottom:0;
}
`;
//footer
const FooterConatiner = styled.div`
background-color:#d2818f;
padding:120px 0;
margin:120px 0 0 0;
display:flex;
align-items: center;
justify-content: center;

`;
const FooterText = styled.p`
color:white;
font-size:18px;
font-weight:700;
`;
const Link = styled.a`
text-decoration:none;
cursor:pointer;
`;
function Main(){

    return(
        <React.Fragment>  
             <MainContainer>
                <Projects>projects</Projects>
                 {ProjectsData.map((e)=>{
                    return(
                      <Project
                        id={e.id}
                        name={e.name}
                        tech={e.tech}
                        decription={e.decription}
                        detail={e.detail}
                        demo={e.demo}
                        github={e.github}
                        companyLink={e.companyLink}
                        apiLink={e.apiLink}
                        api={e.api}
                        detail2={e.detail2}
                      />
                    )
                })}
            </MainContainer>         
            <Link href="https://github.com/miaypc" >
                <FooterConatiner>
                    <FooterText>See more on Github </FooterText>    
                    <ArrowRightAltIcon style={{color:"white", paddingLeft:"5px"}}/>
                </FooterConatiner>
            </Link>
        </React.Fragment>
    )
}

export default Main;