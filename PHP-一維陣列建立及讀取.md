# PHP 一維陣列
# 陣列是什麼?
### 一連串的資料的集合，使用著連續的記憶體空間，在多數程式語言中陣列中的元素必須有著相同的型態，但PHP可以在陣列儲存多個型態，也就是字串跟數字都在陣列中是可以被接受的。
### 陣列索引從0開始編號，也就是第一個元素編號是0，第二個是1 依此類推.....
## 假設我要讓一個陣列包含，PHP,Laravel,WordPress這三個元素，則PHP陣列可以這樣宣告：
# 宣告方式：
* ## `array('PHP','Laravel','WordPress')`
* ## `['PHP7','Laravel','WordPress']`
# 如何存取值
### 存取值的時候可以使用 $變數名稱[0] 取得到PHP，而[1]就可以取得到Laravel，依此類推。
# 添加元素
## 在其他程式語言，如VB在陣列宣告完之後要更改大小是很麻煩的，就算程式寫得容易但對效能的影響很大，而PHP可以簡單的添加元素，舉例來說我要新增"MySQL"到剛才的陣列中，只要：
### `$變數名稱[3] = "MySQL"`就可以添加元素。
# 讀取陣列中的每一個元素
## 可以使用以下方式：
* ## for迴圈
* ## foreach迴圈
* ## while+(list or each)迴圈
# 使用 for
```php
    for($變數名稱 = 0 ; $變數名稱 < $陣列長度 , $變數名稱++){
        echo $陣列[$變數名稱];
    }
```
# 使用foreach
```php
    foreach($陣列 as $變數){
        echo $變數;
    }
```
# 使用 while + each
```php
    while($變數 = each($陣列)){
        echo $變數['key']."=>".$變數['value']." ";
    }
```
## ['key']可以取得到索引值，['value']則可以取得到值，如果覺得麻煩也可以採用以下這種：
# 使用 while+list+each
```php
    while(list($key,$value) = each($陣列)){
        echo $key."=>".$value." ";
    }
```
## 這樣子$key就會是索引值，而$value就會是值。
# 要注意的是
## 如果使用了`each()`，下次又想再次使用`each()`的話，必須使用`reset()`函式讓元素設回陣列的起點。
# 讀取陣列的範例
## 執行結果
```
使用foreach讀取一維陣列
------------------------------------------------------------
PHP7 Laravel MySQL WordPress 
------------------------------------------------------------
使用foreach讀取索引及資料
------------------------------------------------------------
0=>PHP7 1=>Laravel 2=>MySQL 3=>WordPress 
------------------------------------------------------------
使用while+each讀取一維陣列
------------------------------------------------------------
0=>PHP7 1=>Laravel 2=>MySQL 3=>WordPress 
------------------------------------------------------------
使用while+list+each讀取一維陣列
------------------------------------------------------------
0=>PHP7 1=>Laravel 2=>MySQL 3=>WordPress
```
## 程式碼
```php
$data = ['PHP7','Laravel','MySQL','WordPress'];
echo "使用foreach讀取一維陣列";
echo "<br>".str_repeat('-',60)."<br>";
foreach($data as $value){
    echo $value." ";
}
echo "<br>".str_repeat('-',60)."<br>";
echo "使用foreach讀取索引及資料";
echo "<br>".str_repeat('-',60)."<br>";
foreach($data as $key => $value){
    echo $key."=>".$value." ";
}
echo "<br>".str_repeat('-',60)."<br>";
echo "使用while+each讀取一維陣列";
echo "<br>".str_repeat('-',60)."<br>";
while($current = each($data)){
    echo $current['key']."=>".$current['value']." ";
}
echo "<br>".str_repeat('-',60)."<br>";
reset($data);
echo "使用while+list+each讀取一維陣列";
echo "<br>".str_repeat('-',60)."<br>";
while(list($key,$value) = each($data)){
    echo $key."=>".$value." ";
}
```