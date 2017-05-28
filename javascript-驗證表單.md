# javascript-驗證表單
### 假設要驗證帳號中包含3個英文與3個數字
## javascript
```javascript
<script>
        function checkForm(){
            //設username變數為表單(myForm)中的name為username欄位的value(值)
            var username = myForm.username.value;   
            var password = myForm.password.value;
            if(username!="" && password !=""){ //如果表單都有填寫才執行
                var m,e ;  //指定兩個變數
                m=0;e=0; //初始化兩個變數
                //假設我們要驗證表單的帳號要有3個英文及3個數字
                username=username.toLowerCase(); //先將username轉換成小寫
                for(var i = 0 ;i<username.length ;i++)  
                {
                    //如果username的第i位>=0或<=9，將m變數+1
                    if(username.charAt(i)>="0" && username.charAt(i)<="9")
                        m++;
                    //如果username的第i位>=a或<=z，將e變數+1
                    if(username.charAt(i)>="a" && username.charAt(i)<="z")  
                        e++;
                }
                if (m!=3 || e!=3)  //如果m(數字的數量)不是3個 或 e(英文數量)不是3個 就執行
                {
                    alert("驗證失敗");  //彈跳視窗，內容=驗證失敗
                    return false;  //要是驗證失敗，就回傳 false 表單不會被送出
                }
              return true;  //如果沒有驗證失敗，就會回傳true
              }else{
                 alert("表單不得為空");
                 return false;
            }
        }
    </script>
```

## HTML

```html
<!--一個表單，方法為POST 名字為myForm 按下送出時，呼叫checkForm-->
<form action="#" method="post" name="myForm" onsubmit="return checkForm()">
        <p>帳號：<input type="text" name="username" placeholder="inputName"></p>
        <p>密碼：<input type="password" name="password" placeholder="inputPwd"></p>
        <button type="submit">登入</button>   <!--送出的按鈕-->
    </form>
```