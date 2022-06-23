/**
 * @constant 非对称加密算法类型
 */

export const ASYMMETRIC_CRYPTO_TYPE: {
  [key: string]: any;
} = {
  md5: { name: "MD5" },
  sha1: { name: "SHA1" },
  sha3: { name: "SHA3" },
  sha224: { name: "SHA224" },
  sha256: { name: "SHA256" },
  sha384: { name: "SHA384" },
  sha512: { name: "SHA512" },
  hmacmd5: { name: "HmacMD5", hmac: true },
  hmacsha1: { name: "HmacSHA1", hmac: true },
  hmacsha3: { name: "HmacSHA3", hmac: true },
  hmacsha224: { name: "HmacSHA224", hmac: true },
  hmacsha256: { name: "HmacSHA256", hmac: true },
  hmacsha384: { name: "HmacSHA384", hmac: true },
  hmacsha512: { name: "HmacSHA512", hmac: true },
  pbkdf2: { name: "PBKDF2", params: { keySize: 128 / 32, iterations: 10 } },
  evpkdf: { name: "EvpKDF", params: { keySize: 128 / 32, iterations: 10 } },
  ripemd160: {
    name: "RIPEMD160",
    params: { keySize: 128 / 32, iterations: 10 },
  },
  none: { name: "" },
};

export interface SYMMETRIC_CRYPTO_TYPE {
  base64: {
    name: "Base64";
    encoding?: boolean;
  };
  aes: { name: "AES" };
  des: { name: "DES" };
  rc4: { name: "RC4"; iv?: false };
  rabbit: { name: "Rabbit" };
  rabbitlegacy: { name: "RabbitLegacy" };
  none: { name: "" };
}

/**
 * @constant 对称加密算法类型
 */
export const SYMMETRIC_CRYPTO_TYPE = {
  base64: { name: "Base64", encoding: true },
  aes: { name: "AES" },
  des: { name: "DES" },
  rc4: { name: "RC4", iv: false },
  rabbit: { name: "Rabbit" },
  rabbitlegacy: { name: "RabbitLegacy" },
  none: { name: "" },
};

type DeepReadonly<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key] extends object
    ? Obj[Key] extends Function
      ? Obj[Key]
      : DeepReadonly<Obj[Key]>
    : Obj[Key];
};

export type SYMMETRIC_CRYPTO_TYPES = DeepReadonly<SYMMETRIC_CRYPTO_TYPE>;
