<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hire Freelancers and Find Freelance Jobs Online - Advizuru</title>
        <!-- Google Font: Source Sans Pro -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <!-- Ionicons -->
        <!-- <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"> -->
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="assets/css/adminlte.css">
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                </ul>
                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                    <!-- Navbar Search -->
                    <li class="nav-item">
                        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i class="fas fa-search"></i>
                        </a>
                        <div class="navbar-search-block">
                            <form class="form-inline">
                                <div class="input-group input-group-sm">
                                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                        <i class="fas fa-search"></i>
                                        </button>
                                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                        <i class="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.navbar -->
            <!-- Main Sidebar Container -->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index.html" class="brand-link">
                    <span class="brand-text font-weight-light">Advizuru</span>
                </a>
                <!-- Sidebar -->
                <div class="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                        <div class="image">
                            <img src="assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">Admin</a>
                            <p class="mb-0 text-white">Total Points - 13611</p>
                        </div>
                    </div>
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item menu-open">
                                <a href="{{route('home')}}" class="nav-link active">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('patnerlist')}}" class="nav-link">
                                  <i class="nav-icon fas fa-clipboard-list"></i>
                                  <p>
                                    Partner List
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('userskills')}}" class="nav-link">
                                  <i class="nav-icon fas fa-user-graduate"></i>
                                  <p>
                                    User Skill
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{route('ticket')}}" class="nav-link ">
                                  <i class="nav-icon fas fa-user-graduate"></i>
                                  <p>
                                    Ticket
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="business-lead.html" class="nav-link">
                                  <i class="nav-icon far fa-building"></i>
                                  <p>
                                    Business Lead
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="points.html" class="nav-link">
                                  <i class="nav-icon fab fa-microblog"></i>
                                  <p>
                                    Points
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="points-summary.html" class="nav-link">
                                  <i class="nav-icon fab fa-rocketchat"></i>
                                  <p>
                                    Points Summary
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="google-contact.html" class="nav-link">
                                  <i class="nav-icon far fa-address-book"></i>
                                  <p>
                                    Google Contact
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="registration-details.html" class="nav-link">
                                  <i class="nav-icon fas fa-file-signature"></i>
                                  <p>
                                    Registration Details
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="services.html" class="nav-link">
                                  <i class="nav-icon fas fa-tools"></i>
                                  <p>
                                    Services
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="emails.html" class="nav-link">
                                  <i class="nav-icon far fa-envelope"></i>
                                  <p>
                                    Emails
                                  </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="trainer-list.html" class="nav-link">
                                  <i class="nav-icon far fa-id-card"></i>
                                  <p>
                                    Trainer List
                                  </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <!-- /.sidebar-menu -->
                </div>
                <!-- /.sidebar -->
            </aside>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Dashboard</h1>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
                <!-- /.content-header -->
                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-clipboard-list"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Partner List</span>
                                        <a href="{{route('patnerlist')}}" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-user-graduate"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">User Skill</span>
                                        <a href="{{route('userskills')}}" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="far fa-building"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Business Leads</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fab fa-microblog"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Points</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fab fa-rocketchat"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Points Summary</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="far fa-address-book"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Google Contact</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-file-signature"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Registration Deals</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-tools"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Services</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="far fa-envelope"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Emails</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info elevation-1"><i class="far fa-id-card"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-number">Trainer List</span>
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.container-fluid -->
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <strong>Copyright &copy; 2021 <a href="advizuru.com">PPN Solutions Pvt. Ltd.</a>.</strong>
                All rights reserved.
            </footer>
            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- Control sidebar content goes here -->
            </aside>
            <!-- /.control-sidebar -->
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/adminlte.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="assets/js/demo.js"></script>
    </body>
</html>