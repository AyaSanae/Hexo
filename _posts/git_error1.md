---
title: 解决Git push报error:failed to push some refs to
subtitle:
date: 2020-04-07 12:58
categories:
    Git
tags:
    Git
cover: /assets/git_error1.png
comments: true

---

## 原因
远端仓库的README.md不在本地仓库上

## 解决方法
将远程仓库的README合并一下就可以了
```
git fecth origin && git merge FETCH_HEAD --allow-unrelated-histories
```