



#### 目录命名
    + 所有页面文件都在views下，页面和模块不能以crud命名，会出现名称重复，从而产生错误
    + components - 写与业务无关的组件，如树形组件，若跟业务有关系，则在相应的目录下键components目录
    + example - web小例子
    + alg - 自定义算法展示模块目录
    + visual - 数据可视化，大屏可视化相关的


#### 开发注意事项

+ 新建页面
    + 在系统中新增页面时，组件路径中/要写成linux中的，不能直接复制
    + 系统中配页面组件时，组件名称和组件路径要注意



#### 关于crud

+ 涉及到的文件
  + crud.js - 
  + src/crud目录 - 
  + request.js - 创建了axios实例，初始化request拦截器，response拦截器
    + JSON.parse() - 从一个字符串中解析出json对象
    + JSON.stringify() - 从一个对象中解析出字符串



#### 一些知识点

+ js的钩子 - 一种匹配机制，在代码中设置一些钩子，然后程序执行时自动去匹配这些钩子，提高了程序的执行效率，避免了if-else的使用。如定义一个钩子列表(类似与字典),然后使用alert进行自动匹配。js是单线程的
+ vue对象的生命周期 https://www.csdn.net/gather_2c/MtTaAg3sMDEyNy1ibG9n.html







+ 一些网址

https://github.com/521xueweihan/HelloGitHub/blob/master/content/33/HelloGitHub33.md

http://noahsnail.com/2017/07/21/2017-07-21-GoogleNet%E8%AE%BA%E6%96%87%E7%BF%BB%E8%AF%91%E2%80%94%E2%80%94%E4%B8%AD%E8%8B%B1%E6%96%87%E5%AF%B9%E7%85%A7/

https://github.com/ruanyf/weekly

https://docs.auauz.net/version/V2.4.html#%E6%8C%87%E5%8D%97

https://www.bookstack.cn/read/eladmin-v1.7/0.md











+ 项目

edms - 数据源管理服务，各个管理功能分为单独的服务，简化配置，便于扩展，升级
udsp - 服务治理，注册，管理，授权，限流等
contion - 接口连接管理，http,socket,webServer,等
定制化 - 无公共东西
配置化 - 有公共东西可以提取







