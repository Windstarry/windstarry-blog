// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "学习",
    items: [
      {
        text: "python",
        link: "/pages/python.html",
      },
      {
        text: "vue3",
        link: "/pages/vue3.html",
      },
      {
        text: "博客部署",
        link: "/pages/blogtest.html",
      },
    ],
  },
  {
    text: "生活",
    items: [
      {
        text: "生活随笔",
        link: "/pages/liferecord.html",
      },
    ],
  },
  { text: "留言板", link: "/pages/MessageBoard.html" },
  { text: "关于我", link: "/pages/aboutme.html" },
];
