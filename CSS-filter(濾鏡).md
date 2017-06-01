# CSS=>濾鏡(filter)
## filter可以使用的屬性有以下
* ## grayscale => 灰階
* ## sepia => 懷舊
* ## saturate => 飽和
* ## hue-rotate => 色相旋轉
* ## invert => 負片
* ## opacity => 不透明
* ## brightness => 亮度
* ## contrast => 對比
* ## blur => 模糊
* ## drop-shadow => 陰影

# 為什麼要使用濾鏡?

## 舉例來說，如果我們做一個圖片被碰到之後要換個顏色，我們可能需要使用photoshop之類的軟體來做第二張圖，但是如果會使用濾淨，我們可以直接使用濾鏡來變換效果。

# grayscale 灰階
```css
    filter:grayscale(值);
```
## 值的部分可以不輸入或輸入1或是1~100%，不輸入、1及100%是完全灰階

# sepia 懷舊
```css
    filter:sepia(值);
```
## 值的部分跟灰階的使用方式一樣，會讓影像轉換成褐色的影像，就跟老照片一樣。

# saturate 飽和度
```css
    filter:saturate(值);
```
## 輸入1表示不變，大於1或大於100%為增加飽和度，反之小於則降低飽和度。

# hue-rotate 色相旋轉
```css
    filter:hue-rotate(值deg);
```
##輸入0deg~360deg，因為是以色環做旋轉，所以輸入0~360。
# invert 負片
```css
    filter:invert(值);
```
## 輸入0~1之間的數字或百分比

# opacity 透明度
```css
    filter:opacity(值);
```
## 輸入0~1之間的值，1代表完全不透明，而0代表完全透明。
## 可簡寫成 `opacity:(值);`

# brightness 亮度
```css
    filter:brightness(值);
```
## 可以增加亮度也可以減少亮度，100%=完全不變，小於100%等於減少，大於100%等於增加，也可以輸入數值。

# contrast 對比
```css
    filter:contrast(值);
```
## 值跟亮度的設置方法相同

# blur 模糊
```css
    filter:blur(值);
```
## 值要輸入模糊的程度，單位為px、em...

#drop-shadow 陰影
```css
    filter:drop-shadow(值 值 值 顏色);
```
## 這是可以直接反應影像形狀的陰影，與box-shadow不同，值的單位一樣是px、em...