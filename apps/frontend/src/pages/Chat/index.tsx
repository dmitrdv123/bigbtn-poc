import React, { useState } from 'react'
import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar'
import AppNavbar from '../../components/AppNavbar'
import HistorySidebar from '../../components/HistorySidebar'
import ProductCard from '../../components/ProductCard'

const SAMPLE_PRODUCTS = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: 'This is a sample product with a detailed description that showcases its features and benefits.',
  price: 29.99 + index * 10,
  score: Math.min(5, Math.ceil(Math.random() * 5)),
  imageUrl: `https://images.pexels.com/photos/${1000 + index}/pexels-photo-${1000 + index}.jpeg`
}))

const Chat: React.FC = () => {
  const { t } = useTranslation()
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClose = () => setShowSidebar(false)
  const handleShow = () => setShowSidebar(true)

  return (
    <div className="d-flex flex-column vh-100">
      <AppNavbar />

      <Button
        variant="outline-secondary"
        className="m-2 d-lg-none align-self-end"
        onClick={handleShow}
      >
        <ChevronRight />
      </Button>

      <div className="flex-grow-1 d-flex overflow-hidden">
        <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
          <div className="flex-grow-1 overflow-auto p-3">
            <Container fluid>
              <Row>
                {SAMPLE_PRODUCTS.map((product) => (
                  <Col xs={12} md={6} xl={4} className="mb-3" key={product.id}>
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      score={product.score}
                      imageUrl={product.imageUrl}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          <div className="mt-auto p-2">
            <SearchBar />
          </div>
        </div>

        <div className="history-sidebar overflow-auto border-start d-none d-lg-block">
          <div className="p-3">
            <HistorySidebar />
          </div>
        </div>
      </div>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <div className="p-3">
            <HistorySidebar />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Chat