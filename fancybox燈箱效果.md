# fancybox燈箱效果
## 執行結果：
![執行結果](images/fancybox.gif)

<hr>

# 首先下載fancybox，有以下方式
* ### 使用github: https://github.com/fancyapps/fancybox
* ### 使用CDN: https://cdnjs.com/libraries/fancybox
* ### 使用NPM: `npm install @fancyapps/fancybox --save`
* ### 使用Bower: `bower install fancybox --save`
### 在這邊使用的是CDN，直接載入。
<hr>

# 如何使用
### 在載入fancybox之前必須先載入jQuery，最好使用jQuery3.+版本。先匯入應該匯入的檔案，如下：
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.css">
```

<hr>

# 最基本的用法：
```html
<a href="圖片位置" data-fancybox data-caption="圖片描述">
    <img src="同圖片位置">
</a>
```
### 而 `data-caption` 不一定要有。
<hr>

# 群組
```html
<a href="圖片位置" data-fancybox="群組名稱" data-caption="描述">
    <img src="圖片位置">
</a>
<a href="圖片位置" data-fancybox="群組名稱" data-caption="描述">
    <img src="圖片位置">
</a>
```
### 在`data-fancybox`中只要命名是一樣的，打開圖片就會在左右兩側出現箭頭，就可以前往上/下一張，也可以在右上方的九宮格點選一下Show出所有同群組的圖片。`這是執行結果沒有Run到的`
<hr>

# 打開HTML元素
```html
<a data-fancybox data-src="#myDiv" href="#">
    點我打開myDiv
</a>
<div style="display: none;" id="myDiv">
    內容...
</div>
```
### `data-src`中輸入的是ID選擇器，例如範例中#myDiv就會開啟id為myDiv的元素。

<hr>

# 使用Ajax載入內容
```html
<a data-fancybox data-type="ajax" data-src="網址" href="#">
    載入全部
</a>
<a data-fancybox data-type="ajax" data-src="網址 過濾" href="#">
    只載入表單
</a>
<a data-fancybox data-type="ajax" data-src="網址" data-filter="過濾" href="#">
    只載入表單，使用data-filter
</a>
```
## 說明
* ### `data-type` 設定成ajax
* ### `data-src` 設定成要讀取的網址
* ### `data-filter` 輸入CSS選擇器，讀取選擇到的內容。也可以在src網址後空一格輸入CSS選擇器達到一樣的效用。

<hr>

# 以iframe讀取
```html
<a href="#" data-fancybox data-type="iframe" data-src="網址">
    點我載入網頁
</a>
```
<hr>

### 更多詳細的說明及應用可以參考fancybox的文件:http://fancyapps.com/fancybox/3/docs/