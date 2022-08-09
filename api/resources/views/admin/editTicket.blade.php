<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Edit Company Form - Laravel 8 CRUD Tutorial</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" >
</head>
<body>
<div class="container mt-2">
<div class="row">
<div class="col-lg-12 margin-tb">
<div class="pull-left">
<h2>Edit User Skills</h2>
</div>
<div class="pull-right">
<a class="btn btn-primary" href="" enctype="multipart/form-data"> Back</a>
</div>
</div>
</div>

<div class="alert alert-success mb-1 mt-1">

</div>

<form action="{{ route('ticketupdate',[$user->id]) }}" method="post" >
@csrf
@method('post')
<div class="row">
<div class="col-xs-12 col-sm-12 col-md-12">
<div class="form-group">
<strong>User Skills:</strong>
<input type="text" name="skill_id" value="{{$user->skill_id}}" class="form-control" placeholder="select skills">
@error('name')
<div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
@enderror
</div>
</div>
<button type="submit" class="btn btn-primary ml-3">Submit</button>
</div>
</form>
</div>
</body>
</html>