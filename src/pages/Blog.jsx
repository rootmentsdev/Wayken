import Container from 'react-bootstrap/Container'
import SEO from '../components/SEO/SEO'

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | Wayken Holdings"
        description="Read the latest news and insights from Wayken Holdings"
        keywords="wayken, holdings, blog, news, insights"
      />
      <Container className="py-5">
        <h1>Blog</h1>
        <p className="text-secondary">Latest news and insights</p>
      </Container>
    </>
  )
}

export default Blog
