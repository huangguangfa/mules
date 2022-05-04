import CryptoJS from 'crypto-js';
import Type from '../type';
import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '../config';
/* 采用策略模式实现 */
const _crypto_context = (() => {
    const context: { [key: string]: any } = {};
    // 非对称加密策略
    Object.keys(ASYMMETRIC_CRYPTO_TYPE).forEach((prop: string) => {
        const _item = ASYMMETRIC_CRYPTO_TYPE[prop]
        if (_item.name) {
            const _crypto: any = CryptoJS[_item.name as keyof typeof CryptoJS]
            context[_item.name] = { symmetric: false }
            if (_item.hmac) {
                context[_item.name] = {
                    ...context[prop],
                    encrypt: (data: string, key: Record<string, string>) => _crypto(data, key).toString()
                }
            } else if (_item.params) {
                context[_item.name] = {
                    ...context[prop],
                    encrypt: (data: string, key: Record<string, string>) => _crypto(data, key, _item.params).toString()
                }
            } else {
                context[_item.name] = {
                    ...context[prop],
                    encrypt: (data: string) => _crypto(data).toString()
                }
            }
        }
    })

    // 对称加密策略
    Object.keys(SYMMETRIC_CRYPTO_TYPE).forEach((prop: string) => {
        const _item: {
            [key: string]: any
        } = SYMMETRIC_CRYPTO_TYPE[prop as keyof typeof SYMMETRIC_CRYPTO_TYPE]
        if (_item.name) {
            context[_item.name] = { symmetric: true }
            if (_item.encoding) {
                context[_item.name] = {
                    ...context[_item.name],
                    encrypt: (data: string) => CryptoJS.enc[_item.name as keyof typeof CryptoJS.enc].stringify(CryptoJS.enc.Utf8.parse(data)).toString(),
                    decrypt: (data: string) => CryptoJS.enc.Utf8.stringify(CryptoJS.enc[_item.name as keyof typeof CryptoJS.enc].parse(data))
                }
            } else {
                const _key = (key: string) => CryptoJS.enc.Utf8.parse(key)
                const _cfg = (iv: string) => ({
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CFB,
                    padding: CryptoJS.pad.Pkcs7,
                    format: CryptoJS.format.Hex
                })
                const _iv = Type.def(_item.iv, true)
                const { encrypt, decrypt }: any = CryptoJS[_item.name as keyof typeof CryptoJS]
                if (_iv) {
                    context[_item.name] = {
                        ...context[_item.name],
                        encrypt: (data: string, key: string, iv: string) => encrypt(CryptoJS.enc.Utf8.parse(data), _key(key), _cfg(iv)).toString(),
                        decrypt: (data: string, key: string, iv: string) => decrypt(CryptoJS.lib.CipherParams.create({
                            ciphertext: CryptoJS.enc.Hex.parse(data)
                        }), _key(key), _cfg(iv)).toString(CryptoJS.enc.Utf8)
                    }
                } else {
                    context[_item.name] = {
                        ...context[_item.name],
                        encrypt: (data: string, key: string) => encrypt(CryptoJS.enc.Utf8.parse(data), _key(key)).toString(CryptoJS.format.Hex),
                        decrypt: (data: string, key: string) => decrypt(CryptoJS.lib.CipherParams.create({
                            ciphertext: CryptoJS.enc.Hex.parse(data)
                        }), _key(key)).toString(CryptoJS.enc.Utf8)
                    }
                }
            }
        }
    })
    return context
})()

/* 检测并返回当前加密算法 */
export const getCryptoContext = (cryptoName: string) => {
    const _context = _crypto_context[cryptoName]
    if (!_context) {
        console.error(`指定的加密算法[${cryptoName}]不在[ASYMMETRIC_CRYPTO_TYPE]或[SYMMETRIC_CRYPTO_TYPE]范围内！`)
        return false
    }
    return _context
}
