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
        text: "生活",
        link: "/life/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "生活",
    items: [
      {
        text: "生活",
        link: "/life/",
      },
    ],
  },
];
