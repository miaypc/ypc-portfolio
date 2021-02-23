import React from "react";
import styled from "styled-components";




const ProjectsHeaderContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
margin-top:100px;
@media (max-width: 800px){
flex-direction: column;
align-items: flex-start;
}
`;
const ProjectsNumberContainer = styled.div`
color:#d2818f;
display:flex;
align-items: center;
justify-content: center;
width:100px; 
height:100px;
background-color:#f3f3f3;
transition: background-color 0.3s, color 0.3s;
@media (max-width: 800px){
    width:70px;
    height:70px; 
}
`;

const ProjectContainer = styled.div`
&:hover ${ProjectsNumberContainer}{
        background-color:#d2818f;
        color: white;
    };
`;

const ProjectNumber = styled.h2`
@media (max-width: 800px){
font-size:20px;
}
`;
const PorjectTitle = styled.h3`
font-size:28px;
letter-spacing:0.1px;
margin:0;
@media (max-width: 800px){
font-size:25px;
margin-top:28px;
}
`;

//Tech
const ProjectTitleContainer = styled.div`
margin-left:50px;
display:flex;
justify-content: flex-end;
flex-direction: column;
@media (max-width: 800px){
margin-left:0
}
`;
const PorjectTechnologies = styled.p`
color:#565656;
font-size:14px;
margin-bottom:0;
`;

//Content
const ProjectContentContainer = styled.div`
padding:25px 0;
max-width:70%;
margin-left:150px;
@media (max-width: 800px){
margin-left:0px;
}
`;
const ProjectContent = styled.p`
font-size:16px;
line-height: 1.3;
`;

//Links
const ProjectLinkContainer = styled.div`
display:flex;
flex-direction: row;
margin-left:150px;
@media (max-width: 800px){
margin-left:0px;
}
`;
const ProjectLink = styled.a`
color:#111;
font-size:14px;
font-weight:700;
text-decoration:none;
cursor:pointer;
padding-right:25px;
@media (max-width: 800px){
font-size:12px;
font-weight:700;
}
`;

function Project(props){
    return(
        <ProjectContainer >
            <ProjectsHeaderContainer>
                <ProjectsNumberContainer>
                    <ProjectNumber>{props.id}</ProjectNumber>
                </ProjectsNumberContainer>
                <ProjectTitleContainer>
                    <PorjectTitle>{props.name}</PorjectTitle>
                    <PorjectTechnologies>{props.tech}</PorjectTechnologies>
                </ProjectTitleContainer>
            </ProjectsHeaderContainer>
            <ProjectContentContainer>
                <ProjectContent>{props.decription}</ProjectContent>
                <ProjectContent>{props.detail}</ProjectContent>
            </ProjectContentContainer>
            <ProjectLinkContainer>
                <ProjectLink href={props.demo}>Live demo</ProjectLink>
                <ProjectLink href={props.github}>Show me the code</ProjectLink>
            </ProjectLinkContainer>
            </ProjectContainer>
    )
}

export default Project;