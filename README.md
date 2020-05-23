



#### 目录命名
    + 所有页面文件都在views下
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