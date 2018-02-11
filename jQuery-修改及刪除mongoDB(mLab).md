# jQuery 修改及刪除MongoDB(mLab)，使用API
## 執行結果：
![result](images/mlab2.gif)
## 繼[jQuery-新增及讀取mongoDB(mLab)](https://github.com/xyz607xx/WebPage_Subject/blob/master/jQuery-%E6%96%B0%E5%A2%9E%E5%8F%8A%E8%AE%80%E5%8F%96mongoDB(mLab).md)之後，這次增加了修改與刪除功能，並把$.ajax的部分建立一個函數重複使用，減少程式碼的長度。
## 首先額外引入了一個js，必須加入在jQuery之後。
```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```
### 這個是bootstrap的js，因為這次修改的介面使用到了bootstrap的彈跳視窗。

## 額外新增了一段CSS
```css
a:hover {
    cursor: pointer;
}
```

## HTML部分新增了以下
```html
<div class="modal fade" id="update" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="updateTitle"></h4>
            </div>
            <form id="updateBookForm">
                <div class="modal-body">
                    <div class="form-group">
                        <label>書名：</label>
                        <input type="text" class="form-control" id="updateBookTitle">
                    </div>
                    <div class="form-group">
                        <label>類別：</label>
                        <input type="text" class="form-control" id="updateBookCategory">
                    </div>
                    <div class="form-group">
                        <label>描述：</label>
                        <input type="text" class="form-control" id="updateBookDescription">
                    </div>
                    <input type="hidden" id="bookId">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                    <button type="submit" class="btn btn-primary">儲存變更</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

## javascript的部分(全部)
```javascript
$(function () {
    $("#addBookForm").on('submit', function (e) {
        e.preventDefault();
        var title = $("#bookTitle").val();
        var category = $("#bookCategory").val();
        var description = $("#bookDescription").val();
        var url = 'https://api.mlab.com/api/1/databases/資料表名稱/collections/集合名稱?apiKey=自己的Key';
        ajaxProcess(url, "POST", {
            'title': title,
            'category': category,
            'description': description
        });
    });
    $("body").on('click', '#updateBook', function () {
        var id = $(this).data('id');
        var title = $(this).data('title');
        var category = $(this).data('category');
        var description = $(this).data('description');
        $("#updateTitle").text('修改 ' + title);
        $("#updateBookTitle").val(title);
        $("#updateBookCategory").val(category);
        $("#updateBookDescription").val(description);
        $("#bookId").val(id);
    });
    $("#updateBookForm").on('submit', function (e) {
        e.preventDefault();
        var id = $("#bookId").val();
        var title = $("#updateBookTitle").val();
        var category = $("#updateBookCategory").val();
        var description = $("#updateBookDescription").val();
        var url = 'https://api.mlab.com/api/1/databases/資料表名稱/collections/集合名稱/' + id + '?apiKey=自己的Key';
        ajaxProcess(url, "PUT", {
            'title': title,
            'category': category,
            'description': description
        });
    });
    $("body").on('click', '#deleteBook', function () {
        var id = $(this).data('id');
        var url = 'https://api.mlab.com/api/1/databases/資料表名稱/collections/集合名稱/' + id + '?apiKey=自己的Key';
        ajaxProcess(url, "DELETE", {});
    });
});

function ajaxProcess(url, type, data) {
    $.ajax({
        url: url,
        data: JSON.stringify({
            "title": data.title,
            "category": data.category,
            "description": data.description
        }),
        type: type,
        asyna: true,
        timeout: 300000,
        contentType: "application/json",
        success: function (data) {
            location.reload();
        },
        error: function (xhr, status, err) {
            console.log(err);
        }
    });
}

function getBooksRecord() {
    $.ajax({
        url: "https://api.mlab.com/api/1/databases/資料表名稱/collections/集合名稱?apiKey=自己的Key"
    }).done(function (data) {
        var output = "<div>";
        $.each(data, function (key, data) {
            output += '<div class="well">';
            output += '<h3>' + data.title + '</h3>';
            output += '<p>' + data.category + '</p>';
            output += '<p>描述：' + data.description + '</p>';
            output += '<p>';
            output += '<a id="updateBook" data-id="' + data._id.$oid +
                '" data-title="' + data.title +
                '" data-category="' + data.category +
                '" data-description ="' + data.description +
                '" data-toggle="modal" data-target="#update">修改</a>';
            output += ' | <a id="deleteBook" data-id="' + data._id.$oid + '">刪除</a>';
            output += '</p>';
            output += '</div>';
        });
        $("#books").html(output);
    });
}
```
