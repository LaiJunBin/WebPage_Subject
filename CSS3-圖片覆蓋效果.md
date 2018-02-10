# 圖片覆蓋效果
## 執行結果
![result](images/mask.gif)
## CSS
```css
  .image {
            width: 300px;
            height: 300px;
            position: relative;
            overflow: hidden;
            /*隱藏超出大小的內容*/
            border-radius: 12%;
        }

    .image img {
        position: absolute;
        width: 300px;
        height: 300px;
        user-select: none;
        /*禁止使用者反白*/
    }

    .image .mask {
        position: absolute;
        z-index: 9999;
        /*最上層*/
        text-align: center;
        line-height: 192px;
        color: #fff;
        background: rgba(0, 0, 0, 0);
        transition: all .75s;
        border-radius: 12%;
    }

    .image:hover .mask {
        background: rgba(0, 0, 0, 0.5);
    }

    .image .widthMask {
        width: 0px;
        height: 300px;
    }

    .image:hover .widthMask {
        width: 300px;
    }

    .image .heightMask {
        width: 300px;
        height: 0px;
    }

    .image:hover .heightMask {
        height: 300px;
    }

    .image .scaleMask {
        width: 300px;
        height: 300px;
        transform: scale(.3);
    }

    .image:hover .scaleMask {
        transform: scale(1);
    }

    .image .rotateMask {
        width: 300px;
        height: 300px;
        transform: rotate(180deg);
    }

    .image:hover .rotateMask {
        transform: rotate(360deg);
    }

    .image .fadeMask {
        width: 300px;
        height: 300px;
    }

    .image span {
        color: rgba(0, 0, 0, 0);
        text-align: center;
        line-height: 300px;
        font-size: 1.4em;
        transition: all 1s;
        user-select: none;
    }

    .image:hover span {
        color: rgba(255, 255, 255, 1);
        user-select: auto;
    }
```
## 說明
### CSS的部分雖然看起來很長，但其實重點也是透過transition去做控制，舉例來說，原本寬度為0且透明，滑鼠碰到之後寬度變為300並不透明，就做到了由左到右出現的效果。

## HTML
```html
<table>
    <tr>
        <td>
            <div class="image">
                <img src="./images/Sunset.jpg" alt="Sunset">
                <div class="fadeMask mask">
                    <span>Sunset</span>
                </div>
            </div>
        </td>
        <td>
            <div class="image">
                <img src="./images/Blue hills.jpg" alt="Blue hills">
                <div class="scaleMask mask">
                    <span>Blue&nbsp;hills</span>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="image">
                <img src="./images/Water lilies.jpg" alt="Water lilies">
                <div class="widthMask mask">
                    <span>Water&nbsp;lilies</span>
                </div>
            </div>
        </td>
        <td>
            <div class="image">
                <img src="./images/Winter.jpg" alt="Winter">
                <div class="heightMask mask">
                    <span>Winter</span>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="image">
                <img src="./images/Bliss.bmp" alt="Bliss">
                <div class="rotateMask mask">
                    <span>Bliss</span>
                </div>
            </div>
        </td>
        <td></td>
    </tr>
</table>
```