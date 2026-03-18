import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/面试指南/": [
    //"",
    {
      //项目文字
      text: "开发工具",
      icon: "laptop-code",
      prefix: "开发工具/",
      //项目链接
      //有link的都是有这个readme文件
      //要去掉的话，只需要把开发工具底下的readme文化部去掉
      link: "开发工具/",
      // 结构是几个意思？
      children: "structure",
    },
    // {
    //   text: "Java",
    //   icon: "ICONS.JAVA",
    //   //collapsible: true,
    //   prefix: "JAVA/",
    //   children: [
    //     {
    //       text: "基础",
    //       prefix: "basis/",
    //       icon: "ICONS.BASIC",
    //       children: [
    //         "java-basic-questions-01.md"
    //       ]
    //     }
    //   ]
    // },
    // {
    //   text: "Java",
    //   icon: "book",
    //   // 子项（比如 开发工具/layout.md）的路径会自动拼接成
    //   //  /面试指南/开发工具/layout.md，无需手动写全路径；
    //   prefix: "JAVA/",
    //   link: "JAVA/",
    //   children: "structure",
    // },
    {
      text: "Java",
      icon: "book",
      // 是否可折叠的
      collapsible: true,
      prefix: "JAVA/",
      children: [
        {
          text: "基础",
          prefix: "基础/",
          icon: "book",
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
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
