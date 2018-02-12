# CSS選擇器

## CSS格式
```
CSS選擇器{
    屬性1:值1;
    屬性2:值2;
}
```
## CSS選擇器有以下：
* ## 標籤 (div、a、span、table等等以下表示為Element) = "Element"
* ## 屬性 (colspan、width、value、placeholder) = "[屬性=值]"
* ## 類別 (Class) = ".class"  (可以有很多個，群組使用)
* ## ID (id) = "#id" (同樣的ID只能有一個)

## 以下有幾個範例

* ## `<div></div>`，選擇方式=div
* ## `<div class="div1"></div>`，選擇方式=.div1
* ## `<div id="div2"></div>`，選擇方式=#div2
* ## `<table colspan="2"></table>`，選擇方式=[colspan=2]

## 當然，也可以把選擇器一起用，例如：

* ## `<div class="div1"></div>`，選擇方式=div.div1
* ## `<table colspan="2"></table>`，選擇方式=table[colspan=2]

## 這樣子精確度也會比較高，如果可以，盡量不要把標籤單獨做為選擇器，範圍太廣泛。

## 只有這些是不夠用的，還有以下幾種模式：

* ## 孩子模式 (Child Selector)
* ## 子孫模式 (Descendant Selector)
* ## 跟屁蟲模式 (Adjacent Silbing Selector)
* ## 蟲蟲模式 (Sibling Selector)
* ## 全選模式 (Universal Selector)
* ## 虛擬類別選擇器 (Pseudo-classes Selector)

# 孩子模式：
## 格式=element1>element2
## 意思是選取element2且element2在element1的下一層，
## 舉例來說 div>p，就是選取p且p在div的下一層。
```html
<div>
    <p>我會被選到</p>
    <span>
        <p>我不會被選到</p>
    </span>
</div>
```

# 子孫模式：
## 格式=element1 element2
## 意思是選取element1底下所有的element2
## 舉例來說，如果以div p 來執行上面孩子模式的範例，所有的p都會被選到。

# 跟屁蟲模式：
## 格式=element1+element2
## 會選取element2的前面是element1的元素
## 舉例來說 div+p：

```html
    <p>我不會被選到</p>
    <div>
        <p>我不會被選到</p>
    </div>
    <p>我會被選到</p>
    <span></span>
    <p>我不會被選到</p>
```

# 蟲蟲模式
## 格式=element1~element2
## 會選取前面有出現過element1的所有element2
## 例子：div~p

```html
    <p>我不會被選到</p>
    <div>
        <p>我不會被選到</p>
    </div>
    <p>我會被選到</p>
    <span></span>
    <p>我會被選到</p>
```

# 全選模式
## 格式=*
## 會選取所有的元素
## 舉例來說如果只輸入 * 那麼上方蟲蟲模式的範例，body、p、div、span通通都會被選到。

# 虛擬類別選擇器
## 格式=CSS選擇器:虛擬類別
## 不同的虛擬類別會有不同的作用
## 例如:hover是滑鼠碰到



# 遊戲時間
## 了解這一些之後，我們可以在 [這個連結](https://flukeout.github.io/) 來從遊戲中練習CSS選擇器！

# CSS的優先順序
## 標籤選擇器 => 5
## Class、屬性、虛擬類別 => 4
## ID => 3
## style => 2
## !important => 1

## 數字越小越優先，要是優先順序一樣則後者為大，後面執行的會把前面的覆蓋掉。
# Example：
```
<div style="text-align:left;">
    <div style="text-align:center;">
        我會靠哪邊對齊?
    </div>
</div>
```

## Ans:我會靠中間對齊

# 如何使用!important(很重要)?
## 格式：
```
    CSS選擇器{
        屬性:值!important;
    }
```

# 要是有兩個!important呢？
## 一樣是後者為大。