# 05 - Flex Panels

![](https://jani-cho.github.io/javascript30/images/js05.png)

## 主要內容
css flexbox的概念搭配js的網頁

[[JS30作品頁]](https://jani-cho.github.io/javascript30/) 
[[DEMO展示頁]](https://jani-cho.github.io/javascript30/05_FlexPanelGallery/index-jani.html)  


## **JavaScript小筆記**
### **element.classList.toggle(class, true|false)**：
使用 classList 屬性是取得元素 Class 的一種便利方式，也可以透過 element.className 來得到以空格分隔之 Class 清單字串。


````
myDiv.classList.toggle('myCssClass'); //现在是增加
myDiv.classList.toggle('myCssClass'); //现在是删除
````
在元素中切换类名。

第一个参数为要在元素中移除的类名，并返回 false。 
如果该类名不存在则会在元素中添加类名，并返回 true。 

第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。例如：

移除一个 class: element.classList.toggle("classToRemove", false); 
添加一个 class: element.classList.toggle("classToAdd", true);


資料來源：[MDN-Element.classList](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList)
資料來源：[RUNOOB.COM-HTML DOM classList 属性](http://www.runoob.com/jsref/prop-element-classlist.html)

### **includes()**：
includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。



````
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

````
> true
> true
> false

資料來源：[MDN-Array.prototype.includes()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## 新增功能
