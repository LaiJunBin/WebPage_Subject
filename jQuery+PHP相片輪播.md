# jQuery+PHP相片輪播
## 執行結果:
![結果](images/jQuery+PHP相片輪播.gif)

---
### 有點類似於[jQuery-輪播頁籤](https://github.com/xyz607xx/WebPage_Subject/blob/master/jQuery-%E8%BC%AA%E6%92%AD%E9%A0%81%E7%B1%A4.md)的概念，但這邊加入了一些特效，且圖片是以Ajax向PHP請求來的。

---
# 程式碼

## HTML
```html
<div style="width:500px;height:500px;border:1px solid #333">
    <img src="" id="img" class="imgAction">
</div>

<hr>
<div id="btnGroup">

</div>
<hr>
<div id="operationGroup">
    <button class="operaBtn active">直向縮放</button>
    <button class="operaBtn">橫向縮放</button>
    <button class="operaBtn">淡入淡出</button>
    <button class="operaBtn">左上右下</button>
</div>
```

## JavaScript
```javascript
$(function () {
    //預設沒有被點擊過(圖片)
    var checkClick = false;
    //圖片初始化
    function imageInin() {
        //被點擊
        checkClick = true;
        //取得使用的特效
        var type = $("#operationGroup button.active").index();
        switch (type) {
            case 0:
                //直向所以高度先設為0
                $("#img").css('height', '0px');
                break;
            case 1:
                //橫向所以寬度
                $("#img").css('width', '0px');
                break;
            case 2:
                //淡入淡出就設定透明度
                $("#img").css('opacity', '0');
                break;
            case 3:
                //左上右下就把寬高設為0
                $("#img").css({
                    'width': '0px',
                    'height': '0px'
                });
                break;
        };
    }
    //重設圖片
    function imageReset(url) {
        //因為初始化改變過CSS，以0.5秒轉變，這裡需要0.5秒後清除CSS屬性
        setTimeout(function () {
            $("#img").css({
                'width': "",
                'height': "",
                'opacity': ""
            });
            //設定圖片來源
            $("#img").attr('src', url);
            //在圖片轉變完成才將點擊設定為false
            setTimeout(function () {
                checkClick = false;
            }, 500)
        }, 500);
    }
    $.ajax({
        url: 'img.php',
        dataType: 'json',
        success: function (result) {
            //forEach第一個參數為value，第二個為索引，所以x=路徑,i=0,1,2,3....
            result.forEach(function (x, i) {
                //加入按鈕，並設定url(自訂參數)為圖片路徑
                $("#btnGroup").append('<button url="' + x + '"></button>');
                //將按鈕群組中最後一個按鈕設定背景為來源圖片
                $("#btnGroup button").last().css("background", 'url(' + x + ')');
                //如果這是第一張圖
                if (i == 0) {
                    //預設第一個按鈕被點擊(效果)，並把img設為第一張圖片
                    $("#img").attr('src', x);
                    $("#btnGroup button").last().addClass('active');
                }
            });
        }
        //當ajax執行完
    }).done(function () {
        //按鈕群組中的按鈕被點擊
        $("#btnGroup button").click(function () {
            //如果checkClick還是false(圖片沒有在輪播狀態)
            if (!checkClick) {
                //初始化圖片
                imageInin();
                //當前按鈕加入特效
                $('#btnGroup button').removeClass('active');
                $(this).addClass('active');
                var url = $(this).attr('url');
                //重設圖片
                imageReset(url);
            }
        });
    });

    $("#operationGroup button").click(function () {
        $('#operationGroup button').removeClass('active');
        $(this).addClass('active');
    })
    //每2秒執行，且checkClick=false
    setInterval(function () {
        if (!checkClick) {
            imageInin();
            //取得當前顯示的圖片的按鈕索引
            var current = $("#btnGroup button.active").index();
            //取得有幾張圖片
            var max = $("#btnGroup button").length;
            //設定索引+1，記得取餘數(循環)
            //Ex:3張圖，索引=0,1,2 ， (n+1) % 3 永遠在0,1,2,0,1...
            var index = (parseInt(current) + 1) % max;
            //對應按鈕加入active
            $('#btnGroup button').removeClass('active');
            $("#btnGroup button").eq(index).addClass('active');
            var url = $("#btnGroup button").eq(index).attr('url');
            imageReset(url);
        }
    }, 2000);


});
```

## CSS
```css
button {
    background-size: 100px 100px !important;
    width: 100px;
    height: 100px;
    border: 1px solid #333;
    margin: 3px;
}

button:hover {
    cursor: pointer;
}

#img {
    width: 500px;
    height: 500px;
}

.active {
    filter: sepia(5);
}

.imgAction {
    /*有css屬性改變時，以0.5秒完成漸變*/
    transition: all .5s;
}
```

## PHP
```php
<?php
    //將images目錄下所有.jpg的檔案路徑以json傳回
    echo json_encode(glob('./images/*.jpg'));
?>
```