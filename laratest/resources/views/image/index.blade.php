<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>画像投稿</h2>
    <form action="{{route('image.upload')}}" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" value="画像アップ">
</body>
</html>