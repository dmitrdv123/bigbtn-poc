import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

interface ProductCardProps {
  name: string
  description: string
  price: number
  score: number
  imageUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  score,
  imageUrl
}) => {
  const { t } = useTranslation()

  const renderStars = (score: number) => {
    const stars = []
    const maxStars = 5
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <StarFill
          key={i}
          className={i <= score ? 'text-warning' : 'text-muted'}
          aria-label={i <= score ? 'Filled star' : 'Empty star'}
        />
      )
    }
    return stars
  }

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="h5 mb-0">${price.toFixed(2)}</span>
            <div>{renderStars(score)}</div>
          </div>
          <Button variant="primary" className="w-100">
            {t('pages.chat.buy')}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard