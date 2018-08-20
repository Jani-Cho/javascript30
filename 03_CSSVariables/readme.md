# 03 -  CSS Variables

![](https://jani-cho.github.io/javascript30/images/js03.png)

## 主要內容
可以在頁面上即時更改CSS樣式。
拖曳滑桿時可以改變透明度、模糊、邊框大小＆顏色等功能。  
[[WEB作品頁]](https://jani-cho.github.io/javascript30/demo/js03.html)  
[[DEMO展示頁]](https://jani-cho.github.io/javascript30/03_CSSVariables/index-jani.html)  


## **JavaScript小筆記**
### **documentElement**：
Document.documentElement 會回傳目前文件（document）中的根元素（Element），如：HTML 文件中的 <html> 元素。

對於所有非空的 HTML 文件， document.documentElement 將會是一個 <html>  元素 ; 對於所有非空的 XML 文件，document.documentElement 則會是文件的根元素。


資料來源：[MDN-Document.documentElement](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/documentElement)

### **setProperty()**:
````
style.setProperty(propertyName, value, priority);
````
propertyName 是一个 DOMString ，代表被更改的CSS属性。
value可选 是一个 DOMString ，含有新的属性值。如果没有指定, 则当作空字符串。
注意: value 不能包含 "!important" --那个应该使用 priority 参数.
priority可选 是一个 DOMString 允许设置 "important" CSS 优先级。如果没有指定, 则当作空字符串。

````
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) 

````


## 新增功能
