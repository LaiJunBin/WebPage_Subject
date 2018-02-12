# PHP=>檔案上傳
## 在檔案上傳的部分，我們需要使用HTML表單，但是在表單的部份我們需要做一點點修改，就是要多設`enctype`的屬性，至於`enctype`有哪一些屬性呢?
<table border="1">
    <th>值</th>
    <th>代表意思</th>
    <tr>
        <td width="50%">application/x-www-form-urlencoded</td>
        <td>這是預設的值。所有字元在發送前會被編碼（空格轉換為“+”符號，特殊字符轉換為ASCII十六進制值）</td>
    </tr>
    <tr>
        <td>multipart/form-data</td>
        <td>不對字元編碼。當使用有文件上傳的表單時，這個值是必需的</td>
    </tr>
    <tr>
        <td>text/plain</td>
        <td>空格轉換為“+”符號，但不會對特殊字元進行編碼</td>
    </tr>
</table>

### 在`form`加入`enctype="multipart/form-data"`之後呢，我們在表單中加入`input`的標籤，型態(type)設為"file"代表文件上傳，就如下
### `<input type="file" name="名稱">`
<hr>

### 選擇檔案，送至PHP之後，可以使用PHP的`var_dump`函數來查看收到的值。
<hr>

### 在一般form表單中，PHP接GET值的方式是`$_GET['名稱']`，在POST則是`$_POST['名稱']`、但如果是檔案上傳，則是使用`$_FILES['名稱']`，所以我們只要在`var_dump($_FILES['名稱'])`，就可以顯示出這個檔案的詳細資料。
### 假設表單這樣子設：
```html
<form action="PHP網址" method="post" enctype="multipart/form-data">
        <input type="file" name="fileName">
        <button type="submit">送出</button>
    </form>
```
## 那麼我們PHP輸入`var_dump($_FILES)`則會輸出：
![詳細$_FILES](images/var_dump($_FILES).jpg)
## 會看到以下幾個屬性：這是一個二維陣列
<table border="1">
    <th>值</th>
    <th>代表意思</th>
    <tr>
        <td>["fileName"]=> array(5) </td>
        <td>代表有一個fileName名稱的陣列，底下還有5個索引</td>
    </tr>
    <tr>
        <td> ["name"]=> string(6) "ex.png"</td>
        <td>為上傳檔案的名稱，檔案名稱為"ex.png"</td>
    </tr>
    <tr>
        <td>["type"]=> string(9) "image/png"</td>
        <td>為檔案的型態，舉例來說，測試上傳的為圖片(png)檔案，就會顯示出"image/png"，我們可以使用`explode`來分割字串。</td>
    </tr>
    <tr>
        <td>["tmp_name"]=> string(23) "C:\xampp\tmp\php511.tmp"</td>
        <td>暫存檔案的位置，做移動檔案用(下方介紹)</td>
    </tr>
    <tr>
        <td>["error"]=> int(0) </td>
        <td>錯誤，如沒有錯誤則為0</td>
    </tr>
    <tr>
        <td>["size"]=> int(445064)</td>
        <td>檔案大小</td>
    </tr>
</table>

### 知道這些屬性之後，我們就可以來移動這些檔案到伺服器了。如何移動呢？ 
### `使用move_uploaded_file()`
<hr>

### move_uploaded_file(tmp,path)這個函數有兩個值。
### tmp放暫存檔案的位置，也就是`$_FILES['名字']['tmp_name']`
### 而path則是放完整存放的路徑包含檔案名稱及副檔名。
<hr>

### 可以一個值存在一個變數，假設以$tmp去接`$_FILES['名字']['tmp_name']`，而$file存"uploadData/1234.png"，那麼輸入：
### `move_uploaded_file($tmp,$file);`
### 就會將檔案傳送到在這個網站下的uploadData資料夾並且命名為1234.png的檔案。
<hr>

### Q:可是這樣會有重複檔名的問題？
### A:所以我們要將檔案重新命名，可以使用`date('YmdHis')`，獲取當前時間並結合上傳者的資料(如帳號)，就不會有重複檔名的問題了。

# 範例：
```php
$tmp=$_FILES['fileName']['tmp_name'];
$type=explode('/',$_FILES['fileName']['type']);
$file="images/".date("YmdHis").".".$type[1];
move_uploaded_file($tmp,$file);
```
## 那麼就會在網站下的images資料夾底下建立一個檔案，而名稱為目前的時間，副檔名不變。