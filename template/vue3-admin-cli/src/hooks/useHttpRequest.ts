import initHttpInstance from '@/libs/http'
/**
 * 初始化http
 * @param base 公共请求部分
 */
const { get, post, put, patch, del, all, cancel } = initHttpInstance({
  base: '/router/rest',
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
