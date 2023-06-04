<?php
require_once 'header.php';
require_once __DIR__. '/../../config/database.php';
require_once  __DIR__. '/../../classes/Upload.php';


$members_t = $con->query('select * from Members_team order by id ')->fetch_all(MYSQLI_ASSOC);
$errors = [];
$name='';
$email= '';
//$id_members= '';

//------------------

if($_SERVER['REQUEST_METHOD'] == 'POST'){


    $name = mysqli_real_escape_string($con, $_POST['name_members']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $disc_member= mysqli_real_escape_string($con , $_POST['disc_member']);


    if(empty($name)){array_push($errors, "Name is required");}
    if(empty($email)){array_push($errors, "email is required");}
    if(empty($disc_member)){array_push($errors, "وصف منصب العضو مهم");}
    //if(empty($description)){array_push($errors, "Description is required");}
    if(empty($_FILES['image']['name'])){array_push($errors, "Image is required");}

    if(!count($errors)){
        $date = date('Ym');
        $upload = new Upload('uploads/M');
        $upload->file = $_FILES['image'];
        $errors = $upload->upload();
    }


    if(!count($errors)){
       $query=
        "insert into Members (name_members, email, id_members,image ,disc_member)" .
        "values('$name','$email',".$_POST['id_members'].",'$upload->filePath' ,'$disc_member')";

        $con->query($query);

        if($con->error){
            array_push($errors, $con->error);
        }else{
          echo "<script>location.href = 'index.php'</script>";
        }


    }
}

?>


    <div  class="card-body">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header" style="color: #6a1a21"> مرحبا بك في تسجيل الاعضاء</div>
                <div class="card-body">
                    <?php require 'errors.php';?>
                    <form enctype="multipart/form-data"  accept-charset="utf-8" method="post">
                        <div class="mb-3 row">
                            <label class="col-sm-2 form-label" for="text">Name for member </label>
                            <div class="col-sm-10">
                                <input type="text" name="name_members"  class="form-control">
                                <small class="form-text">الاسم.</small>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 form-label" for="text">email </label>
                            <div class="col-sm-10">
                                <input type="email" name="email"  class="form-control">
                                <small class="form-text"> الايميل </small>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 form-label" for="text">المنصب في النادي </label>
                            <div class="col-sm-10">
                                <input type="text" name="disc_member"  class="form-control">
                                <small class="form-text"> منصب العضو </small>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 form-label" for="text">NAME team </label>
                            <div class="col-sm-10">
                                <select name="id_members"  class="form-control">
                                    <option>Select team</option>
                                    <?php foreach($members_t as $member) { ?>
                                        <option value="<?php echo $member['id'] ?>">
                                            <?php echo $member['name'] ?>

                                        </option>

                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 form-label" for="image">image  for Member </label>
                            <div class="col-sm-10">
                                <input type="file" name="image"  class="form-control">
                                <small class="form-text">الصورة الشخصية :</small>
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
    </div>







<?php
require 'footer.php';
