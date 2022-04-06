import Storage from "../src/storage/index"

const keys = {
    core:"core",
    web:"web"
}

const values = {
    core:"core-data",
    web:'core-web'
}

const def = 'mate-ui';

test("测试:本地缓存(默认值)", () =>{
    Storage.clear();
    expect(Storage.get(keys.core,{ def })).toEqual(def)
})