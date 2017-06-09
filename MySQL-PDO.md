## 我們能夠透過 PDO 連到 Mysql，重要的是 PDO 可以防止 SQL Injection ，使用 bindValue 的方式，PDO 會自動檢查數據格式，再將使用者填入的資料填入 SQL 語法中。

## PDO的連線方式
```php
//建立PDO
$變數(以下假設為db) = new PDO("mysql:host=localhost;port=3306;dbname=資料庫名稱","username","password");
```

## 設定編碼 (存進資料庫的資料才不會變成亂碼)

```php
$db->exec("set names utf8");
```

# 新增
```php
//讓$變數去接$db->準備的SQL語法
$變數=$db->prepare("insert into 資料表名稱(資料欄位) values(:代換的變數)");
//代換變數
$變數->bindValue(':代換的變數',值);
//執行
$變數->execute();
```

# 修改
```php
$result=$db->prepare("update 資料表名稱 set 欄位1=:代換變數1 where 條件1=:代換變數2");
$result->bindValue(':代換變數1',值);
$result->bindValue(':代換變數2',值);
$result->execute();
```

# 刪除 
```php
$result=$db->prepare("delete from 資料表名稱 where 條件1=:代換變數1");
$result->bindValue(':代換變數1',值);
$result->execute();
```

# 查詢

```php
$result=$db->prepare("select 資料欄位(可以*全選) from 資料表名稱 where 條件1=:代換變數1");
$result->bindValue(':代換變數1',值);
$result->execute();
//以$row變數去接$result取出來的值，值等於mysql_fetch_assoc的型態
$row=$result->fetch(PDO::FETCH_ASSOC);
```

## 另外 bindValue也可以指定型態，只要`bindValue(":變數",值,PDO::PARAM_型態)`;
* ### PDO::PARAM_INT = 數字
* ### PDO::PARAM_STR = 字串

## 也可以使用 `$db->query("SQL語法")`來執行SQL語法，但這並不能使用代換變數的方式。

# 關閉資料庫

## 使用完資料庫之後，記得要將資料庫連線關閉，關閉方法很簡單，只要 `$db=NULL`，只要將資料庫連線設成NULL就可以了。

## 另外再資料庫連線的部分，建議以try_catch將程式{}起來，一發生問題，也比較好處理。
```php
try{
    //建立PDO
    $db = new PDO("mysql:host=localhost;port=3306;dbname=資料庫名稱","username","password");
}catch(PDOException $err){
    //輸出文字並結束程式
    die("出錯，請重試，或者聯絡系統管理員");
    //若在開發階段，可以echo $err變數查看錯誤訊息
}
```