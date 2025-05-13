import { Container, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import AppNavbar from '../../components/AppNavbar'
import SearchBar from '../../components/SearchBar'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column vh-100">
      <AppNavbar />
      <Container className="d-flex flex-column justify-content-center flex-grow-1">
        <Col md={12}>
          <h1 className="text-center display-1">
            {t('pages.home.title')}
          </h1>
          <SearchBar />
        </Col>
      </Container>
    </div>
  )
}

export default Home
