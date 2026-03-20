import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  //"/",
  "/面试指南/",
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
