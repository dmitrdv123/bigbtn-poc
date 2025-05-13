import { Form, Button, FloatingLabel, Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const SearchBar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Form>
      <Form.Group className="mb-2">
        <FloatingLabel label={t('components.search_bar.desc')}>
          <Form.Control
            as="textarea"
            placeholder={t('components.search_bar.desc')}
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>

      <div className="d-flex align-items-center gap-2 mb-2">
        <Button variant="primary" className="btn-lg" href="#">
          {t('components.search_bar.button')}
        </Button>

        <Dropdown>
          <Dropdown.Toggle variant="outline-secondar">
            ChatGPT
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">{t('components.search_bar.engine_chatgpt')}</Dropdown.Item>
            <Dropdown.Item href="#">{t('components.search_bar.engine_grok')}</Dropdown.Item>
            <Dropdown.Item href="#">{t('components.search_bar.engine_gemini')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Form>
  )
}

export default SearchBar
