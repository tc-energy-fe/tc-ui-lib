#基础组件库

#####组件列表
- Input

#TC-cli预想

###构成

- 组件库

~~~~
TODO：
    button prefix eg.倒计时；
    form-item 提取项目中edit-wrapper的模块，label、input、row、tip等构成；
    表单验证（项目utils中的validate）；
    webpack配置（参考tc-ui-v3库）；
~~~~

- 工具函数库(仿照lodash，原来项目里的utils，例如file，tree，mqtt等)
  
~~~~
    可以向外暴露单独的工具函数，以便在vue实例上下文之外调用
~~~~

- 风格样式库(可以与模板生成融合)
  
~~~~
TODO:
    原来main样式中的search栏，condition栏，table-wrapper等；
    可以尝试便携式碎片化的样式，例如flex-center、float-left、text-ellipsis、abs-center等
~~~~

- 项目模板生成（node）

~~~~
参考 https://zhuanlan.zhihu.com/p/105846231
TODO:
    node环境文件系统为基础，实现文件创建生成、模板定制。
    使用npm安装在global环境，可以用命令行调用。
    命令行生成模板，可以自由配置是否添加函数库、插件库等，也可以选择模板风格(上面的风格样式库)。
    自动下载添加iconfont文件
~~~~
