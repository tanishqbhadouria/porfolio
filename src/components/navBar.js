import { Navbar, Nav,Container } from "react-bootstrap"
import { useState,useEffect } from "react";
import logo from '../assets/img/logo.svg';
import instagram from '../assets/img/instagram.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLInk = (value) => {
      setActiveLink(value);
    }
  

    return   (<Navbar expand="md" className={scrolled?"scrolled":""} >
    <Container>
      <Navbar.Brand href="/">
        <img  src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLInk('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLInk('skills')} >Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLInk('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.instagram.com/tanishq_bhadouria/"><img src={instagram} alt="" /></a>
            <a href="https://www.linkedin.com/in/tanishq-singh-bhadouria-b2a384256/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/tanishqbhadouria"><img src={github} alt="" /></a>
          </div>
         
            <button className="vvd"><span>Let’s Connect</span></button>
          
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
