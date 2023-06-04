<?php include 'header.php';
require __DIR__. '/../../config/database.php';
require __DIR__. '/../../config/app.php';
require_once  __DIR__. '/../../classes/Upload.php';

$members = $con->query('select * from events order by id ')->fetch_all(MYSQLI_ASSOC);



?>
<div class="card-body">
    <div class="box box-primary">
        <div class="box-body">
            <div class="card-header">
                <a> events: <?php echo count($members)?></a>

            </div>
            <table width="100%" class="table table-hover" id="dataTables-example">
                <thead>
                <tr>
                    <th>name </th>
                    <th>location</th>
                    <th>images</th>
                    <th> discription in club </th>
                </tr>
                </thead>
                <tbody>
                <?php  foreach ($members as $Member){ ?>
                    <tr>
                        <td><?php echo $Member['name'] ; ?></td>
                        <td ><?php echo $Member['location'] ; ?> </td>
                        <td><img src="<?php  echo $config['app_url'].'/'.$Member['image_events']?>" width="50"></td>
                        <td><?php echo $Member['description'] ;?></td>
                        <td>
                            <a href="edit-event.php?id=<?php echo $Member['id'] ?>" class="btn btn-warning">Edit</a>
                            <form onsubmit="return confirm('Are you sure ?')"  action="" method="post" style="display: inline-block">
                                <input type="hidden" name="id" value="<?php echo $Member['id'] ?>">
                                <button class="btn btn-md btn-danger" type="submit">Delete</button>
                            </form>
                        </td>

                    </tr>


                <?php }; ?>

                </tbody>

            </table>

        </div>

    </div>
</div>


<!--<script>-->
<!--    let a = document.getElementById('M');-->
<!---->
<!--    function span (){-->
<!--      let b= document.createElement('div');-->
<!--      b.innerHTML= "<span >1: " +-->
<!--          "  2: الادارة التنفيذية" +-->
<!--          "الادارة التشغيلية</span> " ;-->
<!--      b.className= "alert alert-danger";-->
<!--    }-->
<!---->
<!--    a.addEventListener('mouseover', span);-->
<!--    alert(a);-->
<!--</script>-->
<!--    <div class="col-lg-12">-->
<!---->
<!--    <span class="alert alert-danger">1: الادارة التشغيلية-->
<!--                                     2: الادارة التنفيذية-->
<!--            </span>-->
<!--        </div>-->
<!-- </div>-->


<?php
if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con->query('delete from events where id=' . $_POST['id']);
    echo "<script>location.replace('index.php')</script>";
}

include 'footer.php';?>
