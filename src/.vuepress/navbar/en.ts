import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  //"/",
  { text: "面试指南", icon: "java", link: "面试指南/" },
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "PDF下载",
        icon: "pdf",
        link: "/interview-preparation/pdf-interview-javaguide.md",
      },
      {
        text: "面试突击",
        icon: "pdf",
        link: "https://interview.javaguide.cn/home.html",
      },
      {
      // 这个是需要重启服务，才能进行这个重启服务的
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
