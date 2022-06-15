import initHttpInstance from '@/libs/http'
/**
 * 初始化http
 * @param base 公共请求部分
 */
//  http://open-dev.kyepm.com/router/rest/?kuasheng.kyeGeneralManagerOffice.indexSearch
const { get, post, put, patch, del, all, cancel } = initHttpInstance({
  base: 'http://10.32.49.245:3000',
  config: {
    retry: 6,
  },
})

export default function useHttpRequest() {
  return {
    $get: get,
    $post: post,
    $put: put,
    $patch: patch,
    $del: del,
    $all: all,
    $cancel: cancel,
  }
}
