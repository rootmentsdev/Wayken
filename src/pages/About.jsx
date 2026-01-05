import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import SEO from '../components/SEO/SEO'

const About = () => {
  return (
    <>
      <SEO 
        title="About | Wayken Holdings"
        description="Learn more about Wayken Holdings and our mission - Why Wayken Exists"
        keywords="wayken, holdings, about, company, vision, mission"
      />
      
      {/* Hero Section */}
      <div 
        className="min-vh-100 py-4 py-md-5"
        style={{ 
          backgroundColor: '#09001D',
          fontFamily: 'Manrope, sans-serif'
        }}
      >
        <Container className="py-3 py-md-5">
          {/* Header Section */}
          <Row className="justify-content-center text-center mb-4 mb-md-5">
            <Col xs={12} lg={10}>
              {/* About Us Badge with Lines */}
              <div className="d-flex align-items-center justify-content-center mb-3 mb-md-4 d-none d-md-flex">
                <div 
                  className="flex-grow-1 me-2 me-md-4 d-none d-sm-block"
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #783691 50%, transparent 100%)',
                    maxWidth: '200px'
                  }}
                ></div>
                <span 
                  className="text-uppercase px-2 px-md-3"
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    color: '#783691',
                    fontFamily: 'Manrope, sans-serif',
                    whiteSpace: 'nowrap'
                  }}
                >
                  ABOUT US
                </span>
                <div 
                  className="flex-grow-1 ms-2 ms-md-4 d-none d-sm-block"
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #783691 50%, transparent 100%)',
                    maxWidth: '200px'
                  }}
                ></div>
              </div>
              
              {/* Main Heading */}
              <h1 
                className="text-white mb-3 mb-md-4 about-header"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(42px, 8vw, 62px)',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  textAlign: 'center'
                }}
              >
                <span className="d-block d-md-inline">Why Wayken</span>{' '}
                <span style={{ fontStyle: 'italic', color: '#B553B9' }} className="d-block d-md-inline">
                  Exists
                </span>
              </h1>
              
              {/* Description Text */}
              <div className="about-description" style={{ 
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 15px'
              }}>
                {/* Desktop version - single paragraph */}
                <p 
                  className="text-white-50 d-none d-md-block"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    textAlign: 'center'
                  }}
                >
                  In a world driven by fast growth and faster exits, many good businesses are forced into decisions that don't serve them in the long run. We believe companies deserve the time, trust, and support needed to grow properly. Wayken was created to be a steady partner – one that stays committed through every stage of the journey.
                </p>

                {/* Mobile version - multiple paragraphs */}
                <div className="d-block d-md-none">
                  <p 
                    className="text-white-50 mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      textAlign: 'center'
                    }}
                  >
                    In a world driven by fast growth and faster exits, many good businesses are forced into decisions that don't serve them in the long run.
                  </p>
                  <p 
                    className="text-white-50 mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      textAlign: 'center'
                    }}
                  >
                    We believe companies deserve the time, trust, and support needed to grow properly. Wayken was created to be a steady partner –
                  </p>
                  <p 
                    className="text-white-50"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      textAlign: 'center'
                    }}
                  >
                    one that stays committed through every stage of the journey.
                  </p>
                </div>
              </div>

              {/* Add responsive styles */}
              <style>{`
                @media (max-width: 768px) {
                  .about-header {
                    text-align: left !important;
                  }
                  .about-description {
                    text-align: left !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                  }
                  .about-description p {
                    text-align: left !important;
                  }
                  .about-description div {
                    text-align: left !important;
                  }
                  .about-description div p {
                    text-align: left !important;
                  }
                }
                
                /* iPad specific styles for equal card heights */
                @media (min-width: 768px) and (max-width: 1024px) {
                  .vision-mission-card {
                    min-height: 280px !important;
                  }
                }
              `}</style>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="justify-content-center g-3 g-md-4">
            {/* Vision Card */}
            <Col xs={12} sm={10} md={6} lg={5} xl={5}>
              <Card 
                className="border-0 h-100 vision-mission-card"
                style={{
                  background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                  borderRadius: '16px'
                }}
              >
                <Card.Body className="text-white p-3 p-sm-4 d-flex flex-column">
                  {/* Vision Header */}
                  <div className="d-flex align-items-center mb-3 mb-md-4">
                    <div 
                      className="me-2 me-md-3"
                      style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: 'white'
                      }}
                    ></div>
                    <h5 
                      className="mb-0 text-uppercase"
                      style={{
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        fontWeight: 500,
                        letterSpacing: '1px',
                        fontFamily: 'Manrope, sans-serif'
                      }}
                    >
                      VISION
                    </h5>
                  </div>
                  
                  {/* Vision Text */}
                  <p 
                    className="mb-0 flex-grow-1"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: '1.6',
                      letterSpacing: '0%'
                    }}
                  >
                    To support and build businesses that matter – businesses designed to last, grow responsibly, and 
                    contribute meaningfully over the long term.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Mission Card */}
            <Col xs={12} sm={10} md={6} lg={5} xl={5}>
              <Card 
                className="border-0 h-100 vision-mission-card"
                style={{
                  background: 'linear-gradient(144.67deg, #030140 -2.61%, #783691 50.99%, #8A3E9D 51.88%, #7C3894 55.03%, #AB4EB2 124.89%, #B553B9 155.17%)',
                  borderRadius: '16px'
                }}
              >
                <Card.Body className="text-white p-3 p-sm-4 d-flex flex-column">
                  {/* Mission Header */}
                  <div className="d-flex align-items-center mb-3 mb-md-4">
                    <div 
                      className="me-2 me-md-3"
                      style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: 'white'
                      }}
                    ></div>
                    <h5 
                      className="mb-0 text-uppercase"
                      style={{
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        fontWeight: 500,
                        letterSpacing: '1px',
                        fontFamily: 'Manrope, sans-serif'
                      }}
                    >
                      MISSION
                    </h5>
                  </div>
                  
                  {/* Mission Text */}
                  <p 
                    className="mb-0 flex-grow-1"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: '1.6',
                      letterSpacing: '0%'
                    }}
                  >
                    To partner with founders by providing patient capital, strategic guidance, and long-term commitment—helping businesses 
                    grow without compromising their values or identity.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Leadership Section */}
      <div 
        className="py-5"
        style={{ 
          backgroundColor: '#f0f0f0'
        }}
      >
        <Container className="py-5">
          {/* Section Header */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="mb-3">
                <span 
                  className="text-uppercase"
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    color: '#8A3E9D',
                    fontFamily: 'Manrope, sans-serif'
                  }}
                >
                  CONSORTIUM LEADERSHIP
                </span>
              </div>
              
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 6vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                Visionaries Leading the Way
              </h2>
            </Col>
          </Row>

          {/* Leadership Cards - Staggered Layout */}
          <Row className="justify-content-center align-items-center g-4">
            {/* Card 1 - Top Left */}
            <Col lg={3} md={6} className="d-flex justify-content-center">
              <Card 
                className="border-0 shadow"
                style={{ 
                  borderRadius: '20px',
                  maxWidth: '280px',
                  width: '100%',
                  border: '4px solid #8A3E9D'
                }}
              >
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    backgroundColor: '#d4d4d4',
                    height: '300px'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      fontSize: '22px',
                      color: '#1a1a1a'
                    }}
                  >
                    John Jacob
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: '#8A3E9D',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    CEO & FOUNDER
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 - Bottom Left */}
            <Col lg={3} md={6} className="d-flex justify-content-center">
              <Card 
                className="border-0 shadow mt-lg-5"
                style={{ 
                  borderRadius: '20px',
                  maxWidth: '280px',
                  width: '100%',
                  border: '4px solid #8A3E9D'
                }}
              >
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    backgroundColor: '#d4d4d4',
                    height: '300px'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      fontSize: '22px',
                      color: '#1a1a1a'
                    }}
                  >
                    John Jacob
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: '#8A3E9D',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    CEO & FOUNDER
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 - Center Top */}
            <Col lg={3} md={6} className="d-flex justify-content-center">
              <Card 
                className="border-0 shadow"
                style={{ 
                  borderRadius: '20px',
                  maxWidth: '280px',
                  width: '100%',
                  border: '4px solid #8A3E9D'
                }}
              >
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    backgroundColor: '#d4d4d4',
                    height: '300px'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      fontSize: '22px',
                      color: '#1a1a1a'
                    }}
                  >
                    John Jacob
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: '#8A3E9D',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    CEO & FOUNDER
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 - Bottom Right */}
            <Col lg={3} md={6} className="d-flex justify-content-center">
              <Card 
                className="border-0 shadow mt-lg-5"
                style={{ 
                  borderRadius: '20px',
                  maxWidth: '280px',
                  width: '100%',
                  border: '4px solid #8A3E9D'
                }}
              >
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    backgroundColor: '#d4d4d4',
                    height: '300px'
                  }}
                >
                  {/* Placeholder for image */}
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 
                    className="mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600,
                      fontSize: '22px',
                      color: '#1a1a1a'
                    }}
                  >
                    John Jacob
                  </h5>
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: '#8A3E9D',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    CEO & FOUNDER
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Philosophy Section */}
      <div 
        className="py-5"
        style={{ 
          backgroundColor: '#f8f9fa'
        }}
      >
        <Container className="py-5">
          {/* First Row - Image Left, Text Right */}
          <Row className="align-items-center mb-5 pb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative d-flex justify-content-center justify-content-lg-start">
                <div 
                  className="position-absolute d-none d-lg-block"
                  style={{
                    width: 'min(400px, 90vw)',
                    height: '450px',
                    backgroundColor: '#030140',
                    borderRadius: '20px',
                    top: '-20px',
                    left: '-20px',
                    zIndex: 1
                  }}
                ></div>
                <div 
                  className="position-relative"
                  style={{
                    width: 'min(400px, 90vw)',
                    height: '450px',
                    backgroundColor: '#d4d4d4',
                    borderRadius: '20px',
                    zIndex: 2
                  }}
                >
                  {/* Placeholder for image */}
                </div>
              </div>
            </Col>
            <Col lg={6} className="px-3 px-lg-3">
              <h2 
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 6vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                Our Long-Term
              </h2>
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 6vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#8A3E9D',
                  fontStyle: 'italic'
                }}
              >
                Ownership Philosophy
              </h2>
              <p 
                className="text-secondary"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                We don't invest with an exit timeline. Our approach is built on long-term ownership, where decisions are made for durability, not speed. We stay invested, support leadership, and focus on building solid foundations that allow businesses to grow across generations. Success, for us, is measured in resilience and longevity.
              </p>
            </Col>
          </Row>

          {/* Second Row - Text Left, Image Right */}
          <Row className="align-items-center">
            <Col lg={6} className="order-2 order-lg-1 px-3 px-lg-3">
              <h2 
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 6vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#1a1a1a'
                }}
              >
                India Based,
              </h2>
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 6vw, 54px)',
                  lineHeight: '114%',
                  letterSpacing: '-6%',
                  color: '#8A3E9D',
                  fontStyle: 'italic'
                }}
              >
                Globally Connected
              </h2>
              <p 
                className="text-secondary mb-3"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 600
                }}
              >
                India-Based, Globally Connected
              </p>
              <p 
                className="text-secondary"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
              >
                Wayken is rooted in India, where long-term relationships and entrepreneurial resilience are deeply valued. At the same time, we remain globally connected - learning from international markets, partners, and best practices. This balance allows us to combine local understanding with a global perspective in everything we do.
              </p>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="position-relative d-flex justify-content-center justify-content-lg-end">
                <div 
                  className="position-absolute d-none d-lg-block"
                  style={{
                    width: 'min(400px, 90vw)',
                    height: '450px',
                    backgroundColor: '#030140',
                    borderRadius: '20px',
                    top: '20px',
                    right: '-20px',
                    zIndex: 1
                  }}
                ></div>
                <div 
                  className="position-relative"
                  style={{
                    width: 'min(400px, 90vw)',
                    height: '450px',
                    backgroundColor: '#d4d4d4',
                    borderRadius: '20px',
                    zIndex: 2
                  }}
                >
                  {/* Placeholder for image */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About