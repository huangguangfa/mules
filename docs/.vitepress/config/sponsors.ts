export const rightRichTextSponsors = [
  // {
  //   name: "个人掘金",
  //   img: "/images/sponsors/juejin.svg",
  //   url: "https://juejin.cn/user/1292681404747000",
  //   slogan: "An out-of-the-box backend framework",
  //   slogan_cn: "平时记录一些自己对技术的理解和感受",
  // },
  {
    name: "个人羽雀",
    img: "/images/sponsors/yuque.svg",
    url: "https://www.yuque.com/caijih/gf",
    slogan: "An out-of-the-box backend framework",
    slogan_cn: "平时记录一些自己对技术的理解和感受",
  },
];

export const rightLogoSmallSponsors = [
  {
    name: "BuildAdmin",
    img: "/images/sponsors/blogs.png",
    imgL: "/images/sponsors/blogs.png",
    url: "https://www.huangguangfa.cn",
    slogan: "blogs",
    slogan_cn: "个人博客网站",
  },
];

export const leftCustomImgSponsors = [
  {
    name: "VForm",
    img: "/images/vform.png",
    url: "https://vform666.com/vform3.html?from=element_plus",
    slogan: "Vue 2/3 Visual/Low-Code Forms",
    slogan_cn: "Vue 2/3 可视化低代码表单",
    banner_img: "/images/vform-banner.png",
  },
  {
    name: "JSDesign",
    name_cn: "即时设计",
    img: "/images/js-design.png",
    url: "https://js.design?source=element-plus",
    slogan: "Professional online UI design tool",
    slogan_cn: "专业在线UI设计工具",
    banner_img: "/images/js-design-banner.jpg",
  },
];

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightRichTextSponsors,
];

export const leftLogoSponsors = [
  // {
  //   name: "bit",
  //   img: "/images/bit.svg",
  //   url: "https://bit.dev/?from=element-ui",
  //   slogan: "Share Code",
  //   isDark: true, // dark theme
  // },
  // {
  //   name: "renren.io",
  //   name_cn: "人人开源",
  //   img: "/images/renren.png",
  //   url: "https://www.renren.io/?from=element-ui",
  //   slogan: "Rapid development platform",
  //   slogan_cn: "企业级的快速开发平台",
  //   className: "renren",
  // },
  // {
  //   name: "FormMaking",
  //   name_cn: "FormMaking",
  //   img: "/images/formmaking.png",
  //   url: "https://form.making.link/?from=element_plus",
  //   slogan: "Vue form designer",
  //   slogan_cn: "Vue表单设计器，赋能企业快速开发",
  // },
];

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors];
