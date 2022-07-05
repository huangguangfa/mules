/**
 * @file Crypto
 * @description 基于crypto封装的数据安全类
 */
import { getCryptoContext } from './crypto'
import { throwError } from '@/utils/util'

interface cryptoConfig {
  name: string
  encoding?: boolean
  iv?: boolean
  hmac?: boolean
  params?: {
    keySize: number
    iterations: number
  }
}

export default class Crypto {
  /**
   * @method 加密当前的数据
   * @param data 需要加密的数据
   * @param crypto 加解密策略(ASYMMETRIC_CRYPTO_TYPE | SYMMETRIC_CRYPTO_TYPE)
   * @param key 密钥(来自应用配置)
   * @param iv 矢量(来自应用配置)
   * @returns {String} 加密之后的密文字符串
   */
  static encrypt(data: string, crypto: cryptoConfig, { key = '', iv = '' } = {}): string {
    if (!crypto || !crypto.name) throwError('当前加密类型参数没有')
    const context = getCryptoContext(crypto.name)
    if (!context) return data
    return context.symmetric ? context.encrypt(data, key, iv) : context.encrypt(data, key)
  }

  /**
   * @method 解密当前的数据
   * @param data 需要解密的数据
   * @param crypto 加解密策略(ASYMMETRIC_CRYPTO_TYPE | SYMMETRIC_CRYPTO_TYPE)
   * @param key 密钥(来自应用配置)
   * @param iv 矢量(来自应用配置)
   * @returns {String} 解密之后的原文字符串
   */
  static decrypt(data: string, crypto: cryptoConfig, { key = '', iv = '' } = {}) {
    const context = getCryptoContext(crypto.name)
    if (!context) return data
    return context.symmetric ? context.decrypt(data, key, iv) : ''
  }
}
