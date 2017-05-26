<h1>jQuery =>淡入淡出</h1>
<h2>jQuery</h2>

```
<script>
        $(function(){   //與$(document).ready()一樣，在DOM後執行的方法
            $("#in").click(function(){  //id為in的Element被點選時
                $("#blueArea").fadeIn();    //顯示id為blueArea的Element
            });
            $("#out").click(function(){
                $("#blueArea").fadeOut();   //隱藏id為blueArea的Element
            });
            $("#toggle").click(function(){
                $("#blueArea").fadeToggle();    //切換id為blueArea的Element，顯示=>隱藏、隱藏=>顯示
            });
        });
    </script>
```

<h2>html</h2>

```
<button id="in">in</button>
<button id="out">out</button>
<button id="toggle">toggle</button>
<hr>
<div style="width:500px;height:500px;background:blue;" id="blueArea">
    <center>
        <font color="white" size="+5" style="line-height:500px;">藍色區域</font>
    </center>
</div>
```

如果無法使用，請確認jQuery版本是否相容。