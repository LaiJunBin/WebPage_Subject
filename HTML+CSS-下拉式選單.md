# HTML+CSS=>下拉式選單

## 執行結果

![下拉式選單結果](images/drop-menu.jpg)

## CSS
```CSS
ul{ /*所有ul的元素*/
    margin:0px;     /*邊框0px*/
    padding:0px;    /*不留白*/
}
a{  /*所有a的元素*/
    color:white;    /*文字顏色白色*/
    text-decoration:none;   /*無底線*/
}
.nav{   /*nav類別*/
    width:100%;     /*寬度100%*/
    height:50px;    /*高度50px*/
    background:#09F;    /*背景顏色#09f*/
    border-radius:50px;   /*添加50px的圓角*/
}
.nav ul li{     /*.nav中所有的ul中的li*/
    float:left; /*靠左浮動*/
    list-style-type:none;   /*清單樣式型態等於沒有，就是沒有清單項目符號*/
    line-height:50px;   /*行高50px*/
    padding:0px 30px;   /*上下留白0px，左右留白30px*/
    position:relative;  /*相對定位，若有子元素(absolute)會向這個位置對齊*/
}
.nav ul li:hover .drop-menu{    /*類別nav中的ul中所有的li被滑鼠碰到*/
    display:block;  /*把類別為drop-menu的元素顯示*/
}
.nav ul li ul li{
    float:none; /*取消浮動*/
    line-height:25px;   /*行高改為25px*/
    padding:0px 5px;    /*上下留白0px，左右留白5px*/
}
.drop-menu{
    position:absolute;  /*relative的子元素*/
    right:15px; /*距離右邊多15px*/
    display:none;   /*隱藏*/
    background:#09f;
    border-radius:0px 0px 12px 12px;    /*分別為上下左右的圓角*/
}
```

## HTML

```HTML
<div class="nav">
    <ul>
        <li><a href="#">選單一</a>
            <div class="drop-menu">
                <ul>
                    <li><a href="#">子選單一</a></li>
                    <li><a href="#">子選單二</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">選單二</a>
            <div class="drop-menu">
                <ul>
                    <li><a href="#">子選單一</a></li>
                    <li><a href="#">子選單二</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">選單三</a>
            <div class="drop-menu">
                <ul>
                    <li><a href="#">子選單一</a></li>
                    <li><a href="#">子選單二</a></li>
                    <li><a href="#">子選單三</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">選單四</a>
            <div class="drop-menu">
                <ul>
                    <li><a href="#">子選單一</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
```