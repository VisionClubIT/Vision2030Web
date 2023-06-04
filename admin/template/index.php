<?php

require_once 'header.php';
require __DIR__. '/../../config/database.php';
require __DIR__. '/../../config/app.php';

$q1 = $con->query('select * from Members order by id ')->fetch_all(MYSQLI_ASSOC);
$q2 = $con->query('select * from media order by id ')->fetch_all(MYSQLI_ASSOC);
$q3 =  $con->query('select * from events order by id ')->fetch_all(MYSQLI_ASSOC);
$errors = [];
?>



<div class="content">
    <div class="container">
        <div class="row">
            <div class="col-md-12 page-header">
                <div class="page-pretitle">Overview</div>
                <h2 class="page-title">Dashboard</h2>

            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3 mt-3">
                <div class="card">
                    <div class="content">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="icon-big text-center">
                                    <i class="fa fa-book"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <a href="news-add.php" class="small-box-footer" >
                                <div class="detail">
                                    <p   class="detail-subtitle">News</p>

                                    <span class="number"><?php echo  count($q2)?></span>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div class="footer">
                            <hr/>
                            <div class="stats" style="color: #0b5ed7">
                                <i class="fa fa-calendar"></i> For this Week
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 mt-3" style="color: black">
                <div class="card"  >
                    <div class="content" style="color: rebeccapurple">
                        <div class="row" style="color: rebeccapurple">
                            <div class="col-sm-4" style="color: #6a1a21">
                                <div class="icon-big text-center">
                                    <i class="fa fa-group"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <a href="events.php" class="small-box-footer" >
                                    <div class="inner">
                                        <p   class="detail-subtitle"> events</p>

                                        <span class="number"><?php echo  count($q3)?></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="footer" >
                            <hr/>
                            <div class="stats" style="color: red">
                                <i class="fa fa-calendar"></i> For this Week
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 mt-3" style="color: black">
                <div class="card"  >
                    <div class="content" style="color: rebeccapurple">
                        <div class="row" style="color: rebeccapurple">
                            <div class="col-sm-4" style="color: #6a1a21">
                                <div class="icon-big text-center">
                                    <i class="fa fa-key"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <a href="settings.php" class="small-box-footer" >
                                    <div class="inner">
                                        <p   class="detail-subtitle"> settings</p>

                                        <span class="number">2</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="footer" >
                            <hr/>
                            <div class="stats" style="color: red">
                                <i class="fa fa-calendar"></i> For this Week
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 mt-3">
                <div class="card" style="color: #6a1a21">
                    <div class="content" style="color: red" >
                        <div class="row">
                            <div class="col-sm-4" style="color: #6a1a21">
                                <div class="icon-big text-center">
                                    <i class=" fa fa-user"></i>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <a href="members.php" class="small-box-footer" >
                                    <div class="detail">
                                        <p   class="detail-subtitle">view members</p>

                                        <span class="number"><?php echo  count($q1)?></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="footer">
                            <hr/>
                            <div class="stats" style="color: #6a1a21">
                                <i class="fa fa-calendar"></i> For this Week
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="card-body-center">
                <div class="alert">
                <h3 class="alert-danger"> NOT WORKING NOW !</h3>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="align-content-center">
                            <div class="head">
                                <h5 class="mb-0">Most Visited Pages</h5>
                                <p class="text-muted">Current year website visitor data</p>
                            </div>
                            <div class="canvas-wrapper">
                                <table class="table table-striped">
                                    <thead class="success">
                                    <tr>
                                        <th>Page Name</th>
                                        <th class="text-end">Visitors</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>/events.php <a href="#"><i class="fas fa-link blue"></i></a></td>
                                        <td class="text-end">8,340</td>
                                    </tr>
                                    <tr>
                                        <td>/members.php<a href="#"><i class="fas fa-link blue"></i></a></td>
                                        <td class="text-end">7,280</td>
                                    </tr>
                                    <tr>
                                        <td>/news.php  <a href="#"><i class="fas fa-link blue"></i></a></td>
                                        <td class="text-end">6,210</td>
                                    </tr>
                                    <tr>
                                        <td>/more.php <a href="#"><i class="fas fa-link blue"></i></a></td>
                                        <td class="text-end">5,176</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card">
                    <div class="content">
                        <div class="row">
                            <div class="dfd text-center">
                                <i class="blue large-icon mb-2 fas fa-thumbs-up"></i>
                                <h4 class="mb-0">+21,900</h4>
                                <p class="text-muted">twitter PAGE LIKES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card">
                    <div class="content">
                        <div class="row">
                            <div class="dfd text-center">
                                <i class="olive large-icon mb-2 fas fa-eye"></i>
                                <h4 class="mb-0">+98,601</h4>
                                <p class="text-muted">TOTAL VIEWS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php'?>
