<?php
require 'header.php';
require __DIR__. '/../../config/database.php';
require_once  __DIR__. '/../../classes/Upload.php';
$errors = [];
$name = '';
$Description = '';



if($_SERVER['REQUEST_METHOD'] == 'POST'){


    $name = mysqli_real_escape_string($con, $_POST['name']);
    $description = mysqli_real_escape_string($con, $_POST['description']);
    $location= mysqli_real_escape_string($con, $_POST['location']);

    if(empty($name)){array_push($errors, "Name is required");}
    if(empty($description)){array_push($errors, "Description is required");}
    if(empty($_FILES['image_events']['name'])){array_push($errors, "Image is required");}

    if(!count($errors)){
        $date = date('Ym');
        $upload = new Upload('uploads/M/');
        $upload->file = $_FILES['image_events'];
        $errors = $upload->upload();
    }


    if(!count($errors)){

        $query = "insert into events ( name , description ,location , image_events ) values ('$name', '$description','$location',  '$upload->filePath')";
        $con->query($query);

        if($con->error){
            die("<script>location.href = '500.html'</script>");
        }else{
            echo "<script>location.href = 'index.php'</script>";
        }


    }
}
?>

<div  class="card-body">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header" style="color: #6a1a21"> مرحبا بك في تسجيل الفعاليات</div>
            <div class="card-body">
                <?php require 'errors.php';?>
                <form enctype="multipart/form-data"  accept-charset="utf-8" method="post">
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">Name for events </label>
                        <div class="col-sm-10">
                            <input type="text" name="name" placeholder="events name" class="form-control">
                            <small class="form-text">حط هنا اسم الفعالية.</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">NAME Discription </label>
                        <div class="col-sm-10">
                            <textarea  name="description"  cols="30" rows="10" class="form-control"></textarea>
                            <small class="form-text">  هنا الوصف    </small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">NAME EVENTS </label>
                        <div class="col-sm-10">
                            <input type="text" name="location" placeholder="location name" class="form-control">
                            <small class="form-text">  هنا الموقع    </small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="file">image  for events </label>
                        <div class="col-sm-10">
                            <input type="file" name="image_events" placeholder="images_events" class="form-control">
                            <small class="form-text">حط هنا اسم الفعالية.</small>
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
</div>

<?php
require 'footer.php';?>
