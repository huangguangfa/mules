import Formatter from "../src/formatter";


test('测试：格式化数字', () => {
    expect(Formatter.integer(10242048.23456)).toEqual('10242048')
    expect(Formatter.number(10242048.23456)).toEqual('10242048.23')
    expect(Formatter.number(10242048.23456, 3)).toEqual('10242048.235')
    expect(Formatter.price(10242048.23456)).toEqual('10,242,048.23')
    expect(Formatter.price(10242048.23456, 3)).toEqual('10,242,048.235')
  })
  
  test('测试：格式化正数', () => {
    expect(Formatter.positive('mate100')).toEqual('100')
    expect(Formatter.positive('0100')).toEqual('0')
    expect(Formatter.positive('0.100')).toEqual('0')
    expect(Formatter.positiveNumber('mate.100')).toEqual('100')
    expect(Formatter.positiveNumber('00.100')).toEqual('0.10')
    expect(Formatter.positiveNumber('0.10.0')).toEqual('0.10')
    expect(Formatter.positiveNumber('00.10.0', 3)).toEqual('0.100')
  })
  
  test('测试：格式化日期', () => {
    const timestamp = 1350052653
    expect(Formatter.date(timestamp)).toEqual('2012-10-12')
    expect(Formatter.datetime(timestamp)).toEqual('2012-10-12 22:37:33')
    expect(Formatter.shortDatetime(timestamp)).toEqual('2012-10-12 22:37')
    expect(Formatter.time(timestamp)).toEqual('22:37:33')
    expect(Formatter.shortTime(timestamp)).toEqual('22:37')
  })
  
  test('测试：格式化字符串', () => {
    expect(Formatter.kebab('GfUI')).toEqual('gf-ui')
    expect(Formatter.camel('GfUI')).toEqual('gfUI')
    expect(Formatter.uncamel('gfUI')).toEqual('gf_UI')
    expect(Formatter.uncamel('gfUI', '-', 'lower')).toEqual('gf-ui')
    expect(Formatter.uncamel('gfUI', '_', 'upper')).toEqual('GF_UI')
    expect(Formatter.upperFirst('gfUI')).toEqual('GfUI')
    expect(Formatter.lowerFirst('GfUI')).toEqual('gfUI')
  })
  