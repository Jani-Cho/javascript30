# 06 - Type Ahead:Online Library

![](https://jani-cho.github.io/javascript30/images/js06.png)

## 主要內容
利用fetch()取得接口資料後，輸入字母可搜尋書本或作者的功能

[[JS30作品頁]](https://jani-cho.github.io/javascript30/) 
[[DEMO展示頁]](https://jani-cho.github.io/javascript30/06_TypeAhead/index-jani.html)  


## **JavaScript小筆記**
### **element.classList.toggle(class, true|false)**：
Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

````
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
````
### **正規表達式RegExp & metch()**：
RegExp 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。

一個正規表達式的物件。 若傳入一個非正規表達式的物件obj，則會視為傳入 new RegExp(obj)。若只呼叫match()而沒有傳入任何參數，則會回傳內含一個空字串的陣列，即[""]。

資料來源：[MDN-RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
資料來源：[JavaScript: 正規表達式 RegExp 寫法](hhttps://chentsu.wordpress.com/2014/03/03/javascript-%E6%AD%A3%E8%A6%8F%E8%A1%A8%E9%81%94%E5%BC%8F-regexp-%E5%AF%AB%E6%B3%95/)



## 新增功能
