import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container as="main" fluid className="p-0">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default MainLayout
