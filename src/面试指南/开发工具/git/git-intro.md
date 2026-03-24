---
title: Git核心概念总结
description: 总结 Git 的核心概念与工作流，涵盖分支与合并、提交管理与冲突解决，助力团队协作与代码质量提升。
category: 开发工具
tag:
  - Git
head:
  - - meta
    - name: keywords
      content: Git,版本控制,分布式,分支,提交,合并,冲突解决,工作流
---

## 1.git常用命令

```powershell
# 添加到暂存区
git add .

# 提交到本地仓库
git commit -m "提交的信息"

# 推送到远程仓库
git push origin main

# 查看本地仓库main的提交记录
git log origin/main
# 查看已经提交到本地仓库，但是没推送到远程仓库的
# 主要是历史提交记录
git log
(HEAD->MAIN) 表示提交到本地仓库的main分支，但是没有推送到远程仓库
(origin/main) 表示已经提交到远程仓库
没显示就是多次提交覆盖本地仓库，最后一次才推送到远程仓库

# 查看本地分支
git branch
# 查看所有分支（本地仓库和远程仓库）
git branch -a


```
