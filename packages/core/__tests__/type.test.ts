import Type from '../src/type'

test("测试:是否为对象/纯粹对象/空对象", () => {
    expect(Type.isObject({ name: 'gf' })).toEqual(true);
    expect(Type.isPlainObject({})).toEqual(true);
    expect(Type.isEmptyObject({})).toEqual(true);
    expect(Type.isEmptyObject(null)).toEqual(false);
    expect(Type.isEmptyObject(undefined)).toEqual(false);
    expect(Type.isEmptyObject("")).toEqual(false);
    expect(Type.isEmptyObject(111)).toEqual(false);
})


test("测试:是否为数组/空数组", () => {
    expect(Type.isArray([1, , 2])).toEqual(true);
    expect(Type.isEmptyArray([])).toEqual(true);
    expect(Type.isEmptyArray([''])).toEqual(false);
    expect(Type.isEmptyArray(null)).toEqual(false);
    expect(Type.isEmptyArray(undefined)).toEqual(false);
})

test("测试:是否为函数/空函数", () => {
    expect(Type.isFunction(function () { return 'gf-ui' })).toEqual(true);
    expect(Type.isFunction(() => { })).toEqual(true);
    expect(Type.isEmptyFuction(() => { })).toEqual(true);
    expect(Type.isEmptyFuction(function () { })).toEqual(true);
    expect(Type.isEmptyFuction(function () { return 111 })).toEqual(false);
})

test('测试：是否为字符串/空字符串/JSON字符串', () => {
    expect(Type.isString('gf-ui')).toEqual(true)
    expect(Type.isEmptyString('')).toEqual(true)
    expect(Type.isEmptyString('   ')).toEqual(true)
    expect(Type.isJsonString('gf-ui')).toEqual(false)
    expect(Type.isJsonString('[{"name":"gf-ui"}]')).toEqual(true)
})

test('测试：是否为数字/布尔/GUID/邮箱/身份证', () => {
    expect(Type.isNumber(1)).toEqual(true)
    expect(Type.isBoolean(true)).toEqual(true)
    expect(Type.isGuid('CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9')).toEqual(true)
    expect(Type.isEmail('1454556135@qq.com')).toEqual(true)
    expect(Type.isIdCard('360731199309078781')).toEqual(true)
})


test('测试：是否为手机/座机/电话', () => {
    expect(Type.isMobilePhone('18720706348')).toEqual(true)
    expect(Type.isTelPhone('010-66668888')).toEqual(true)
    expect(Type.isPhone('18720706348')).toEqual(true)
})


test('测试：是否为合法密码(由8~30位数字/字母/下划线组成)', () => {
    expect(Type.isValidPassword('gf-ui')).toEqual(false)
    expect(Type.isValidPassword('gf-ui/core@1.0.0')).toEqual(true)
    expect(Type.isValidPassword('gf-ui/core@1.0.0', { min: 5, max: 10 })).toEqual(false)
})


test('测试：是否为合法日期', () => {
    expect(Type.isValidDate('gf-ui')).toEqual(false)
    expect(Type.isValidDate(new Date())).toEqual(true)
    expect(Type.isValidDate(new Date('2022-01-01 00:00:00'))).toEqual(true)
})

test('测试：是否为真或0(排除null,undefined)', () => {
    expect(Type.isTrueOrZero('gf-ui')).toEqual(true)
    expect(Type.isTrueOrZero(0)).toEqual(true)
    expect(Type.isTrueOrZero('0')).toEqual(true)
    expect(Type.isTrueOrZero(null)).toEqual(false)
    expect(Type.isTrueOrZero(undefined)).toEqual(false)
})

test('测试：转化默认值(当值为undefined)', () => {
    expect(Type.def(null, 'gf-ui')).toEqual('gf-ui')
    expect(Type.def(undefined, 'gf-ui')).toEqual('gf-ui')
    expect(Type.def('@gf-ui/core', 'gf-ui')).toEqual('@gf-ui/core')
})

test('测试：JSON转化(当转化不成功则返回默认值)', () => {
    expect(Type.json('', 'gf-ui')).toEqual('gf-ui')
    expect(Type.json('', [])).toEqual([])
    expect(Type.json('', {})).toEqual({})
    expect(Type.json('[{"name":"gf-ui"}]', [])).toEqual([{ "name": "gf-ui" }])
    expect(Type.json('{"name":"gf-ui"}', {})).toEqual({ "name": "gf-ui" })
})