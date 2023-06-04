<?php
require_once 'header.php';
require_once __DIR__. '/../../config/database.php';
require_once  __DIR__. '/../../classes/Upload.php';
require __DIR__. '/../../config/app.php';
if (!isset($_GET['id']) || !$_GET['id']) {
    die('missing id parameters ');
}
$events = $con->prepare('SELECT * FROM events where id = ? limit 1 ');
$errors = [];
$events->bind_param('i', $events_id);
$events_id = $_GET['id'];
$events->execute();
$event = $events->get_result()->fetch_assoc();

$name = $event['name'];
$disc= $event['description'];
$location= $event['location'];
$image_event= $event['image_events'];


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (empty($_POST['name'])) {
        array_push($errors, 'تعبئة الاسم مطلوبة');
    }
    if (empty($_POST['description'])) {
        array_push($errors, 'تعبئة الوصف مطلوبة');
    }
    if (empty($_POST['location'])) {
        array_push($errors, 'تعبئةالموقع مطلوبة');
    }
//    if (empty($_POST['image_events'])) {
//        array_push($errors, 'تعبئة الصورة مطلوبة');
//    }


    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {


        $upload = new Upload('uploads/M' );
        $upload->file = $_FILES['image'];
        $errors = $upload->upload();


        if (!count($errors)) {

            //delete old imagear
            unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . '/club2030-master/'. $image_events);

            $image_events = $upload->filePath;
        }

    }

    if (!count($errors)) {
        $query = $con->prepare("UPDATE events SET name = ?, image_events = ?, description = ?, location = ? WHERE id = ?  ");
        $query->bind_param('ssssi', $dName,$DB_image , $db_desc, $db_location ,$dID);
        $dName = $_POST['name'];
        $DB_image = $image_event;
        $db_location = $_POST['location'];
        $db_desc = $_POST['description'];
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
            <div class="card-header" style="color: #6a1a21"> مرحبا بك في تعديل الفعاليات  </div>
            <div class="card-body">
                <?php require 'errors.php';?>
                <form action=""  accept-charset="utf-8" method="POST">
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">Name for event </label>
                        <div class="col-sm-10">
                            <input type="text"  value="<?php echo $name?>"  name="name"  id="name" class="form-control">
                            <small class="form-text">الاسم.</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">email </label>
                        <div class="col-sm-10">
                            <input type="text"  name="description" id="description" value="<?php echo $disc;?>" class="form-control">
                            <small class="form-text"> وصف الفعالية </small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="text">email </label>
                        <div class="col-sm-10">
                            <input  name="location" id="location" type="text"value="<?php echo $location ; ?>" class="form-control">
                            <small class="form-text"> موقع الفعالية </small>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-sm-2 form-label" for="image_events">image  for Member </label>
                        <div class="col-sm-10">
                            <img src="<?php echo $config['app_url'].'/'.$image_event ?>" width="150" alt="">
                            <input type="file" name="image_events" id="image_events" >
                            <small class="form-text">صورة الفعالية</small>
                            <span style="color: red"> </span>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col-sm-10 offset-sm-2">
                            <input  type="submit" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
require_once 'footer.php';
?>
