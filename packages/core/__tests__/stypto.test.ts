import Crypto from '../src/crypto'
import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '../src/config'

const data = 'gf-ui-core'
const key = 'gf-key'
const iv = 'gf-iv'

test('测试：非对称加密算法', () => {
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.md5)).toEqual('9e8322b3ba7c75f882682fb06a5798d5')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha1)).toEqual('4664894d711bc939a4088f80b79e9532c10a4852')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha3)).toEqual('338b59adc01a5e46a63ea10f9afbc722b5f7db3742d407ce8fac78ebe4d3faf97a7707917468f3abc0639fa8d8462a5210304d8a23d477716baa19bfb3e37487')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha224)).toEqual('a3b60616940d27032f8a82f2b546e8bc9786946525649ee1ee1cf55e')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha256)).toEqual('aaf10bba46001e1e2e589e004078a0bbdd65753da9afbfcd5c855f6df79ac46d')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha384)).toEqual('a25b86b5248fbfd084cf75d23240e971a00c42b586be8a91b337c9485ac81580bb18a74640b6a499d65baf15d1c242cd')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha512)).toEqual('c3ba425db972ecde5f57594c02041c6e7b0619e62276488a2eeaf7f522b71da8749e6dc4308adb9362cea455d649fd7885f535dddab17d580b22ebdc6ee906cc')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacmd5)).toEqual('ebb76581e49a0107bbf18e1665304f72')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha1)).toEqual('d21bc5810d0a7a274289bc9319236bfa9a07d97b')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha3)).toEqual('0ac39cb2c6a170fa3cf89cd1ca0b9f9a5a53e8ff46cae395d23a4f7b22db7d78757a8af891254506132e69c4355210a05f1f8943681d6501d0255c78de9b1ea4')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha224)).toEqual('0c370a6ef2c66be4b124a63b33b5da0c06e8988bebc99317533b575d')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha256)).toEqual('3ac81b73f130f5eb44901050049508a4fdf79ac6ec658e1440e6ad1602bb7901')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha384)).toEqual('3b9ecd6e2f14e3f4ffda57b4e0de62dbd64f67ccebb2ddb048faa77d49b9ff84914737ad335682a226e6e25e85f2c50a')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha512)).toEqual('ae16a065426991283d02a25d079dc6f8b456219ad3c5935f835092d0ac8e49582a3384c8d3d665a70588170b4622e3c48d1e6ad936b19287e2ba849be85d2887')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.pbkdf2)).toEqual('a796e9fc80bd9ca1bcdb9e8fbdd47177')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.evpkdf)).toEqual('dda9fb6961ba9bd0ba93c4b9de03d385')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.ripemd160)).toEqual('b92a6f06f102e96b8d99c86f4719ce0012cbcd2d')
})

test('测试：对称加密算法', () => {
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })).toEqual('Z2YtdWktY29yZQ==')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.aes, { key, iv })).toEqual('fd7e0980a9aa9dbebda64db66767a004')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.des, { key, iv })).toEqual('4ba7d000435c6b61db49777f9e530701')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })).toEqual('a61d5a457370564cf39b')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbit, { key, iv })).toEqual('0a0f975512772a7676d0')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, { key, iv })).toEqual('6faf89f755bfe84ccab8')

  expect(Crypto.decrypt('Z2YtdWktY29yZQ==', SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('fd7e0980a9aa9dbebda64db66767a004', SYMMETRIC_CRYPTO_TYPE.aes, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('4ba7d000435c6b61db49777f9e530701', SYMMETRIC_CRYPTO_TYPE.des, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('a61d5a457370564cf39b', SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('0a0f975512772a7676d0', SYMMETRIC_CRYPTO_TYPE.rabbit, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('6faf89f755bfe84ccab8', SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, { key, iv })).toEqual(data)
})
