import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AppNavbar: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <Navbar expand="md" className="bg-body-tertiary" sticky='top'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          BigBtn
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              title={t('components.app_navbar.language', { language: i18n.resolvedLanguage?.toLocaleUpperCase() ?? 'EN' })}
              align='end'
            >
              {['EN', 'DE', 'SP'].map(lang => (
                <NavDropdown.Item
                  as='button'
                  key={lang}
                  active={lang === (i18n.resolvedLanguage ?? 'EN')}
                  onClick={() => i18n.changeLanguage(lang)}
                >
                  {lang.toLocaleUpperCase()}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Item>
              <Nav.Link as={Button}>
                {t('components.app_navbar.logout_btn')}
              </Nav.Link >
            </Nav.Item >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
