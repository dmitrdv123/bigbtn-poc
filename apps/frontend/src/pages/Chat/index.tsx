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
  imageUrl: [
    'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    'https://images.pexels.com/photos/163143/laptop-computer-notebook-mouse-163143.jpeg',
    'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg',
    'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg',
    'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg',
    'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
    'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
    'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg',
    'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
    'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg'
  ][index]
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