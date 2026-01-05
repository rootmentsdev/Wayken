import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const Home = () => {
  return (
    <>
      <SEO 
        title="Home | Wayken Holdings"
        description="Welcome to Wayken Holdings - Your trusted partner for business solutions"
        keywords="wayken, holdings, home, business"
      />
      
      {/* Hero Section */}
      <div 
        style={{ 
          backgroundColor: '#f0f0f0',
          minHeight: '90vh'
        }}
      >
        <Container className="py-5">
          <Row className="align-items-center min-vh-75">
            {/* Left Column - Content */}
            <Col lg={6} className="mb-5 mb-lg-0">
              {/* Main Heading */}
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(42px, 8vw, 62px)',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  color: '#1a1a1a'
                }}
              >
                Building Legacies for{' '}
                <span style={{ color: '#8A3E9D' }}>
                  Generations to Come
                </span>
              </h1>
              
              {/* Description */}
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#6c757d',
                  maxWidth: '500px'
                }}
              >
                Wayken is a long-term investment holding company. We partner with founders and families who care about durability, discipline, and steady value creation — not quick exits.
              </p>
              
              {/* Buttons */}
              <div className="d-flex gap-4 flex-wrap align-items-center">
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{
                      background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 32px',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      letterSpacing: '0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    Get In Touch
                    <span>→</span>
                  </Button>
                </Link>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      letterSpacing: '0.5px',
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      borderBottom: '2px solid #1a1a1a',
                      paddingBottom: '2px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Our Portfolio
                  </span>
                </div>
              </div>
            </Col>

            {/* Right Column - Cards */}
            <Col lg={6}>
              <div className="position-relative">
                {/* Top Row */}
                <Row className="mb-3 g-3">
                  {/* Image Card */}
                  <Col xs={12} md={6}>
                    <Card 
                      className="border-0 shadow-sm"
                      style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        height: '200px'
                      }}
                    >
                      <div 
                        style={{
                          backgroundColor: '#d4d4d4',
                          height: '100%',
                          position: 'relative'
                        }}
                      >
                        {/* Placeholder for image */}
                      </div>
                    </Card>
                  </Col>
                  
                  {/* Stats Card */}
                  <Col xs={12} md={6}>
                    <Card 
                      className="border-0 shadow-sm"
                      style={{
                        background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                        borderRadius: '20px',
                        height: '200px',
                        position: 'relative'
                      }}
                    >
                      <Card.Body className="text-white d-flex flex-column justify-content-between p-4">
                        {/* Icon */}
                        <div 
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          <span style={{ fontSize: '24px' }}>↗</span>
                        </div>
                        
                        {/* Number */}
                        <div>
                          <h2 
                            className="mb-2"
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontWeight: 700,
                              fontSize: '48px',
                              lineHeight: '1'
                            }}
                          >
                            30+
                          </h2>
                          <p 
                            className="mb-0"
                            style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '13px',
                              lineHeight: '1.4',
                              opacity: 0.9
                            }}
                          >
                            some big companies that we work with, and trust us very much
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                {/* Bottom Card */}
                <Row>
                  <Col xs={12}>
                    <Card 
                      className="border-0 shadow-sm"
                      style={{
                        background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                        borderRadius: '20px',
                        minHeight: '180px'
                      }}
                    >
                      <Card.Body className="text-white p-4">
                        {/* Header */}
                        <div className="d-flex align-items-center mb-3">
                          <div 
                            style={{
                              width: '40px',
                              height: '2px',
                              backgroundColor: 'white',
                              marginRight: '12px'
                            }}
                          ></div>
                          <span 
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              fontSize: '11px',
                              fontWeight: 600,
                              letterSpacing: '1.5px',
                              textTransform: 'uppercase'
                            }}
                          >
                            Trust-Led & Thoughtful
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 
                          className="mb-0"
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontWeight: 600,
                            fontSize: '32px',
                            lineHeight: '130%',
                            letterSpacing: '-2%'
                          }}
                        >
                          Thoughtful ownership.
                          <br />
                          Businesses built to last.
                        </h3>
                        
                        {/* Decorative bars */}
                        <div className="d-flex gap-2 mt-4">
                          <div 
                            style={{
                              width: '60px',
                              height: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              borderRadius: '4px'
                            }}
                          ></div>
                          <div 
                            style={{
                              width: '80px',
                              height: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              borderRadius: '4px'
                            }}
                          ></div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Our Purpose Section */}
      <div 
        style={{ 
          backgroundColor: '#f8f9fa',
          padding: '80px 0'
        }}
      >
        <Container fluid className="px-3 px-md-4 px-lg-5">
          <Row className="align-items-center mb-5">
            {/* Left Column - Text */}
            <Col lg={6} className="mb-4 mb-lg-0">
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#8A3E9D',
                    marginRight: '12px'
                  }}
                ></div>
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    fontFamily: 'Manrope, sans-serif',
                    color: '#8A3E9D'
                  }}
                >
                  OUR PURPOSE
                </span>
              </div>

              {/* Main Heading */}
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                We Exist to Nurture Businesses that Solves{' '}
                <span style={{ color: '#8A3E9D' }}>Real Problems.</span>
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0%',
                  color: '#6c757d',
                  maxWidth: '500px'
                }}
              >
                At Wayken, we believe in the power of patience. Our capital is steadfast, our vision is generational, and our commitment is absolute. We don't just allocate capital, we partner with founders and management teams to build enduring value across decades, not quarters.
              </p>
            </Col>

            {/* Right Column - Image */}
            <Col lg={6}>
              <div className="position-relative">
                <div 
                  style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#d4d4d4',
                    borderRadius: '20px',
                    border: '8px solid #8A3E9D'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Portfolio Focus Section */}
      <div 
        id="portfolio-section"
        style={{ 
          backgroundColor: '#ffffff',
          padding: '80px 0'
        }}
      >
        <Container fluid className="px-3 px-md-4 px-lg-5">
          {/* Section Header */}
          <Row className="mb-5">
            <Col>
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#8A3E9D',
                    marginRight: '12px'
                  }}
                ></div>
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    fontFamily: 'Manrope, sans-serif',
                    color: '#8A3E9D'
                  }}
                >
                  WHAT WE DO
                </span>
              </div>

              {/* Main Heading */}
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                Portfolio Focus
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0%',
                  color: '#6c757d',
                  maxWidth: '600px'
                }}
              >
                Our investments are concentrated in three key pillars that we believe form the foundation of a sustainable future.
              </p>
            </Col>
          </Row>

          {/* Cards Row */}
          <Row className="g-3 g-md-4">
            {/* Card 1 - Essential Resources */}
            <Col xs={12} md={6} lg={4}>
              <Card 
                className="border-0 h-100"
                style={{
                  borderRadius: '0',
                  overflow: 'hidden'
                }}
              >
                {/* Purple Rectangle */}
                <div 
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #8A3E9D 0%, #B553B9 100%)'
                  }}
                ></div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  <h4 
                    className="mb-3"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      lineHeight: '114%',
                      letterSpacing: '-6%',
                      color: '#1a1a1a'
                    }}
                  >
                    Essential Resources
                  </h4>
                  
                  <p 
                    className="mb-4 flex-grow-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#6c757d'
                    }}
                  >
                    Investing in water, agriculture, and energy solutions that sustain life and power progress. We look for scalable impact in resource management.
                  </p>

                  {/* Explore Sector Link */}
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: '30px',
                        height: '2px',
                        backgroundColor: '#8A3E9D',
                        marginRight: '12px'
                      }}
                    ></div>
                    <span 
                      className="text-uppercase"
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif',
                        color: '#8A3E9D',
                        cursor: 'pointer'
                      }}
                    >
                      EXPLORE SECTOR
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 - Consumer & Lifestyle */}
            <Col xs={12} md={6} lg={4}>
              <Card 
                className="border-0 h-100"
                style={{
                  borderRadius: '0',
                  overflow: 'hidden'
                }}
              >
                {/* Purple Rectangle */}
                <div 
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #8A3E9D 0%, #B553B9 100%)'
                  }}
                ></div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  <h4 
                    className="mb-3"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      lineHeight: '114%',
                      letterSpacing: '-6%',
                      color: '#1a1a1a'
                    }}
                  >
                    Consumer & Lifestyle
                  </h4>
                  
                  <p 
                    className="mb-4 flex-grow-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#6c757d'
                    }}
                  >
                    Building brands that resonate with modern consumers through quality, heritage, and innovation. We back businesses that define culture.
                  </p>

                  {/* Explore Sector Link */}
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: '30px',
                        height: '2px',
                        backgroundColor: '#8A3E9D',
                        marginRight: '12px'
                      }}
                    ></div>
                    <span 
                      className="text-uppercase"
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif',
                        color: '#8A3E9D',
                        cursor: 'pointer'
                      }}
                    >
                      EXPLORE SECTOR
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 - Tech & Infrastructure */}
            <Col xs={12} md={6} lg={4}>
              <Card 
                className="border-0 h-100"
                style={{
                  borderRadius: '0',
                  overflow: 'hidden'
                }}
              >
                {/* Purple Rectangle */}
                <div 
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #8A3E9D 0%, #B553B9 100%)'
                  }}
                ></div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  <h4 
                    className="mb-3"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      lineHeight: '114%',
                      letterSpacing: '-6%',
                      color: '#1a1a1a'
                    }}
                  >
                    Tech & Infrastructure
                  </h4>
                  
                  <p 
                    className="mb-4 flex-grow-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#6c757d'
                    }}
                  >
                    Laying the digital and physical foundations for the next century of global growth. We focus on critical enablers of the economy.
                  </p>

                  {/* Explore Sector Link */}
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: '30px',
                        height: '2px',
                        backgroundColor: '#8A3E9D',
                        marginRight: '12px'
                      }}
                    ></div>
                    <span 
                      className="text-uppercase"
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        fontFamily: 'Manrope, sans-serif',
                        color: '#8A3E9D',
                        cursor: 'pointer'
                      }}
                    >
                      EXPLORE SECTOR
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Leadership Section */}
      <div 
        id="leadership-section"
        style={{ 
          backgroundColor: '#f8f9fa',
          padding: '80px 0'
        }}
      >
        <Container fluid className="px-3 px-md-4 px-lg-5">
          {/* Section Header */}
          <Row className="mb-5">
            <Col>
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#8A3E9D',
                    marginRight: '12px'
                  }}
                ></div>
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    fontFamily: 'Manrope, sans-serif',
                    color: '#8A3E9D'
                  }}
                >
                  CONSORTIUM LEADERSHIP
                </span>
              </div>

              {/* Main Heading */}
              <h3 
                className="mb-5"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                Visionaries Leading the Way
              </h3>
            </Col>
          </Row>

          {/* Leadership Cards */}
          <Row className="g-4 mb-5">
            {/* Card 1 */}
            <Col xs={12} sm={6} lg={3}>
              <Card className="border-0 h-100" style={{ borderRadius: '0' }}>
                <div 
                  style={{
                    height: '280px',
                    backgroundColor: '#d4d4d4'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#1a1a1a'
                    }}
                  >
                    PRADEEP KUMAR
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#8A3E9D'
                    }}
                  >
                    Founder & CEO
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} sm={6} lg={3}>
              <Card className="border-0 h-100" style={{ borderRadius: '0' }}>
                <div 
                  style={{
                    height: '280px',
                    backgroundColor: '#d4d4d4'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#1a1a1a'
                    }}
                  >
                    PRADEEP KUMAR
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#8A3E9D'
                    }}
                  >
                    Founder & CEO
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} sm={6} lg={3}>
              <Card className="border-0 h-100" style={{ borderRadius: '0' }}>
                <div 
                  style={{
                    height: '280px',
                    backgroundColor: '#d4d4d4'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#1a1a1a'
                    }}
                  >
                    PRADEEP KUMAR
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#8A3E9D'
                    }}
                  >
                    Founder & CEO
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col xs={12} sm={6} lg={3}>
              <Card className="border-0 h-100" style={{ borderRadius: '0' }}>
                <div 
                  style={{
                    height: '280px',
                    backgroundColor: '#d4d4d4'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '180%',
                      letterSpacing: '0%',
                      color: '#1a1a1a'
                    }}
                  >
                    PRADEEP KUMAR
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#8A3E9D'
                    }}
                  >
                    Founder & CEO
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Philosophy Section */}
      <div 
        style={{ 
          backgroundColor: '#ffffff',
          padding: '80px 0'
        }}
      >
        <Container fluid className="px-3 px-md-4 px-lg-5">
          {/* Section Header */}
          <Row className="mb-5">
            <Col>
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#8A3E9D',
                    marginRight: '12px'
                  }}
                ></div>
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    fontFamily: 'Manrope, sans-serif',
                    color: '#8A3E9D'
                  }}
                >
                  OUR PHILOSOPHY
                </span>
              </div>

              {/* Main Heading */}
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                India-Based, <span style={{ color: '#8A3E9D' }}>Global Outlook.</span>
              </h3>

              {/* Description */}
              <p 
                className="mb-5"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0%',
                  color: '#6c757d',
                  maxWidth: '800px'
                }}
              >
                Rooted in the vibrant dynamism of the Indian economy, Wayken brings a unique perspective to global investing. We bridge markets, cultures, and opportunities, applying local insights to global challenges.
              </p>
            </Col>
          </Row>

          {/* Philosophy Cards */}
          <Row className="g-4">
            {/* Row 1 */}
            <Col xs={12} md={4}>
              <div>
                <h4 
                  className="mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    lineHeight: '114%',
                    letterSpacing: '-2%',
                    color: '#1a1a1a'
                  }}
                >
                  Long-Term Thinking
                </h4>
                <p 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '180%',
                    letterSpacing: '0%',
                    color: '#6c757d'
                  }}
                >
                  We ignore short-term noise to focus on<br />
                  fundamental value creation over decades.
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div>
                <h4 
                  className="mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    lineHeight: '114%',
                    letterSpacing: '-2%',
                    color: '#1a1a1a'
                  }}
                >
                  Responsible Investing
                </h4>
                <p 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '180%',
                    letterSpacing: '0%',
                    color: '#6c757d'
                  }}
                >
                  Ethical standards, community impact, and<br />
                  sustainability are core to our due diligence.
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div>
                <h4 
                  className="mb-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    lineHeight: '114%',
                    letterSpacing: '-2%',
                    color: '#1a1a1a'
                  }}
                >
                  Cross-Border Synergy
                </h4>
                <p 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '180%',
                    letterSpacing: '0%',
                    color: '#6c757d'
                  }}
                >
                  Leveraging networks across Asia, the Middle<br />
                  East, and Europe to unlock growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call to Action Section */}
      <div 
        style={{ 
          backgroundColor: '#0A0020',
          padding: '80px 0'
        }}
      >
        <Container fluid className="px-3 px-md-4 px-lg-5">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              {/* Main Heading */}
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: 'white'
                }}
              >
                Partner with us <span style={{ color: '#4ECDC4' }}>for the future.</span>
              </h3>

              {/* Description */}
              <p 
                className="mb-5"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0%',
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                We are always looking for aligned partners and visionary founders.<br />
                Let's create something meaningful together.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{
                      backgroundColor: '#4ECDC4',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '14px 32px',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#0A0020',
                      minWidth: '200px'
                    }}
                  >
                    Start a Conversation
                  </Button>
                </Link>
                
                <span 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: '0 10px'
                  }}
                >
                  Or
                </span>

                <Button 
                  variant="outline-light"
                  style={{
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '30px',
                    padding: '12px 32px',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'white',
                    backgroundColor: 'transparent',
                    minWidth: '200px'
                  }}
                >
                  View Open Roles
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
