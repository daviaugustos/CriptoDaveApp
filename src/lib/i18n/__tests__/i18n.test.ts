import translate, { getCurrentLocale } from '~/lib/i18n/i18n'

describe('i18n translate lib', () => {
  it('should return translation for single scope', () => {
    expect(translate('app_version', { version: '0.0.7' })).toBe('Versão: 0.0.7')
  })

  it('should return missing message translation for valid scope with null', () => {
    const actual = translate('null_key')
    const expected = '[missing "pt-BR.null_key" translation]'
    expect(actual).toEqual(expected)
  })

  it('should return the default locale', () => {
    expect(getCurrentLocale()).toBe('pt-BR')
  })
})
