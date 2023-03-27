// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "学习",
    items: [
      {
        text: "学习",
        link: "/learn/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "vuepress-theme-vdoing",
        link: "https://doc.xugaoyi.com/",
      },
    ],
  },
];
