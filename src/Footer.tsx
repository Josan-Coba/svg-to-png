import React, { ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'
import LanguageSelector from './i18n/LanguageSelector'

const Footer: React.FC = () => {
  return (
    <footer className="text-center">
      <div className="h-0.5 my-8 mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div>
        <LanguageSelector />
      </div>
      <div className="py-8">
        <FormattedMessage
          defaultMessage="Made with ❤️ by <a>Josan Coba</a>."
          id="app.footer.made-by"
          values={{
            a: profileLink,
          }}
        />
      </div>
    </footer>
  )
}

function profileLink(chunk: ReactNode) {
  return (
    <a
      className="font-display hover:underline font-semibold"
      href="https://github.com/Josan-Coba/"
    >
      {chunk}
    </a>
  )
}

export default Footer
