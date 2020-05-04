---
title: 解决Windows10更新或重装后kali引导丢失
subtitle:
date: 2020-05-04 12:58
categories:
    Kali
tags:
    Kali
cover: /assets/kali_boot.jpg
comments: true

---

{% aplayer name="光の道标" artist="鹿乃" url="/music/光之道标/光之道标.mp3" lrc="" cover="/music/光之道标/cover.jpg" %}

## 废话开头：
玩着游戏CPU瓶颈十分气人，跑去BISO怒超5GHZ,在Win10引导界面挂了,降到4.8Ghz后稳定,可是Win10莫名其妙的就挂了,由于我是Win10,Kali双系统直接重装后Kali的GRUB引导没了,造孽啊.

## 正文:
本文使用EasyBcd2.3来修复引导
下载打开EasyBCD2.3,点添加新条目->Linux/BSD
类型选择GRUB 2
名称自己取
驱动器选择kali所在分区(tip:可通过分区大小和名字来判断)
![](/assets/kali_boot/1.png)
然后点添加条目

点到高级设置然后修改驱动器
![](/assets/kali_boot/2.png)
我的kali分区时F所以我选了F(tip:可用DiskGenius查看)
然后保存

点到查看设置就会发现多出一条条目啦
![](/assets/kali_boot/3.png)
重启
可以愉快的享受kali啦！