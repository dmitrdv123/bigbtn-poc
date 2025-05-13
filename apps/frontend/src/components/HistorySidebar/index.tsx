import { Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const HistorySidebar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Nav className="flex-column p-3">
      <Nav.Link href="#">{t('sidebar.link1')}</Nav.Link>
      <Nav.Link href="#">{t('sidebar.link2')}</Nav.Link>
      <Nav.Link href="#">{t('sidebar.link3')}</Nav.Link>
    </Nav>
  )
}

export default HistorySidebar
