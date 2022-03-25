import * as RNLocalize from 'react-native-localize'

import I18n from 'i18n-js'

import { II18nParameter } from '~/@types/application/I18nApplication.types'
import enUS from '~/lib/i18n/locales/en-US.json'
import frCA from '~/lib/i18n/locales/fr-CA.json'

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag
}

I18n.defaultLocale = 'en-US'
I18n.fallbacks = true
I18n.translations = {
  'en-US': enUS,
  'fr-CA': frCA,
}

const translate = (key: string, parameter?: II18nParameter) =>
  I18n.t(key, parameter)

export const getCurrentLocale = () => I18n.currentLocale()

export default translate
