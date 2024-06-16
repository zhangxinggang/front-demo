## 浏览器扩展是什么

浏览器扩展（BEX）是在浏览器上下文中运行的应用程序，用于以某种方式自定义Web浏览器，它们建立在HTML、JavaScript和CSS等网络技术之上，旨在实现一个单一的目的

## 浏览器扩展能做什么

- 拦截页面请求

- 有效阻止广告和垃圾网页的弹出以及反向追踪

- 可以直接浏览各大影视，播放器vip资源

- 可以根据自己的爱好和审美去美化自己的浏览器，覆盖页面内容等

- 更加方便快捷的使用脚本，达到网页智能化、一键化操作

## 浏览器扩展开发基础

需要入门HTML，CSS，JS

## 浏览器扩展API详解

> 自2022年1月17日起，Chrome 应用商店已经停止接受新的 Manifest V2扩展。
2023年6月 Chrome 115开始，关闭对 Manifest V2扩展的支持。
2024年1月，Chrome 应用商店将删除所有的 Manifest V2扩展

### 字段详情

#### manifest_version

插件版本

```Plain Text
{
  "manifest_version": 3
}
```

版本对比

[https://developer.chrome.com/docs/extensions/develop/migrate?hl=zh-cn#remotely-hosted-code](https://developer.chrome.com/docs/extensions/develop/migrate?hl=zh-cn#remotely-hosted-code)

#### background

后台脚本，其js文件必须放在根目录，不使用时终止，无权访问dom，必须fetch提出请求

`Manifest V3 不支持多个后台脚本,只能service_worker指定一个`[文档](https://link.juejin.cn/?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F66055882%2Fchrome-extensions-use-the-background-service-worker-key-instead-manifest-vers)，但您可以选择通过指定将服务工作者声明为ES 模块" `type": "module"`，这允许您导入更多代码

```JSON
{
  "background": {
    "service_worker": "background.js",
    "type": "module" //optional
  }
}
// 指定type为module后
try {
  importScripts("background.js");  //实际测试这样是可以的
} catch (e) {
  console.error(e); 
}
```

#### 权限

将主机权限和可选的主机权限与其他权限分开指定

```JSON
{
  "permissions": [
    "tabs",
    "bookmarks"
  ],
  "optional_permissions": [
    "unlimitedStorage"
  ],
  "host_permissions": [
    "http://www.blogger.com/",
  ],
  "optional_host_permissions": [
    "*://*/*",
  ]
}
```

各大页面的权限情况

|JS种类|可访问的API|DOM访问情况|JS访问情况|直接跨域|
|-|-|-|-|-|
|injected script|和普通JS无任何差别，不能访问任何扩展API|可以访问|可以访问|不可以|
|content script|只能访问 extension、runtime等部分API|可以访问|不可以|不可以|
|popup js|可访问绝大部分API，除了devtools系列|不可直接访问|不可以|可以|
|background js|可访问绝大部分API，除了devtools系列|不可直接访问|不可以|可以|
|devtools js|只能访问 devtools、extension、runtime等部分API|可以访问devtools|可以访问devtools|不可以|
||||||

#### 其他

```JSON
{
  // Required - 通俗易懂
  "manifest_version": 3,
  "name": "配置项例子",
  "version": "你的项目版本",
  // 『重点』action配置项主要用于点击图标弹出框，对于弹出框接受的是html文件
  "action": {
    "default_title": "popup名字",
    "default_popup": "popup.html"
  }

  // 通俗易懂
  "default_locale": "en",
  "description": "A plain text description",
  "icons": {
    ...
  },
  "author": ...,
  // 『重点』下面将出现的background.js 配置service work
  "background": {
    // Required
    "service_worker": "service-worker.js"
  },
  // 『重点』下面将出现content_script.js 应用于所有页面上下文的js
  "content_scripts": [
    {
      "matches": [
        "https://*.nytimes.com/*"
      ],
      "css": [
        "my-styles.css"
      ],
      "js": [
        "content-script.js"
      ],
      "run_at": "document_idle"
      //"document_idle" | "document_start" | "document_end" 三种可选
    }
  ],
  // 使用/添加devtools中的功能
  "devtools_page": "devtools.html",
  /**
   * 三个permission
   * host_permissions - 允许使用扩展的域名
   * permissions - 包含已知字符串列表中的项目 【只需一次弹框要求允许】
   * optional_permissions - 与常规类似permissions，但由扩展的用户在运行时授予，而不是提前授予【安全】
   * 列出常见选项
   * {
   *   activeTab: 当扩展卡选项被改变需要重新获取新的权限
   *   tabs: 操作选项卡api（改变位置等）
   *   downloads: 访问chrome.downloads API 的权限 便于下载但还是会受到跨域影响
   *   history: history api权限
   *   storage: 访问localstorage/sessionStorage权限
   * }
   */
  "host_permissions": [
    "http://*/*",
    "https://*/*"
  ],
  "permissions": [
    "tabs"
  ],
  "optional_permissions": [
    "downloads"
  ],
  // 内部弹出可选页面 - 见fehelper操作页
  "options_page": "options.html",
  "options_ui": {
    "chrome_style": true,
    "page": "options.html"
  }
}
```

### 插件之间通讯

content_script ==> service_worker

```JSON
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});

chrome.runtime.sendMessage({ number: 1 }, (response) => {});
```

service_worker ==> content_script

```JSON
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   console.log(request);
   //"permissions": ["tabs"]
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
         tabs[0].id,
         { number: request.number + 1 },
         function(response) {}
      );
   });
   // 消息回传
   sendResponse({ number: request.number });
});
```

### storage存储

```JSON
// 初始化设置
//chrome.storage.local.get 获取
//chrome.storage.local.set 设置
// storage api，必须被注册在 manifest 的 permissions 字段中给插件使用
// "permissions": ["storage"]
chrome.storage.local.get(['theme'], res => {
   let { theme } = res;
   console.log("初始化设置 theme--->", theme);
   switchThemes(theme);
});
chrome.storage.local.set({
   "demo": "demo 数据",
   "env": "dev"
}, function() {
   console.log("chrome extension is install.");
});
chrome.storage.local.clear();
```

### 代码注入

content-scripts 不能访问页面中的 js，它可以操作 DOM，但是 DOM 却不能调用它，所以就有了通过 DOM 操作的方式向页面动态注入 JS 的操作。injected 的内容需要在资源列表中进行声明：

```JSON
"web_accessible_resources": [
  {
    "resources": [
      "injectScript.bundle.js",
    ],
    "matches": [
      "http://*/*",
      "https://*/*",
      "<all_urls>"
    ]
  }
]
```

```JSON
// executeScript() V3变化：不再执行任意的字符串，仅支持脚本文件和函数
chrome.action.onClicked.addListener((tab) => {
   chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
   });
});
```

```JSON
function injectJs(jsPath) {
  jsPath = jsPath || 'injectScript.bundle.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // chrome-extension://mapfodeofmlldcgdgahpjiefememgeei/injectScript.bundle.js
  temp.src = chrome.runtime.getURL(jsPath);
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    this.parentNode?.removeChild(this);
  };
  document.head.appendChild(temp);
}
```



#### 动态设置pop

```JSON
chrome.action.onClicked.addListener(() => {
   console.log('1、点击了插件图标');
   // 获取主题类型
   chrome.storage.local.get(["theme"], res => {
      console.log("2、缓存的theme", res);
      let { theme } = res;
      // 修改初始值
      theme = theme === "light" ? "dark" : "light";
      console.log("3、切换 theme 为：", theme);
      // 设置图标
      chrome.action.setIcon({
         path: "icons/popup_" + theme + "_32.png"
      });
      // 设置title
      chrome.action.setTitle({
         title: theme === "light" ? "明亮模式" : "暗黑模式"
      });
      const html = `popups/abc.html`
      chrome.action.setPopup({
         popup: html,
         tabId: tabs[0].id
      })
   });
})
```

## 附录

[https://blog.csdn.net/aibujin/article/details/131332951](https://blog.csdn.net/aibujin/article/details/131332951)

[https://juejin.cn/post/7173567493871501325](https://juejin.cn/post/7173567493871501325)

[https://juejin.cn/post/7194367206753304633](https://juejin.cn/post/7194367206753304633)

[https://segmentfault.com/a/1190000042851130](https://segmentfault.com/a/1190000042851130)

