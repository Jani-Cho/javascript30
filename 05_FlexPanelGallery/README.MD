# 05 - Gallery

![](https://jani-cho.github.io/javascript30/images/js05.png)

## 主要內容
使用filter(),map(),sort(),reduce(),includes(),split()等搭配array來進行的幾個小練習。

原本的JS30課程只有用console來觀察程式，為了透過畫面呈現資料，遂加入Vue.js來使用，加入`v-for` `v-bind` `v-model`等實作，以及`computed` `method`等生命週期簡單的實作。

[[JS30作品頁]](https://jani-cho.github.io/javascript30/) 
[[DEMO展示頁]](https://jani-cho.github.io/javascript30/05_FlexPanelGallery/index-jani.html)  


## **JavaScript小筆記**
### **filter()**：
filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
````
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
````

> Array ["exuberant", "destruction", "present"]

資料來源：[MDN-Array.prototype.filter()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### **map()**：
map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
````
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

````

> Array [2, 8, 18, 32]

資料來源：[MDN-Array.prototype.map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### **sort()**：
sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。

由於依賴執行環境的實作，所以並不能保證排序的時間及空間複雜度。
````
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);

````

> Array ["Dec", "Feb", "Jan", "March"]
> Array [1, 21, 30, 4]

#### **arr.sort([compareFunction])**

##### compareFunction 選擇性:
指定一個函式來定義排序順序。假如省略此參數，陣列將根據各個元素轉為字串後的每一個字元之 Unicode 編碼位置值進行排序。

如果 compareFunction 沒有被應用，元素將被轉換為字串並以 Unicode 編碼位置進行比較來排序。舉例來說，"Banana" 會被排在 "cherry" 之前。在數值排序中，9 排在 80 前面，但因為數字被轉換成字串，在 Unicode 順序中 "80" 會在 "9" 的前面。

如果 compareFunction 被應用，陣列元素們將根據比較函式之回傳值來排序。如果 a 和 b 為被比較之兩元素，則：

若 compareFunction(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
若 compareFunction(a, b) 回傳 0，則 a 與 b 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。備註：ECMAscript 標準並不保證這個行為，因此不是所有瀏覽器（如 Mozilla 版本在 2003 以前）都遵守此行為。
若 compareFunction(a, b) 的回傳值大於 0，則會把 b 排在小於 a 之索引的位置，即 b 排在 a 前面。
compareFunction(a, b) 在給予一組特定元素 a 及 b 為此函數之兩引數時必須總是回傳相同的值。若回傳值不一致，排序順序則為 undefined。

資料來源：[MDN-Array.prototype.sort()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### **map()**：
map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
````
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

````

> Array [2, 8, 18, 32]

資料來源：[MDN-Array.prototype.map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### **reduce()**：
reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
````
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

````

> 10
> 15

資料來源：[MDN-Array.prototype.reduce()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


## 新增功能

##### 列出一些常見的歷史人物:
1 用map()去把人物姓名的整理出來
2 用filter()篩選17世紀出生的人物
3 用sort()排列人物的出生順序