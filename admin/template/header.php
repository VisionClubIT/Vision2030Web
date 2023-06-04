
<?php require_once __DIR__. '/../../config/app.php';

 require_once __DIR__. '/../../config/database.php';

// session_start();
//if(!isset($_SESSION['email']) || $_SESSION['email'] != 'admin@admin.com');
//  die('غير مسموح لك بالدخول الى لوحة التحكم ')
?>
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dashboard | Bootstrap Simple Admin Template</title>
    <link href="assets/vendor/fontawesome/css/fontawesome.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/solid.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/brands.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/master.css" rel="stylesheet">

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>
    <link href="assets/css/pe-icon-7-stroke.css" rel="stylesheet" />
</head>

<body>
<div class="wrapper">
    <nav id="sidebar" class="active">
        <div class="sidebar-header">
            <img src="assets/img/img.png" alt="bootraper logo" class="app-logo">
        </div>
        <ul class="list-unstyled components text-secondary">
            <?php require "messages.php"; ?>
            <li>
                <a href="index.php"><i class="fa fa-home"></i> Dashboard</a>
            </li>

            <li>
                <a href="#authmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fa fa-users"></i> EVENTS</a>
                <ul class="collapse list-unstyled" id="authmenu">
                    <li>
                        <a href="events.php"><i class="fa fa-lock"></i> create</a>
                    </li>
                    <li>
                        <a href="view-event.php"><i class="fa fa-user"></i>  view </a>
                    </li>
                    <li>
                        <a href="forms.php"><i class="fa fa-user"></i> #</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fa fa-user"></i> members</a>
                <ul class="collapse list-unstyled" id="pagesmenu">
                    <li>
                        <a href="add-members.php"><i class="fa fa-file"></i>  create </a>
                    </li>
                    <li>
                        <a href="members.php"><i class="fa fa-info-circle"></i> view members</a>
                    </li>
                    <li>
                        <a href="500.html"><i class="fa fa-info-circle"></i> 500 Error page</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#uielementsmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fa fa-cog"></i> settings</a>
                <ul class="collapse list-unstyled" id="uielementsmenu">
                    <li>
                        <a href="settings.php"><i class="fas fa-angle-right"></i> customize </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pagesmenues" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fa fa-newspaper"></i> news</a>
                <ul class="collapse list-unstyled" id="pagesmenues">
                    <li>
                        <a href="news-add.php"><i class="fas fa-angle-right"></i> add </a>
                    </li>
                    <li>
                        <a href="views-news.php"><i class="fas fa-angle-right"></i> view </a>
                    </li>
                </ul>
            </li>


    </nav>
    <div id="body" class="active">
        <!-- navbar navigation component -->
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <button type="button" id="sidebarCollapse" class="btn btn-light">
                <i class="fa fa-bars"></i><span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ms-auto">
<!--                    <li class="nav-item dropdown">-->
<!--                        <div class="nav-dropdown">-->
<!--                            <a href="#" id="nav1" class="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                                <i class="fa fa-link"></i> <span>Quick Links</span> <i style="font-size: .8em;" class="fa fa-caret-down"></i>-->
<!--                            </a>-->
<!--                            <div class="dropdown-menu dropdown-menu-end nav-link-menu" aria-labelledby="nav1">-->
<!--                                <ul class="nav-list">-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-list"></i> Access Logs</a></li>-->
<!--                                    <div class="dropdown-divider"></div>-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-database"></i> Back ups</a></li>-->
<!--                                    <div class="dropdown-divider"></div>-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-cloud-download-alt"></i> Updates</a></li>-->
<!--                                    <div class="dropdown-divider"></div>-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-user-shield"></i> Roles</a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </li>-->
                    <li class="nav-item dropdown">
                        <div class="nav-dropdown">
                            <a href="#" id="nav2" class="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user"></i> <span><?php echo $config['app_name'];?></span> <i style="font-size: .8em;" class="fa fa-caret-down"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nav-link-menu">
                                <ul class="nav-list">
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-address-card"></i> Profile</a></li>-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-envelope"></i> Messages</a></li>-->
<!--                                    <li><a href="" class="dropdown-item"><i class="fa fa-cog"></i> Settings</a></li>-->
<!--                                    <div class="dropdown-divider"></div>-->
                                    <li><a href="<?php echo $config['app_url'].'logout.php'?>" class="dropdown-item">
                                            <i class="fa fa-sign-out"></i> logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>