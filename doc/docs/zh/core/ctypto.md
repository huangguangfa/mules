---
lang: zh-CN
title: Crypto类
description: 页面的描述
---

# Crypto
# 核心类
::: tip 数据加密、支持常用的加密方式和不常用的加密
:::

### `encrypt` 
- 加密方法
- `参数 (data, crypto, params) => string`
    - data `加密数据`
    - crypto `加密密策略(见下方配置表）`
    - params `加密参数(见下方配置表）`
```js
const data = 'gf-ui-core'
const key = 'gf-key'
const iv = 'gf-iv'

// 非对称加密算法
Crypto.encrypt(data, { name: 'MD5' }) // 9e8322b3ba7c75f882682fb06a5798d5
Crypto.encrypt(data, { name: 'SHA1' }) // 4664894d711bc939a4088f80b79e9532c10a4852
Crypto.encrypt(data, { name: 'SHA3' }) // 338b59adc01a5e46a63ea10f9afbc722b5f7db3742d407ce8fac78ebe4d3faf97a7707917468f3abc0639fa8d8462a5210304d8a23d477716baa19bfb3e37487
Crypto.encrypt(data, { name: 'SHA224' }) // a3b60616940d27032f8a82f2b546e8bc9786946525649ee1ee1cf55e
Crypto.encrypt(data, { name: 'SHA256' }) // aaf10bba46001e1e2e589e004078a0bbdd65753da9afbfcd5c855f6df79ac46d
Crypto.encrypt(data, { name: 'SHA384' }) // a25b86b5248fbfd084cf75d23240e971a00c42b586be8a91b337c9485ac81580bb18a74640b6a499d65baf15d1c242cd
Crypto.encrypt(data, { name: 'SHA512' }) // c3ba425db972ecde5f57594c02041c6e7b0619e62276488a2eeaf7f522b71da8749e6dc4308adb9362cea455d649fd7885f535dddab17d580b22ebdc6ee906cc
Crypto.encrypt(data, { name: 'HmacMD5', hmac: true }) // ebb76581e49a0107bbf18e1665304f72
Crypto.encrypt(data, { name: 'HmacSHA1', hmac: true }) // d21bc5810d0a7a274289bc9319236bfa9a07d97b
Crypto.encrypt(data, { name: 'HmacSHA3', hmac: true }) // 0ac39cb2c6a170fa3cf89cd1ca0b9f9a5a53e8ff46cae395d23a4f7b22db7d78757a8af891254506132e69c4355210a05f1f8943681d6501d0255c78de9b1ea4

// 对称加密算法
Crypto.encrypt(data, { name: 'Base64', encoding: true }, { key, iv })  // ...
Crypto.encrypt(data, { name: 'DES' }, { key, iv }) // 4ba7d000435c6b61db49777f9e530701
....等
```


### `decrypt` 
- 解密方法<span class="colorff0066 font-bold"> **【只针对对称加密算法】**</span>

- `参数 (data, crypto, params) => string`
    - data `加密数据`
    - crypto `加密密策略(见下方配置表）`
    - params `加密参数(见下方配置表）`
```js
const data = 'gf-ui-core'
const key = 'gf-key'
const iv = 'gf-iv'
Crypto.decrypt('4ba7d000435c6b61db49777f9e530701', { name: 'DES' }, { key, iv }) === data // true
```

::: tip 非对称加密算法类型

```js
md5: { name: 'MD5' },
sha1: { name: 'SHA1' },
sha3: { name: 'SHA3' },
sha224: { name: 'SHA224' },
sha256: { name: 'SHA256' },
sha384: { name: 'SHA384' },
sha512: { name: 'SHA512' },
hmacmd5: { name: 'HmacMD5', hmac: true },
hmacsha1: { name: 'HmacSHA1', hmac: true },
hmacsha3: { name: 'HmacSHA3', hmac: true },
hmacsha224: { name: 'HmacSHA224', hmac: true },
hmacsha256: { name: 'HmacSHA256', hmac: true },
hmacsha384: { name: 'HmacSHA384', hmac: true },
hmacsha512: { name: 'HmacSHA512', hmac: true },
pbkdf2: { name: 'PBKDF2', params: { keySize: 128 / 32, iterations: 10 } },
evpkdf: { name: 'EvpKDF', params: { keySize: 128 / 32, iterations: 10 } },
ripemd160: { name: 'RIPEMD160', params: { keySize: 128 / 32, iterations: 10 } }
```
:::

::: tip 对称加密算法类型

```js
base64: { name: 'Base64', encoding: true },
aes: { name: 'AES' },
des: { name: 'DES' },
rc4: { name: 'RC4', iv: false },
rabbit: { name: 'Rabbit' },
rabbitlegacy: { name: 'RabbitLegacy' },
none: { name: '' }
```
:::