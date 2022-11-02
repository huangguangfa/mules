import Storage from "../src/storage/index"
import { SYMMETRIC_CRYPTO_TYPE, STORAGE_TYPE } from "../src/config"
const keys = {
    core: "core",
    web: "web"
}

const def = 'mate-ui';

const values = {
    core: "@gf-ui/core",
    web: "@gf-ui/web"
}



test("测试:本地缓存(默认值)", () => {
    Storage.clear();
    expect(Storage.get(keys.core, { def })).toEqual(def);
    expect(Storage.get(keys.core)).toEqual(undefined)
})

test("测试:本地缓存(有值)", () => {
    Storage.clear();
    Storage.set(keys.core, values.core)
    expect(Storage.get(keys.core)).toEqual(values.core)
    expect(Storage.contains(keys.core)).toEqual(true)
    expect(Storage.count()).toEqual(1)

    Storage.remove(keys.core);
    expect(Storage.count()).toEqual(0);
})


test("测试:本地缓存加密", () => {
    Storage.clear();
    Storage.set(keys.core, values.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.aes })
    expect(Storage.get(keys.core)).toEqual("da7f42d8b5eed1b2a0b12eb56464a307")
    expect(Storage.get(keys.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.aes })).toEqual(values.core)
})


test("测试:存储位置",() =>{
    Storage.clear();
    Storage.clear(STORAGE_TYPE.local);

    expect(Storage.count()).toEqual(0)
    expect(Storage.count(STORAGE_TYPE.local)).toEqual(0)

    Storage.set(keys.core, values.core)
    expect(Storage.count()).toEqual(1)
    expect(Storage.count(STORAGE_TYPE.local)).toEqual(0)

    Storage.set(keys.web, values.web, {storageType: STORAGE_TYPE.local})
    expect(Storage.count()).toEqual(1)
    expect(Storage.count(STORAGE_TYPE.local)).toEqual(1)

    Storage.clearAll()
    expect(Storage.count()).toEqual(0)
    expect(Storage.count(STORAGE_TYPE.local)).toEqual(0)
})