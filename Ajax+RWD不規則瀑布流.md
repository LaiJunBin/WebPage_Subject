# Ajax+RWD不規則瀑布流
## 繼 [Ajax瀑布流-文章](https://github.com/xyz607xx/WebPage_Subject/blob/master/Ajax%E7%80%91%E5%B8%83%E6%B5%81-%E6%96%87%E7%AB%A0.md)之後，這次是不規則的瀑布流，並且使用RWD讓圖片隨著畫面更改位置及大小。
## 執行結果:
![result](images/pubu-image.gif)
### 圖片會來自當前目錄下的images資料夾
# 直接看程式碼
## HTML
```html
<main class="container">
    <ul class="nav" id="myUl">

    </ul>
</main>
```

## CSS
```css
#myUl {
    position: relative;
}

#myUl li {
    position: absolute;
    left: 0;
    top: 0;
    width: 220px;
    padding: 5px 10px;
}

img {
    width: 100%;
}

#bottom {
    width: 100%;
    position: absolute;
    text-align: center;
    height: 30px;
    margin-top: 15px;
    line-height: 0px;
}
```

## Javascript
```javascript
window.onload = function () {
    //取得目標
    var ul = document.querySelector('#myUl');
    var page = 1;
    var ajaxEnd = true;
    //當畫面大小改變
    window.onresize = function () {
        //填滿圖片大小
        fullImage();
        //調整版面
        layout();

    }

    window.onscroll = getData;

    function fullImage() {
        var li = document.querySelectorAll('#myUl li');
        for (var i = 0; i < li.length; i++) {
            liHeight = Number(li[i].style.height.replace('px', ''));
            imgHeight = li[i].children[0].offsetHeight;
            //圖片大小為li的高度或圖片的高度，取最小，不然可能會超過而沒顯示出整張圖片
            li[i].children[0].style.height = Math.min(liHeight, imgHeight) + 'px';
        }
    }

    function getData() {
        var scrollTop = document.documentElement.scrollTop;
        var scrollTotalHeight = document.body.scrollHeight;
        var windowHeight = document.documentElement.clientHeight;
        if (scrollTotalHeight <= scrollTop + windowHeight) {
            //先調整圖片大小
            fullImage();
            if (ajaxEnd) {
                ajaxEnd = false;
                $.ajax({
                    url: './getImage.php',
                    data: {
                        //向後台請求25筆資料
                        'count': 25,
                        'page': page
                    },
                    dataType: 'JSON',
                    method: 'POST',
                    success: function (result) {
                        if (result.length != 0) {
                            for (var data of result) {
                                var htmlStr = '';
                                htmlStr += '<li>';
                                htmlStr += '<img class="img-thumbnail" src="' + data.url + '">';
                                htmlStr += '</li>';
                                ul.innerHTML += htmlStr;
                                ul.lastChild.style.height = data.height + 'px';
                            }
                            page++;
                            ajaxEnd = true;
                            layout();
                        } else {
                            var htmlStr = '';
                            htmlStr += '<div id="bottom" class="alert alert-danger nav">';
                            htmlStr += '沒有圖片了!!';
                            htmlStr += '</div>';
                            ul.innerHTML += htmlStr;
                            ul.lastChild.style.top = ul.style.height;
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }
        }

    }

    function layout() {
        //圖片最小的寬度
        var minWidth = 220;
        //紀錄高度的陣列
        var height = [];
        var li = document.querySelectorAll('#myUl li');
        //畫面寬度等於#myUl的寬度
        var mainWidth = ul.offsetWidth;
        //每個li的寬度都一樣，所以取第一個就好
        var liWidth = li[0].offsetWidth;
        //計算現在的版面一列可以塞下幾張圖
        var count = Math.floor(mainWidth / minWidth);
        //之後推算一個li的寬度可以多寬剛好填滿版面，至少不要留白太多(畫面小的情況下)
        var setLiWidth = Math.floor(mainWidth / count);
        for (var i = 0; i < li.length; i++) {
            li[i].style.width = setLiWidth + 'px';
            li[i].children[0].style.width = setLiWidth + 'px';
            //第一列
            if (i < count) {
                li[i].style.left = setLiWidth * i + 'px';
                li[i].style.top = 0 + 'px';
                height[i] = li[i].offsetHeight;
            } else {
                //如果不是第一列就找出最小的高度往下疊
                var min = Math.min.apply(null, height);
                var index = height.indexOf(min);
                li[i].style.left = index * setLiWidth + 'px';
                li[i].style.top = height[index] + 'px';
                height[index] += li[i].offsetHeight;
            }
        }
        //把#myUl的高度設定的與li一樣高，最後底部的位置比較好定位。
        ul.style.height = Math.max.apply(null, height) + 'px';
        //如果到底部了
        if (document.querySelector("#bottom") != null)
            document.querySelector("#bottom").style.top = Math.max.apply(null, height) + 'px';
    }
    //DOM讀取完先取一次資料
    getData();
}
```

## PHP
```php
<?php
    //當前目錄images中所有的jpg
    $data = glob('./images/*.jpg');
    $count = $_POST['count'];
    $page = $_POST['page'];
    $index = ($page-1)*$count;
    $data = array_slice($data,$index,$count);
    $result = [];
    for($i = 0;$i<count($data);$i++){
        $url = $data[$i];
        //取得圖片資料[0]為寬度[1]為高度
        $img = getimagesize($url);
        $height = $img[1] / ($img[0]/220);
        $result[$i] = ['url'=>$url,'height'=>$height];
    }
    //回傳json
    echo json_encode($result);
?>
```