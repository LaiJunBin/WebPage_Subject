# Laravel 環境建置
### Laravel是PHP的Framework，所以必須先安裝PHP的環境，可以單獨安裝Apache或安裝整合過的Xampp。
---
## 第一步:安裝Xampp:[連結](https://www.apachefriends.org/zh_tw/index.html)
### 安裝完成之後必須安裝Composer(PHP的套件管理器)，再來利用Composer來安裝Laravel。
---
## 第二步:安裝Composer[連結](https://getcomposer.org/)
### 安裝完成Composer之後，有兩種安裝Laravel的方式：
* ## 以Composer的create-project功能來安裝
* * composer create-project laravel/laravel 專案名稱
* ## 使用Laravel安裝工具安裝
* * ### 先全域安裝Laravel安裝工具
* * * ### composer global require "laravel/installer"
* * ### 再來就可以輕鬆建立Laravel專案
* * * ### laravel new 專案名稱