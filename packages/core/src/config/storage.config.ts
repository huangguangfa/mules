import { SYMMETRIC_CRYPTO_TYPE } from "./cryto.config"

/**
* @constant 存储类型常量
*/
export const STORAGE_TYPE = {
    local: 'local',
    session: 'session'
}

/**
 * @constant 存储配置常量
 */
export const DEFAULT_STORAGE_OPTIONS = {
    storageType: STORAGE_TYPE.local,
    cryptoType: SYMMETRIC_CRYPTO_TYPE.none,
    cryptoKey: 'xy-key',
    cryptoIv: 'xy-iv'
}