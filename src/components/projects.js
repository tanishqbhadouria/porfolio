import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectcard";
import projectImg1 from "../assets/img/projectImg1.jpg";
import projectImg2 from "../assets/img/projectImg2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";



export const Projects = () => {
    const projects=[
        {
            title:"Skin Burn Image Classification",
            description:"In this team project, I handled backend development using Node.js, Express.js, and Multer for efficient file handling. I integrated an API for a machine learning model to classify skin burns, displaying results through an EJS template. The project provides immediate first aid suggestions and medical guidance for skin burns.",
            imgURL:projectImg1,
        },
        {
            title:"Note Keeper App Using React",
            description:"In this project, I developed a note keeper application using React. The app allows users to create, read, update, and delete notes. It features a user-friendly interface and real-time updates. This project helped me enhance my skills in React, state management, and component-based architecture ",
            imgURL:projectImg2,
        }
    ]
  
  return (
    <section className="project justify-content-center" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col size={12}>
                <h2>Projects</h2>
                <p>I enjoy creating diverse projects that challenge my skills and expand my knowledge. Each project allows me to explore new technologies and improve my problem-solving abilities.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content className="project-content">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}