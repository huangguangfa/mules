import consola from 'consola'
import { languages } from './utils/lang'
import { head } from './config/head'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { mdPlugin } from './config/plugins'
import { features } from './config/features'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = ['infinite-scroll', 'loading', 'popover', 'click-outside', 'repeat-click', 'trap-focus', 'mousewheel', 'resize']
  directives.forEach(k => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach(lang => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})
export const config: UserConfig = {
  title: 'Design',
  description: 'a Vue 3 based component library for designers and developers',
  lastUpdated: true,
  head,
  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    logo: '/images/gf-ui-logo.png',
    logoSmall: '/images/gf-ui-logo.png',
    sidebars,
    nav,
    agolia: {
      apiKey: '377f2b647a96d9b1d62e4780f2344da2',
      appId: 'BH4D9OD16A',
    },
    features,
    langs: languages,
  },
  locales,
  markdown: {
    config: md => mdPlugin(md),
  },
  vue: {
    template: {
      compilerOptions: {
        directiveTransforms: buildTransformers(),
        // isCustomElement: tag => tag.includes('gf-'),
      },
    },
  },
}

export default config
