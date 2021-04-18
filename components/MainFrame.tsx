import { Col, Container, Row } from "react-bootstrap";
import AboutContainer from "./containers/AboutContainer";
import ContactsContainer from "./containers/ContactsContainer";
import EducationContainer from "./containers/EducationContainer";
import SkillsContainer from "./containers/SkillsContainer";
import JobsContainer from "./containers/JobsContainer";
import ProjectsContainer from "./containers/ProjectsContainer";
import OthersContainer from "./containers/OthersContainer";
import BuildTimestamp from "../utilities/BuildTimestamp.preval";

function MainFrame() {
   const nameStyle: React.CSSProperties = {
      color: "black",
      backgroundColor: "black",
      height: "1px",
   };
   const linkStyle: React.CSSProperties = {
      textDecoration: "none",
      color: "#3173bb",
      margin: "0px",
      padding: "0px",
   };
   const { buildTimestamp } = BuildTimestamp;

   return (
      <Container>
         <Row className="my-3">
            <Col className="text-center">
               <h1 className="display-1 d-none d-sm-inline">Tom Bu</h1>
            </Col>
         </Row>
         <hr style={nameStyle} />
         <Row className="my-3">
            <Col>
               <h2>About Me</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <AboutContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <h2>Skills</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <SkillsContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <h2>Education</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <EducationContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <h2>Professional Experiences</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <JobsContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <h2>Projects and Coursework</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <ProjectsContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <h2>Others</h2>
            </Col>
         </Row>
         <Row className="my-3">
            <Col>
               <OthersContainer />
            </Col>
         </Row>
         <hr style={nameStyle} />
         <Row className="my-3">
            <Col className="text-center">
               <ContactsContainer />
            </Col>
         </Row>
         <Row className="my-3">
            <Col className="text-center">
               <span className="d-inline-block mr-3">
                  Created with
                     {" "}
                  <a
                     style={linkStyle}
                     href="https://nextjs.org/"
                     rel="nofollow noreferrer"
                     target="_blank"
                  >
                     Next.js
                     </a>
                  {" "}
                    and
                     {" "}
                  <a
                     style={linkStyle}
                     href="https://react-bootstrap.github.io/"
                     rel="nofollow noreferrer"
                     target="_blank"
                  >
                     React Bootstrap
                     </a>
               </span>
            </Col>
         </Row>
         <Row className="my-3">
            <Col className="text-center">
               <span className="d-inline-block mr-3">
                  Updated on
                     {" "}
                  {buildTimestamp}
               </span>
            </Col>
         </Row>
      </Container>
   );
}

export default MainFrame;
