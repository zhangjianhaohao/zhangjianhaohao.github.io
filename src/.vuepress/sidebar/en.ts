import { sidebar } from "vuepress-theme-hope";



import {
  ICONS,
  createImportantSection,
  createSourceCodeSection,
} from "./constants.js";


export const enSidebar = sidebar({
  "/面试指南/": [
    //面试指南本身。
    //"",
    {
      //link这个属性不是必须的
      text: "开发工具",
      icon: ICONS.TOOL,
      prefix: "开发工具/",
      collapsible: true,
      children: [
        {
          text: "Git",
          icon: ICONS.GIT,
          prefix: "git/",
          children: ["git-intro", "github-tips"],
        },
      ]
    },
    {
      //项目文字
      icon: ICONS.TOOL,
      text: "AI编程工具",
      //icon: ICONS.TOOL,
      //文章的上属，比如Blog Home/面试指南/AI编程工具
      prefix: "AI编程工具/",
      // 必须有这个collapsible，可折叠的
      collapsible: true,
      //项目链接
      //有link的话，会跳转到这个文件的readme文件
      //要去掉的话，只需要把开发工具底下的readme文化部去掉
      //link: "AI编程工具/",
      // 结构是几个意思？
      children: [
        "Claude Code",
        "md和vuepress常用语法",
        "markdown"
      ]

    },
    {
      text: "Java",
      icon: ICONS.JAVA,
      // 是否可折叠的
      collapsible: true,
      prefix: "JAVA/",
      children: [
        {
          text: "基础",
          prefix: "基础/",
          icon: ICONS.BASIC,
          collapsible: true,
          children: [
            "java-basic-questions-01",
            // "java-basic-questions-02",
            // "java-basic-questions-03",
            // createImportantSection([
            //   "why-there-only-value-passing-in-java",
            //   "serialization",
            //   "generics-and-wildcards",
            //   "reflection",
            //   "proxy",
            //   "bigdecimal",
            //   "unsafe",
            //   "spi",
            //   "syntactic-sugar",
            // ]),
          ],
        },
      ]
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      //children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
