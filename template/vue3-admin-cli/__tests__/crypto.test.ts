import { expect, test } from 'vitest'
import useCrypto from '../src/hooks/useCrypto'
const { encrypt, decrypt } = useCrypto()
import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '../src/config'
const data = '加密数据'
const key = 'key1111'
const iv = 'iv2222'

test('测试：非对称加密算法', () => {
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.md5)).toBe(
    '648bfc23726d2e76af569f6fea26c1f8'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha1)).toEqual(
    'd426acafcf015feae664204444755bce180dbc8e'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha3)).toEqual(
    'e648f2826f194dfadc7ef45f20a1bd482556221ad3023dcd8d6feea88cc0b78b0f3833a66ccc2803f53fe3cabf48d8d8b305d3b5c931f3766037f5f0a37e1dd8'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha224)).toEqual(
    'b26c14be1ab084207a177a1f522578f3e176467dffc6d679d2b7b9d4'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha256)).toEqual(
    'fc016213ebd4e12fd50ebeee2a074d09aef8b4dffa247401227976cfdec1ebf9'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha384)).toEqual(
    '9ad07e16519b332cede98e01b004142a0dc8e259485e2cd5feec376e33ff73f7d7f8a6ad409c4620e3391774949ab3d7'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha512)).toEqual(
    '26f5f6136978fb24bc9821293c0dad9b5a6f35377b88e672d4ddacff1086a30819164061dffce41fde63bb3fc3d3d7f54ca82119d268428eedeaa29f10565c24'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacmd5)).toEqual(
    '0c4c0f99c759e855553ec6fde56f2810'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha1)).toEqual(
    '7d56f28d19fd08c3c4b328be53614117b3f04804'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha3)).toEqual(
    'db25c09d8bdcb9aa46c7c789d921af21d483bd19fddb997d07a3a31a9c449c193a8c280d21e7ebd7b45c33c082617e0a6ff5265cb40726d7f57b72124a886d0c'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha224)).toEqual(
    '7c5b48f6c85d077c5d3397db1626efec93eae4719c7f20fec5799897'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha256)).toEqual(
    'f6b6cdd3778c6d80a1edb7a8788f53b4c8592f2017f948ba61ac29ac9d7f29a6'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha384)).toEqual(
    '4a5f21ac7c78a72f047c9b664a518c8de6d9c9d9a28433bd7062aad334876171d9e7003af57228c802ed3b6a8bf91c21'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha512)).toEqual(
    'ac237fdb91c98e600c947a347afae58967cd02a16251c097b87c3f59554c21c44c9a7c16e433bcf73b3ccd7a845e35849e2f8fe001eb3d7e5d3489c0b33a8bf8'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.pbkdf2)).toEqual(
    '4d8c07de2ea7b1d4e188f842e8728ef2'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.evpkdf)).toEqual(
    '918f80a7a9b492060ef65001c21998dc'
  )
  expect(encrypt(data, ASYMMETRIC_CRYPTO_TYPE.ripemd160)).toEqual(
    '050978fedfa85fb8bd6b4d7fded28ba8d2cc2137'
  )
})

test('测试：对称加密算法', () => {
  expect(encrypt(data, SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })).toEqual(
    '5Yqg5a+G5pWw5o2u'
  )
  expect(encrypt(data, SYMMETRIC_CRYPTO_TYPE.aes, { key, iv })).toEqual(
    'f7294be6dc3751ebee41e86c5910ad7d'
  )
  expect(encrypt(data, SYMMETRIC_CRYPTO_TYPE.des, { key, iv })).toEqual(
    '80d10a2c1089f6b8fc30bcc0188267f8'
  )
  expect(encrypt(data, SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })).toEqual(
    'f8455fb6f48394a980933e2b'
  )
  expect(encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbit, { key, iv })).toEqual(
    '382a13e7083e1ea605252932'
  )
  expect(
    encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, { key, iv })
  ).toEqual('c41cf76f85b3c59b1bf4cfe8')
  // 解密、只有对称加密算法具有解密动作
  expect(
    decrypt('5Yqg5a+G5pWw5o2u', SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })
  ).toEqual(data)
  expect(
    decrypt('f7294be6dc3751ebee41e86c5910ad7d', SYMMETRIC_CRYPTO_TYPE.aes, {
      key,
      iv
    })
  ).toEqual(data)
  expect(
    decrypt('80d10a2c1089f6b8fc30bcc0188267f8', SYMMETRIC_CRYPTO_TYPE.des, {
      key,
      iv
    })
  ).toEqual(data)
  expect(
    decrypt('f8455fb6f48394a980933e2b', SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })
  ).toEqual(data)
  expect(
    decrypt('382a13e7083e1ea605252932', SYMMETRIC_CRYPTO_TYPE.rabbit, {
      key,
      iv
    })
  ).toEqual(data)
  expect(
    decrypt('c41cf76f85b3c59b1bf4cfe8', SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, {
      key,
      iv
    })
  ).toEqual(data)
})
