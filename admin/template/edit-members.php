<?php
include 'header.php';
require_once __DIR__. '/../../config/database.php';
require_once  __DIR__. '/../../classes/Upload.php';
require __DIR__. '/../../config/app.php';





if (!isset($_GET['id']) || !$_GET['id']) {
    die('missing id parameter ');
}
    $member = $con->prepare('select * from Members  where id = ? limit 1 ');
    $errors = [];
    $member->bind_param('i', $member_id);
    $member_id = $_GET['id'];
    $member->execute();
    $members = $member->get_result()->fetch_assoc();

    $name = $members['name_members'];
    $email = $members['email'];
    $disc_member = $members['disc_member'];
    $image = $members['image'];
    $id_member = $members['id_members'];


    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        if (empty($_POST['name_members'])) {
            array_push($errors, 'تعبئة الاسم مطلوبة');
        }
        if (empty($_POST['email'])) {
            array_push($errors, 'تعبئة الايميل مطلوبة');
        }
        if (empty($_POST['disc_member'])) {
            array_push($errors, 'تعبئة مكانة عضو مطلوبة');
        }
        if (empty($_POST['name_members'])) {
            array_push($errors, 'تعبئة الفريق مطلوبة');
        }


        if (isset($_FILES['image_events']) && $_FILES['image_events']['error'] == 0) {


                $upload = new Upload('uploads/M/' );
                $upload->file = $_FILES['image_events'];
                $errors = $upload->upload();


                if (!count($errors)) {

                    //delete old imagear
                    unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . '/2030vswebsite/'. $image);

                    $image = $upload->filePath;
                }

        }

        if (!count($errors)) {
            $query = $con->prepare("UPDATE `Members` SET id_members = ? , name_members = ? ,  email = ? , disc_member = ? , image = ? WHERE id = ? ");
            $query->bind_param('issssi', $dName,$d_email ,$d_position, $d_image,  $dId , $id_members  );
            $dName = $_POST['name_members'];
            $d_position = $_POST['disc_member'];
            $d_image = $image;
            $d_email = $_POST['email'];
            $id_members = $_POST['id_members'];
            $dId = $_GET['id'];
            $query->execute();
           ;

            if ($query->error) {
                array_push($errors, $query->error);

            } else {
                echo "<script>location.href = 'index.php'</script>";

            }
        }
    }

?>

<div  class="card-body">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header" style="color: #6a1a21"> مرحبا بك في تعديل الاعضاء </div>
            <div class="card-body">
                <?php require 'errors.php';?>
                <form   accept-charset="utf-8" method="POST">
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">Name for member </label>
                        <div class="col-sm-10">
                            <input type="text" name="name_members" value="<?php echo $name ?>" class="form-control">
                            <small class="form-text">الاسم.</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">email </label>
                        <div class="col-sm-10">
                            <input type="email" name="email"   value="<?php echo $email ?>" class="form-control">
                            <small class="form-text"> الايميل </small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">المنصب في النادي </label>
                        <div class="col-sm-10">
                            <input  type="text" name="disc_member"   value="<?php echo $disc_member ?>" class="form-control">
                            <small class="form-text"> منصب العضو </small>
                        </div>
                  </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">NAME team </label>
                        <div class="col-sm-10">
                            <select name="id_members"  class="form-control">
                                <option>Select team</option>
                                <?php $members_t = $con->query('select * from Members_team order by id ')->fetch_all(MYSQLI_ASSOC);?>

                                <?php foreach($members_t as $member) { ?>
                                    <option value="<?php echo $member['id_members'] ?> ">
                                        <?php echo $member['name']  ?>

                                    </option>

                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="image">image  for Member </label>
                        <div class="col-sm-10">
                            <img src="<?php echo $config['app_url'].'/'.$image ?>" width="150" alt="">
                            <input type="file" name="image" >
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

?>
