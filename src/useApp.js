import {
  language,
  muiTheme,
  name as titleText
} from '../package'
import useLocalization from './useLocalization'
import useMuiTheme from './useMuiTheme'

const useApp = () => ({
  titleText,
  localization: useLocalization(language),
  theme: useMuiTheme(muiTheme)
})

export default useApp
