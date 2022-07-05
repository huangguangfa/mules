import { getToken } from '@/utils/util'
import { useCrypto } from '@/hooks'
import { ASYMMETRIC_CRYPTO_TYPE } from '@/config'
const { encrypt } = useCrypto()
export function KsHeaders(url: string, appkey = '10184', body: object = {}) {
  const bodyStr = JSON.stringify(body)
  const token = getToken()
  const timestamp = Date.now()
  const _md5 = (data: string) => encrypt(data, ASYMMETRIC_CRYPTO_TYPE.md5)
  const sign = _md5(_md5(token).toUpperCase() + timestamp + bodyStr).toUpperCase()
  const headers = {
    method: url,
    appkey,
    token,
    sign,
    format: 'JSON',
    timestamp,
  }
  return headers
}
