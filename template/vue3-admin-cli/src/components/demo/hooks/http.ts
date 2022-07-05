import { useHttp } from '@/hooks'
const { $get, $post, $all } = useHttp()
export function startRequest(type = 'get') {
  const map = new Map()
  map.set('get', getRequest)
  map.set('post', postRequest)
  map.set('all', allRequest)
  map.get(type)()
}

function getRequest() {
  $get(
    '/info',
    {},
    {
      base: 'http://www.baidu.com',
    }
  ).then((res) => {
    console.log('结果', res)
  })
}

function postRequest() {
  $post('kuasheng.kyeGeneralManagerOfficeCategory.index')
    .then((res) => {
      console.log('结果', res)
    })
    .catch((err) => {
      console.log('重试测试', err)
    })
}

function allRequest() {
  const options = [
    {
      url: '/user/info',
      config: {
        method: 'get',
        param: {
          size: 1,
          page: 2,
        },
      },
    },
    {
      url: '/user/list',
      config: {
        method: 'post',
        param: {
          size: 1,
          page: 2,
        },
      },
    },
  ]
  $all(options).then((res) => {
    console.log('结果', res)
  })
}
