import Crypto from "../crypto";
import { STORAGE_TYPE, DEFAULT_STORAGE_OPTIONS, SYMMETRIC_CRYPTO_TYPE } from "../config";

interface storageOptions {
    storage: string,
    secret?: boolean,
    encrypt?: Function,
    decrypt?: Function
}

export const getStorageOptions = (storageType: string, cryptoType: Record<'name', string>): storageOptions => {
    const options = {
        storage: storageType === STORAGE_TYPE.local ? 'localStorage' : 'sessionStorage'
    }
    if (!cryptoType) {
        return options;
    }
    const { cryptoKey, cryptoIv } = DEFAULT_STORAGE_OPTIONS;
    const cryptoParams = { key: cryptoKey, iv: cryptoIv };
    return {
        ...options,
        secret: [SYMMETRIC_CRYPTO_TYPE.aes, SYMMETRIC_CRYPTO_TYPE.des, SYMMETRIC_CRYPTO_TYPE.rc4].includes(cryptoType),
        encrypt: (data, secret: boolean = false) => secret ? Crypto.encrypt(data, cryptoType, cryptoParams) : data,
        decrypt: (data, secret: boolean = false) => secret ? Crypto.decrypt(data, cryptoType, cryptoParams) : data
    }
}
