<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
  font-family: sans-serif; /* Change your font family */
}

.content-table {
  border-collapse: collapse;
  margin: 50px 0;
  font-size: 0.9em;
  min-width: 550px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

</style>
<body>
<div class="card-body table-responsive p-0" style="height: 460px;">
<table class="content-table">
  <thead>
                                    <tr>
										<th>Id</th>

										<th>NAME</th>

										<th>Email</th>
								
                                        <th>Status</th>
										
									</tr>
								</thead>
								<tbody>



									@foreach($users as $value)
									<tr>
										<td>{{ $value->id }}</td>

										<td>{{ $value->user->name }}</td>

                    <td>{{ $value->alskills->name }}</td>
										<td><span class="tag tag-success">Active</span></td>
                                        <td><a href="{{route('edit',$value->id) }}" class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></a>
											<a href="{{route('userdelete',$value->id) }}" class="btn btn-danger btn-sm"><i class="far fa-trash-alt"></i></a></td>										
									</tr>
									@endforeach

									</tbody>
								</table>
							</div>
						</div>
                    </div>
</body>
</html>