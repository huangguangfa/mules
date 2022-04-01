import Type from '../src/type'


test("测试:是否为对象/纯粹对象/空对象", () => {
    expect(Type.isObject({ name: 'gf' })).toEqual(true)
})