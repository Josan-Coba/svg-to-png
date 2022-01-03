import { ReactElement } from 'react'
import Footer from './Footer'
import FrontPage from './FrontPage'
import { I18nProvider } from './i18n/I18nProvider'
import './styles.css'

export default function Main(): ReactElement {
  return (
    <>
      <I18nProvider>
        <div className="text-secondary min-h-full max-w-7xl mx-8 xl:mx-auto">
          <main>
            <FrontPage />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </>
  )
}
