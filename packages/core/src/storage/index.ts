/**
 * @file Storage
 * @description 基于localStorage/sessionStorage封装的存储类
 */
import { getStorageOptions } from '../.internal/storage'
import Type from '../type'
import { STORAGE_TYPE, DEFAULT_STORAGE_OPTIONS } from '../config'

export default class Storage {
    static get() {

    }

    static gets() {
        // Storage.#get()
    }
}



class StorageInternal {
    /**
   * @method 获取本地存储实例中指定key对应的值
   * @param key 当前存储的key
   * @param options[def] 默认值
   * @param options[cryptoType] 加密类型（默认：SYMMETRIC_CRYPTO_TYPE.none, 仅限于aes,des,rc4）
   * @desc 值可能为简单类型，对象或数组
   */
    static get(key: string, options: { def: () => boolean }) {
        const { storageType, cryptoType, def } = { ...DEFAULT_STORAGE_OPTIONS, ...options }
        const { storage, secret, decrypt } = getStorageOptions(storageType, cryptoType)
        try {
            return JSON.parse(decrypt(storage[key] || '', secret)) || def
        } catch (e) {
            return decrypt(storage.getItem(key) || '', secret) || def
        }
    }
}
