import { ChangeEventHandler, ReactElement, useCallback } from 'react'
import { LocaleCode, useI18n } from './I18nProvider'

export default function LanguageSelector(): ReactElement {
  const { availableLocales, currentLocale, setLocale } = useI18n()
  const onChangeSelectedLanguage = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((event) => setLocale(event.target.value as LocaleCode), [setLocale])

  // TODO: Add a localized label for screen readers only
  return (
    <label className="inline-block rounded-lg">
      <select
        className=" bg-white capitalize tpg-controller rounded-lg border-secondary shadow ringed-focus focus:border-secondary focus:ring-inset active:shadow-none"
        defaultValue={currentLocale}
        onChange={onChangeSelectedLanguage}
      >
        {availableLocales.map(({ code, ownDisplayName }) => (
          <option className="capitalize tpg-controller" key={code} value={code}>
            {ownDisplayName}
          </option>
        ))}
      </select>
    </label>
  )
}
