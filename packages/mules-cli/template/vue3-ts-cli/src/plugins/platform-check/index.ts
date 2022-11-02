import { checkNetwork } from '@/libs/network/index'
import browser from '@/libs/browser/check-browser'

function checkBrowserVersion() {
  const { isupdate } = browser
  isupdate && window.open(`/browser.html`)
}

export default function platformCheck() {
  // 监测网络
  checkNetwork()
  // 浏览器低版本监测
  checkBrowserVersion()
}
