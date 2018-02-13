# javascript 自訂函數(Function)

## 什麼是函數，函數是什麼?
### 簡單來說就是一個方法，一個已經寫好等待被使用且可以重複利用的方法，可以直接呼叫來使用。
### 函式在每一種程式語言都大同小異，舉例來說：
### 在javascript中，宣告方式為：
```js
    function 函式名稱(傳入的參數1，參數2...參數3){ //可傳入參數也可無參數
        要做的處理....
        return n; //回傳n，可選擇回傳或不回傳
    }
```
## 假設我們要做數值的處理(舉打折的例子)，假設給定一個值，要算出這個數字*0.8的數字。

```js
    function Discounted(cost){
        return cost*0.8;
    }
    console.log(Discounted(1000));
    //輸出800;
```
當然，也可以不傳入參數。
```js
    function sayHello(){
        alert('Hello World');
    }
    sayHello();
    //跳出Hello World 視窗。
```
<hr>

# 匿名函式：
### 顧名思義，沒有名字的函式，那要怎麼定義呢？
### 很簡單，我們指定一個變數去接這個函式，例如：
```js
    str_lower = function (data){
	    return data.toLowerCase();
    }
    str_lower("ABCdef");
    // 輸出 abcdef;
```
## 當然，匿名函式也可以沒有參數；當熟悉函式之後，我們可以將許多功能做打包，例如我們可以試著做一個在網站上加入CSS的函式，怎麼做呢？
### 提示：使用
* ### document.getElementsByTagName 來取得畫面中html的標籤
* ### document.createElement 來建立元件
* ### append 來把元件加進網頁
* ### 用 + 來 做字串連接
---
# 答案

```JS
function css(select,d){
	var css = select+ '{' + d +'}'; //select為選擇器，d為CSS屬性
	var body = document.getElementsByTagName('body')[0]; //取得body
	var style=document.createElement("style"); //建立style標籤
	style.append(css); //在style標籤中加入css變數
	body.append(style); //在body最後加進style
}
```
### 那麼假設我們要讓網頁整個變成灰階的，我們只要輸入
### `css('body','filter:grayscale(1)');`就可以完成我們要的功能，而且可以重複利用，不用每次都重新寫這一大堆code。
<hr>

### 最後我們也可以把自己寫好的function全部集結在一個檔案，最後以`<script src="檔案"></script>`的方式，直接去使用他。