<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Document</title>
</head>
<style>
   .zui-table {
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
.zui-table thead th {
    background-color: #DDEFEF;
    border: solid 1px #DDEEEE;
    color: #336B6B;
    padding: 10px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;
}
.zui-table tbody td {
    border: solid 1px #DDEEEE;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
    width:150px;
    height:50px;
}
</style>
<body>
<div class="card-body table-responsive p-0" style="height: 460px;">
<table class="zui-table">
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

										<td>{{ $value->name }}</td>

										<td>{{ $value->email }}</td>
                                        <td>{{ $value->status }}</td>
                                       
									@endforeach

									</tbody>
								</table>
							</div>
						</div>
                    </div>
</body>
</html>