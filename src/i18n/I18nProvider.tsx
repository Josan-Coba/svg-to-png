import React, { useEffect, useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'
import messages_en from './compiled-translations/en.json'
import messages_es from './compiled-translations/es.json'

export type LocaleCode = 'en' | 'es'
type LocaleData = {
  readonly code: LocaleCode
  readonly messages: Record<string, string>
  readonly ownDisplayName: string
}
type LocaleDataRecord = Readonly<Record<LocaleCode, LocaleData>>
export type LocaleList = readonly {
  readonly code: LocaleCode
  readonly ownDisplayName: string
}[]
type I18nState = {
  readonly availableLocales: LocaleList
  readonly currentLocale: LocaleCode
  readonly setLocale: (code: LocaleCode) => void
}

const localeData: LocaleDataRecord = Object.freeze({
  en: Object.freeze<LocaleData>({
    code: 'en',
    messages: messages_en,
    ownDisplayName: 'English',
  }),
  es: Object.freeze<LocaleData>({
    code: 'es',
    messages: messages_es,
    ownDisplayName: 'Español',
  }),
})

const availableLocales: LocaleList = Object.freeze(
  Object.values(localeData).map(({ code, ownDisplayName }) =>
    Object.freeze({ code, ownDisplayName }),
  ),
)

const defaultLocale: LocaleCode = 'en'

const initialLocale = matchWithAvailableLanguages(
  detectPreferredLanguage(),
  localeData,
)

const I18nContext = React.createContext<I18nState | undefined>(undefined)

export const I18nProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<LocaleCode>(initialLocale)

  const value: I18nState = useMemo(
    () => ({
      availableLocales,
      currentLocale: locale,
      setLocale,
    }),
    [locale],
  )

  useEffect(() => {
    if (navigator.cookieEnabled) {
      document.cookie = `lang=${locale};path=/;max-age=31536000;samesite=strict`
    } else {
      localStorage.setItem('lang', locale)
    }
    document.getElementsByTagName('html')[0].setAttribute('lang', locale)
  }, [locale])

  return (
    <I18nContext.Provider value={value}>
      <IntlProvider
        defaultLocale="en"
        locale={locale}
        messages={localeData[locale].messages}
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nState {
  const context = React.useContext(I18nContext)
  if (typeof context === 'undefined') {
    throw new Error('`useLocale` must be used within a I18nProvider')
  }
  return context
}

// Private helper utilities
function detectPreferredLanguage(): string {
  if (navigator.cookieEnabled) {
    const match = /lang=([\w-]*)/i.exec(document.cookie)
    if (match && match[1]) {
      return match[1]
    }
  }
  return (
    localStorage.getItem('lang') ||
    // TODO: Take into account the rest of the user's preferences
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    defaultLocale
  )
}

function matchWithAvailableLanguages(
  selection: string,
  localeData: LocaleDataRecord,
): LocaleCode {
  const availableLocaleCodes = Object.keys(localeData) as LocaleCode[]
  const exactMatch = availableLocaleCodes.find((code) => code === selection)
  if (exactMatch) {
    return exactMatch
  }

  const matching = availableLocaleCodes.filter(
    (code) => code.startsWith(selection) || selection.startsWith(code),
  )
  if (matching.length) {
    return matching[0]
  }
  return defaultLocale
}
