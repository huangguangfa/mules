let isupdate = false
let browser = ''

function checkBrowser() {
  const _mime = function (option: string, value: string): boolean {
    const mimeTypes: any = navigator.mimeTypes
    for (const mt in mimeTypes) {
      if (mimeTypes[mt][option] === value) return true
    }
    return false
  }
  const u = navigator.userAgent
  const match: any = {
    Safari: u.indexOf('Safari') > -1,
    Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
    IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
    Edge: u.indexOf('Edge') > -1,
    Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
    'Firefox Focus': u.indexOf('Focus') > -1,
    Chromium: u.indexOf('Chromium') > -1,
    Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
    Vivaldi: u.indexOf('Vivaldi') > -1,
    Yandex: u.indexOf('YaBrowser') > -1,
    Arora: u.indexOf('Arora') > -1,
    Lunascape: u.indexOf('Lunascape') > -1,
    QupZilla: u.indexOf('QupZilla') > -1,
    'Coc Coc': u.indexOf('coc_coc_browser') > -1,
    Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
    Iceweasel: u.indexOf('Iceweasel') > -1,
    Konqueror: u.indexOf('Konqueror') > -1,
    Iceape: u.indexOf('Iceape') > -1,
    SeaMonkey: u.indexOf('SeaMonkey') > -1,
    Epiphany: u.indexOf('Epiphany') > -1,
    360: u.indexOf('QihooBrowser') > -1,
    '360EE': u.indexOf('360EE') > -1,
    '360SE': u.indexOf('360SE') > -1,
    UC: u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
    QQBrowser: u.indexOf('QQBrowser') > -1,
    QQ: u.indexOf('QQ/') > -1,
    Baidu: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
    Maxthon: u.indexOf('Maxthon') > -1,
    Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
    LBBROWSER: u.indexOf('LBBROWSER') > -1,
    '2345Explorer': u.indexOf('2345Explorer') > -1,
    TheWorld: u.indexOf('TheWorld') > -1,
    XiaoMi: u.indexOf('MiuiBrowser') > -1,
    Quark: u.indexOf('Quark') > -1,
    Qiyu: u.indexOf('Qiyu') > -1,
    Wechat: u.indexOf('MicroMessenger') > -1,
    Taobao: u.indexOf('AliApp(TB') > -1,
    Alipay: u.indexOf('AliApp(AP') > -1,
    Weibo: u.indexOf('Weibo') > -1,
    Douban: u.indexOf('com.douban.frodo') > -1,
    Suning: u.indexOf('SNEBUY-APP') > -1,
    iQiYi: u.indexOf('IqiyiApp') > -1,
  }
  let is360 = false
  if ((window as any).chrome) {
    const chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1')
    if (Number(chrome_vision) > 36 && (window as any).showModalDialog) {
      is360 = true
    } else if (Number(chrome_vision) > 45) {
      is360 = _mime('type', 'application/vnd.chromium.remoting-viewer')
    }
  }
  if (is360) {
    match['360SE'] = true
  }
  const hash: string[] = [
    'Safari',
    'Chrome',
    'Edge',
    'IE',
    'Firefox',
    'Firefox Focus',
    'Chromium',
    'Opera',
    'Vivaldi',
    'Yandex',
    'Arora',
    'Lunascape',
    'QupZilla',
    'Coc Coc',
    'Kindle',
    'Iceweasel',
    'Konqueror',
    'Iceape',
    'SeaMonkey',
    'Epiphany',
    '360',
    '360SE',
    '360EE',
    'UC',
    'QQBrowser',
    'QQ',
    'Baidu',
    'Maxthon',
    'Sogou',
    'LBBROWSER',
    '2345Explorer',
    'TheWorld',
    'XiaoMi',
    'Quark',
    'Qiyu',
    'Wechat',
    'Taobao',
    'Alipay',
    'Weibo',
    'Douban',
    'Suning',
    'iQiYi',
  ]
  for (let i = 0; i < hash.length; i++) {
    const value: string = hash[i]
    if (match[value]) {
      browser = value
    }
  }
  if (browser === 'Chrome') {
    const version = u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1')
    if (parseInt(version) < 85) {
      isupdate = true
    }
  } else {
    isupdate = true
  }
}

checkBrowser()

export default {
  isupdate,
  browser,
}
