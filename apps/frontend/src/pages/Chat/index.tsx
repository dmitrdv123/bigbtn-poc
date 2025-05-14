import React, { useState } from 'react'
import { Card, Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'
import { ChevronRight, Star, StarFill } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

import SearchBar from '../../components/SearchBar'
import AppNavbar from '../../components/AppNavbar'
import HistorySidebar from '../../components/HistorySidebar'

const Chat: React.FC = () => {
  const { t } = useTranslation()
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClose = () => setShowSidebar(false)
  const handleShow = () => setShowSidebar(true)

  const renderStars = (score: number) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <StarFill
          key={i}
          className={i <= score ? 'text-warning' : 'text-muted'}
          aria-label={i <= score ? 'Filled star' : 'Empty star'}
        />
      );
    }
    return stars;
  };

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
        <div className="flex-grow-1 d-flex flex-column">
          <div className="flex-grow-1 overflow-auto p-3">
            <div className="row">
              {Array.from({ length: 15 }).map((_, index) => (
                <div className=" mb-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Product {index + 1}</h5>
                      <p className="card-text">This is a sample product card.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
