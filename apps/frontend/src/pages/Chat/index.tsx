import React, { useState } from 'react'
import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar'
import AppNavbar from '../../components/AppNavbar'
import HistorySidebar from '../../components/HistorySidebar'

const Chat: React.FC = () => {
  const { t } = useTranslation()
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClose = () => setShowSidebar(false)
  const handleShow = () => setShowSidebar(true)

  return (
    <div className="d-flex flex-column vh-100">
      <AppNavbar />

      <Button variant="outline-secondary"
        className="m-2 d-md-none align-self-end"
        onClick={handleShow}
      >
        <ChevronRight />
      </Button>

      <Container fluid className="d-flex flex-grow-1">
        <Row className="flex-grow-1 w-100">
          {/* Main content */}
          <Col xs={12} md={9} className="d-flex flex-column">
            <h1 className="text-center display-1">
              {t('pages.chat.title')}
            </h1>
            <div className="mt-auto">
              <SearchBar />
            </div>
          </Col>

          <Col md={3} className="d-none d-md-block border-start">
            <HistorySidebar />
          </Col>
        </Row>
      </Container>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <HistorySidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Chat
