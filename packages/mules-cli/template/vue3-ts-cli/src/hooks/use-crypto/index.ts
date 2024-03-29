import Crypto from '@/libs/crypto'

// 加密例子可在__test__目录查看
export function useCrypto() {
  return {
    /**
     * @method 加密当前的数据
     * @param data 需要加密的数据
     * @param crypto 加解密策略(ASYMMETRIC_CRYPTO_TYPE | SYMMETRIC_CRYPTO_TYPE)
     * @param key 密钥(来自应用配置)
     * @param iv 矢量(来自应用配置)
     * @returns {String} 加密之后的密文字符串
     */
    encrypt: Crypto.encrypt,
    /**
     * @method 解密当前的数据
     * @param data 需要解密的数据
     * @param crypto 加解密策略(ASYMMETRIC_CRYPTO_TYPE | SYMMETRIC_CRYPTO_TYPE)
     * @param key 密钥(来自应用配置)
     * @param iv 矢量(来自应用配置)
     * @returns {String} 解密之后的原文字符串
     */
    decrypt: Crypto.decrypt,
  }
}
