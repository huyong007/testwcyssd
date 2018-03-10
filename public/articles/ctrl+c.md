在windows 环境 git bash操作中如下问题：
练习first-app，用express搭建一个服务的操作：
<p>我使用<code>npm start</code>  首次启动服务后台显示有两个node进程，<code>ctrl c</code>只能关掉一个服务  如果我再次重新启动服务显示 端口已经在使用，哪个没有关掉的node进程只能强制关掉  </p>


如果我使用<code>node  ./bin/www </code> 首次启动服务  只会开一个进程并且正常的开关和重启都没问题   我想现在问题集中在为什么使用npm  会启动两个服务这个事情上

这个问题我在github上有关于这个问题的讨论时把git返回到旧的版本，还有就是写一个脚本

<code>#!/usr/bin/env bash</code>

<code>echo killing process on port $1</code>

<code>taskkill //PID `netstat -aon | grep $1 | grep -P '(?=LISTENING).*' -o -m1 | grep -P '\d*' -o` //F</code>

和alias的方法
删除打开了某个特定端口的进程

<code>alias killport='function _killport(){ lsof -n -i4TCP:$@ | grep LISTEN | awk "{print \$2}" | xargs kill};_killport'</code>

用法:

<code>$ killport 3001</code>
这样占用 3001 端口的进程就被杀掉。
说实话我都试了，还没结果，这篇文章希望对同样问题的人有用，

以下都是cmd命令：(默认正在启用的端口号是3000）

可以查询电脑当前所有端口和端口对应的PID

<code>netstat -ano</code>

如果觉得这样端口太多麻烦可以直接：

<code>netstat -aon|findstr 3000</code>

如果想查看是哪个程序在占用整个端口

<code>task|findstr 3000</code>

如果想kill一个端口对应的进程直接使用：

<code>taskkill /pid 9872 /F</code>(加上F可以直接强制关掉)













