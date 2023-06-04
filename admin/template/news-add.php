<?php
require 'header.php';
require_once __DIR__. '/../../config/database.php';
require_once  __DIR__. '/../../classes/Upload.php';
$news_media = $con->query('select * from media order by id ')->fetch_all(MYSQLI_ASSOC);

$errors = [];
$name = '';
$Description = '';
$date_news= date("Y-m-d H:i:s");

if($_SERVER['REQUEST_METHOD'] == 'POST'){


    $name = mysqli_real_escape_string($con, $_POST['name']);
    $description = mysqli_real_escape_string($con, $_POST['disc_news']);

    if(empty($name)){array_push($errors, "Name is required");}
    if(empty($description)){array_push($errors, "Description is required");}
    if(empty($_FILES['image']['name'])){array_push($errors, "Image is required");}

    if(!count($errors)){
        $date = date('Ym');
        $upload = new Upload('uploads/M/');
        $upload->file = $_FILES['image'];
        $errors = $upload->upload();
    }


    if(!count($errors)){

        $query = "insert into media ( name , disc_news ,  images  ) values ('$name',  '$description',  '$upload->filePath')";
        $con->query($query);

        if($con->error){
            array_push($errors ,$con->error);
        }else{
            echo "<script>location.href = 'index.php'</script>";
        }


    }
}

?>

<div  class="card-body">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header" style="color: #6a1a21">مرحبا بك في تسجيل الاخبار </div>
            <div class="card-body">
                <?php require 'errors.php';?>
                <form enctype="multipart/form-data"  accept-charset="utf-8" method="post">
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">اسم الخبر  </label>
                        <div class="col-sm-10">
                            <input type="text" name="name"  class="form-control">
                            <small class="form-text">آسم الخبر </small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">وصف الخبر  </label>
                        <div class="col-sm-10">
                            <textarea  name="disc_news" type="text" size="15px">   </textarea>
                            <small class="form-text">  </small>
                        </div>
                    </div>


                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="image"> صورة للخبر </label>
                        <div class="col-sm-10">
                            <input type="file" name="image"  class="form-control">
                            <small class="form-text">الصورة للخبر  </small>
                            <span style="color: red"> (ليست اجبارية)</span>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col-sm-10 offset-sm-2">
                            <input type="submit" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div




<?php

require 'footer.php';

