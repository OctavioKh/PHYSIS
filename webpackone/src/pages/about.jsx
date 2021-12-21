import React from 'react';
import { Navbar, NavLink, Col, Row, Image, Container } from 'react-bootstrap';
import '../App.css';
import abouty from '../assets/images/foto-01.png';
import Carousel from 'react-bootstrap/Carousel';
import myPDF from '../assets/AOMA_CV_2021.pdf';


const AboutPage = () => {
  return(
    <Container className="body" style={{textAlign:'left'}}> 
      <div>
        <h1>&nbsp;</h1>
        <h1> &nbsp;</h1>
        <Row>
<Col>
<Image width="200" src={abouty} className="foto-middle"/>
</Col>
<Col>
<h2>Octavio Marquez Arroyo</h2>
<span id="about-text">
 <b>Developer</b><br/>
Age_ 33<br/>
Gral. Gomez Pedraza 45,<br/>
San Miguel Chapultepec, 11850 - CDMX <br/>
+ 52 (656) 799 3668<br/>
octaviomrq@gmail.com</span>
</Col>
        </Row>

        <h1> &nbsp;</h1><h1> &nbsp;</h1>
      <h3 style={{textAlign:"center", fontWeight:"bold"}}>PROFILE</h3>{'\n'}
        <br />

<h1>&nbsp;</h1>
          


            <span id="about-text">&nbsp;&nbsp; - Experienced <b>Front-End Developer</b> with knowledge on Databases and UI design, with ample experience on graphical design. Equipped with a diverse and promising skill-set. Proficient in multiple languages, frameworks and libraries, specially with the latest cutting edge development tools and procedures.  Great self-management skills when working with independent projects and high proactivity when working on a team. 
            </span>
            <h1>&nbsp;</h1>   
            <h3 style={{textAlign:"center", fontWeight:"bold"}}>Skills and Technologies</h3>{'\n'}
          
          <br/>
          <Row>
          <Col>
          <ul id="servicios">
            <b>
            <li> HTML5 / CSS3 / SASS</li>
            <li> Javascript / ES6 / JQuery / TypeScript</li>
            <li> React Js</li>
            <li> Node Js/ Express Js</li>
            <li> PHP 8</li>
            <li>Bootstrap / Material UI</li>
            <li>MongoDB</li>
            <li> SQL - mySQL</li>
            </b>
          </ul>
          </Col>

          <Col>
          <ul id="servicios">
            <b>
            <li> JSON,  XML</li>
            <li> Webpack</li>
            <li> AWS S3 / EC2</li>
            <li> Adobe Creative Suite: PS, AI, AE, DW, ID, XD </li>
            <li> Unity (C#) </li>
            <li> Liquid / CMS Mgmt</li>
            <li> GIT</li>
            <li> C4D</li>
            </b>
          </ul>
          </Col>
          </Row>
          <h1>&nbsp;</h1>
          <h3>Education and Workshops</h3>
          <span id="about-text">

            <ul>
<li><b>Lic. in Visual Arts</b> - Universidad Autonoma de Nuevo León - Monterrey, NL 2005 - 2008</li>
<li> <b>Web Design</b> CETI @ UANL - Monterrey, NL 2010 </li> 
<li>Photography X Justin William Lin, BKC Brooklyn Central,New York - 2011</li>
<li>Creative Writing - Gothams Writers, Manhattan, New York - 2012</li>
<li>Workshop: MAX/MSP + Jitter - Centro Cultural Border CDMX - 2013</li>
<li>Workshop: Internet’s Political Philosophy / Internet Literature X Johannes Thumfart - Centro de Cultura Digital CDMX - 2014</li>
<li>Workshop: Game Jam - Centro de Cultura Digital CDMX - 2014</li>
<li>Cursos: JQUERY, JAVASCRIPT - ESCUELA 3CT. CDMX 2015/2017</li>
<li>Workshop: Typography Development, NA Sodio 2016</li>
<li><b>Artist Residency</b> x RBMA @ FUNKHAUS Berlin: Berlin, Germany 2018</li>
<li>Cursos: PHP, BOOTSTRAP, SASS, ES6, DATABASES / SQL / mySQL, MERN STACK:
REACT JS, NODE JS, REDUX, MONGODB, EXPRESS JS
  FREECODECAMP.ORG + W3Schools - Online 2019/2020 </li>
            </ul>
  </span> 

  <h1> &nbsp;</h1>

  <Row>

  <Col>
          <h3 style={{textAlign:"center", fontWeight:"bold"}}>Working Skills</h3>{'\n'}
          <ul id="servicios">
            <li> Analytical Thinking Skills</li>
            <li> Creative Management</li>
            <li> Creative Thinking</li>
            <li> Communication</li>
            <li> Initiative </li>
            <li> Leadership </li>
            <li> Organization</li>
            <li> ProActive</li>
            <li> Problem Solving Thinking</li>
            <li> Prioritizing</li>
            <li> Team Work</li>
            <li> Time Management </li>
            <li> Work under pressure</li>
          </ul>
          </Col>
          <Col>
          <h3 style={{textAlign:"center", fontWeight:"bold"}}>Creative Skills</h3>{'\n'}

          <ul id="servicios">
            <li> FRONT-END Development</li>
            <li> Databases (Relational and non relational)</li>
            <li> UI/UX</li>
            <li> Branding and Identity</li>
            <li> Concept Development</li>
            <li> Content Development</li>
            <li> Art Direction</li>
            <li> Editorial Design</li>
            <li> Design and construction of typographies</li>
            <li> Audiovisual Production and Edition</li>
            <li> Customer Service Skills (5 years experience)</li>
          </ul>
          </Col>
          </Row>
          <h1>&nbsp;</h1>
          <h3>Employment History</h3>
          <span id="about-text">

            <ul>
<li>@ XBOX, ATnT, GE consumer finance, Dish - 2005-2010 // <b>Tech Support CSR and Supervisor</b></li>
<li>@ EXU Media. Manhattan, New York - 2010-2012 // <b>Production Assistant</b> </li> 
<li>@ Grupo Oro. Oaxaca. Oaxaca - 2013-2014 // <b>Creative Direction</b></li>
<li>@ NA SODIO. CDMX - 2015- 2017 // <b>WEB Programming and Graphical Design</b></li>
<li>@ Akiaora, Tulum - 2018-2020 // <b>Developer Lead Programmer</b> <br/>
	Design, Development and Management of 3 Websites <br/>
	_ Sally Montes / Former Client + 1 (805) 490 - 4589
</li>
<li>@ Sanitary Tortilla Company,  San Antonio TX  - 2020 // <b>	Lead Programmer </b> <br/>
	Design, Development and Management of Website using Liquid <br/>
	_ Andres Saviñon  Former Employer  + 1 (737) 213-3593</li>
<li><b>@ Freelancer - Graphical design and FRONTEND development 2010 - 2020
	- Front-End Development with React JS </b></li>
            </ul>
  </span> 

  <h1> &nbsp;</h1>

<Row>
<Col>          <h3>Interests</h3>
<ul>
  <li>
    Blockchain Technology
  </li>
  <li>Deep Learning</li>
  <li>Computer Vision</li>
  <li>Neural Language Processing</li>
</ul>
</Col> 
<Col>          <h3>Languages</h3>
<ul>
  <li>
    English - 100% <br/>
    (2 years living in NYC)
  </li>
  <li>
    Spanish - 100% 
  </li>
</ul>
</Col>
<Col>          <h3>Hobbies</h3>
<li>
  Meditation
</li>
<li>Excercise at Gym</li>

</Col>

</Row>
<h1>&nbsp;</h1>
<a href={myPDF} className="animacion" download="AOMA_CV.pdf"><h3><span style={{textAlign:"center"}} role="img" aria-label="arrow">
      DOWNLOAD PDF 👓 💼 📄 </span></h3></a>
<h1>&nbsp;</h1>
        </div>
        <br />
        

          </Container>
          
          
          );
        }
        

export default AboutPage; 