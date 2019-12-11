import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  // TODO: Set language
  const [language] = useState(initialState)

  const vocabulary = useMemo(() => vocabularies[language], [language])

  const Phrase = useMemo(
    () => ({ children: phrase }) => vocabulary[phrase] || phrase,
    [vocabulary]
  )

  return { language, Phrase }
}

export default useLocalization
