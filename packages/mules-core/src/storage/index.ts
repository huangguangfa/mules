/**
 * @file Storage
 * @description 基于localStorage/sessionStorage封装的存储类
 */
import { getStorageOptions } from '../.internal/storage'
import Type from '../type'
import { STORAGE_TYPE, DEFAULT_STORAGE_OPTIONS } from '../config'


interface StorageOprinons{
    def?: any,
    cryptoType?:{
        name:string
    }
}


export default class Storage {
    /**
     * @method 设置指定key和value到会话储存实例中
     * @param key 当前存储的key
     * @param value 当前存储的value
     * @param options[cryptoType] 加密类型（默认：SYMMETRIC_CRYPTO_TYPE.none, 仅限于aes,des,rc4）
     * @param options[storageType] 存储位置（默认：STORAGE_TYPE.session）
     * @desc 支持简单数据类型，对象或数组的存储
     */
    static set(key: string, value: any, options: StorageOprinons | {} = {} ): void {
        StorageInternal.set(key, value, { storageType: STORAGE_TYPE.session, ...options,  })
    }

    /**
     * @method 获取会话存储实例中指定key对应的值
     * @param key 当前存储的key
     * @param options[def] 默认值
     * @param options[cryptoType] 加密类型（默认：SYMMETRIC_CRYPTO_TYPE.none, 仅限于aes,des,rc4）
     * @param options[storageType] 存储位置（默认：STORAGE_TYPE.session）
     * @desc 值可能为简单类型，对象或数组
     * @returns 返回当前会话存储key对应的值
     */
    static get(key: string, options = {}) {
        return StorageInternal.get(key, { storageType: STORAGE_TYPE.session, ...options })
    }

    /**
     * @method 从会话存储实例中删除指定的key
     * @param key 当前存储的key
     * @param storageType 存储位置
     */
    static remove(key: string, storageType:string = STORAGE_TYPE.session): void {
        StorageInternal.remove(key, storageType)
    }

    /**
     * @method 获取会话存储实例中是否包含指定key的实例
     * @param key 当前存储的key
     * @param storageType 存储位置
     */
    static contains(key: string, storageType:string = STORAGE_TYPE.session): boolean {
        return StorageInternal.contains(key, storageType)
    }

    /**
     * @method 清除指定会话缓存
     * @param storageType 存储位置
     */
    static clear(storageType:string = STORAGE_TYPE.session): void {
        StorageInternal.clear(storageType)
    }

    /**
     * @method 获取会话存储实例中的个数
     * @param storageType 存储位置
     */
    static count(storageType:string = STORAGE_TYPE.session): number {
        return StorageInternal.count(storageType)
    }
    /**
     * @method 清除所有的本地缓存和会话缓存
     * @param storageType 存储位置
     */
     static clearAll(storageType:string = STORAGE_TYPE.session): void {
        StorageInternal.clear()
        StorageInternal.clear(storageType)
    }
}



class StorageInternal {
    /**
     * @method 设置指定key和value到本地储存实例中
     * @param key 当前存储的key
     * @param value 当前存储的value
     * @param options[cryptoType] 加密类型（默认：SYMMETRIC_CRYPTO_TYPE.none, 仅限于aes,des,rc4）
     * @desc 支持简单数据类型，对象或数组的存储
     */
    static set(key: string, value: any, options:any): void {
        const { storageType, cryptoType }:any = { ...DEFAULT_STORAGE_OPTIONS, ...options }
        const { storage, secret, encrypt }: any = getStorageOptions(storageType, cryptoType)
        if (Type.isObject(value) || Type.isArray(value)) {
            storage[key] = encrypt(JSON.stringify(value), secret)
        } else {
            storage.setItem(key, encrypt(value, secret))
        }
    }

    /**
     * @method 获取本地存储实例中指定key对应的值
     * @param key 当前存储的key
     * @param options[def] 默认值
     * @param options[cryptoType] 加密类型（默认：SYMMETRIC_CRYPTO_TYPE.none, 仅限于aes,des,rc4）
     * @desc 值可能为简单类型，对象或数组
     */
    static get(key: string, options = {}) {
        const { storageType, cryptoType, def }: {
            storageType: string,
            cryptoType: any,
            cryptoKey: string,
            cryptoIv: string,
            def?: any
        } = { ...DEFAULT_STORAGE_OPTIONS, ...options }
        const { storage, secret, decrypt }: any = getStorageOptions(storageType, cryptoType)
        try {
            return JSON.parse(decrypt(storage[key] || '', secret)) || def
        } catch (e) {
            return decrypt(storage.getItem(key) || '', secret) || def
        }
    }

    /**
     * @method 从本地存储实例中删除指定的key
     * @param key 当前存储的key
     * @param storageType 存储类型（默认：STORAGE_TYPE.local）
     */
    static remove(key: string, storageType: string = STORAGE_TYPE.local): void {
        const { storage } = getStorageOptions(storageType)
        storage.removeItem(key)
    }

    /**
     * @method 获取本地存储实例中是否包含指定key的实例
     * @param key 当前存储的key
     * @param storageType 存储类型（默认：STORAGE_TYPE.local）
     */
    static contains(key: string, storageType: string = STORAGE_TYPE.local): boolean {
        const { storage } = getStorageOptions(storageType)
        return key in storage
    }

    /**
     * @method 清除所有的本地缓存
     * @param storageType 存储类型（默认：STORAGE_TYPE.local）
     */
    static clear(storageType: string = STORAGE_TYPE.local): void {
        const { storage } = getStorageOptions(storageType)
        storage.clear()
    }
    /**
     * @method 获取本地存储实例中的个数
     * @param storageType 存储类型（默认：STORAGE_TYPE.local）
     */
    static count(storageType: string = STORAGE_TYPE.local): number {
        const { storage } = getStorageOptions(storageType)
        return storage.length
    }
}
