import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(36px, 5vw, 62px)',
                  lineHeight: '114%',
                  letterSpacing: '-0.03em',
                  color: '#1a1a1a'
                }}
              >
                Building Legacies for
              </h1>
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(36px, 5vw, 62px)',
                  lineHeight: '114%',
                  letterSpacing: '-0.03em',
                  color: '#8A3E9D'
                }}
              >
                Generations to Come
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
                              fontFamily: 'Playfair Display, serif',
                              fontWeight: 700,
                              fontSize: '48px',
                              lineHeight: '1'
                            }}
                          >
                            230+
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
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600,
                            fontSize: 'clamp(24px, 3vw, 32px)',
                            lineHeight: '1.3'
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
    </>
  )
}

export default Home
