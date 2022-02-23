import translate, { getCurrentLocale } from '~/lib/i18n/i18n'

describe('i18n translate lib', () => {
  it('should return translation for single scope', () => {
    expect(translate('header_title.home')).toBe('Dave.')
  })

  it('should return missing message translation for valid scope with null', () => {
    const actual = translate('null_key')
    const expected = '[missing "en-US.null_key" translation]'
    expect(actual).toEqual(expected)
  })

  it('should return the default locale', () => {
    expect(getCurrentLocale()).toBe('en-US')
  })
})
