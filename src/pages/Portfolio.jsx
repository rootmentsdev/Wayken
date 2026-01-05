import Container from 'react-bootstrap/Container'
import SEO from '../components/SEO/SEO'

const Portfolio = () => {
  return (
    <>
      <SEO 
        title="Portfolio | Wayken Holdings"
        description="View our portfolio of successful projects at Wayken Holdings"
        keywords="wayken, holdings, portfolio, projects"
      />
      <Container className="py-5">
        <h1>Our Portfolio</h1>
        <p className="text-secondary">View our work</p>
      </Container>
    </>
  )
}

export default Portfolio
