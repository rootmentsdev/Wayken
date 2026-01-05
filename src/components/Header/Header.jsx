import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const navLinkStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '100%',
    textDecoration: 'none'
  }

  const getNavLinkStyle = (isActive) => ({
    ...navLinkStyle,
    borderBottom: isActive ? '2px solid #7c3aed' : '2px solid transparent',
    paddingBottom: '4px',
    color: isActive ? '#1a1a1a' : '#6b7280'
  })

  const handleNavClick = () => {
    setExpanded(false)
  }

  return (
    <Navbar 
      expand="lg" 
      bg="white" 
      className="py-3 border-bottom"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex flex-column">
          <span 
            className="fw-bold text-dark" 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.5rem', 
              letterSpacing: '0.15em',
              fontWeight: 700
            }}
          >
            WAYKEN
          </span>
          <small 
            className="text-secondary" 
            style={{ 
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.6rem', 
              letterSpacing: '0.2em',
              fontWeight: 500
            }}
          >
            HOLDINGS
          </small>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="main-navbar" 
          className="border-0 shadow-none"
        />
        
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="mx-auto flex-column flex-lg-row py-3 py-lg-0">
            <NavLink 
              to="/" 
              end
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              About
            </NavLink>
            <NavLink 
              to="/service" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Service
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/blog" 
              className="nav-link mx-lg-2 my-2 my-lg-0"
              style={({ isActive }) => getNavLinkStyle(isActive)}
              onClick={handleNavClick}
            >
              Blog
            </NavLink>
          </Nav>

          <div className="py-3 py-lg-0">
            <Button 
              variant="outline-dark" 
              className="rounded-pill px-4"
              style={navLinkStyle}
              onClick={handleNavClick}
            >
              Get In Touch
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
