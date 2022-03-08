import React, { ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'
import LanguageSelector from './i18n/LanguageSelector'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const githubLogo = require('./images/GitHub-Mark-32px.png') as string

const Footer: React.FC = () => {
  return (
    <footer className="text-center">
      <div className="h-0.5 my-8 mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div>
        <LanguageSelector />
      </div>
      <div className="pt-6">
        <a
          href="https://github.com/Josan-Coba/svg-to-png"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="GitHub Repository" className="mx-auto" src={githubLogo} />
        </a>
      </div>
      <div className="pt-6 pb-8 align-middle tpg-body-2">
        <FormattedMessage
          defaultMessage="Made with ❤️ by <a>Josan</a>"
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
      rel="noreferrer"
      target="_blank"
    >
      {chunk}
    </a>
  )
}

export default Footer
