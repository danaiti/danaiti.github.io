<DOCTYPY html>
	<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Mệnh Calculator</title>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
			integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<style>
			#cal {
				border: 2px solid #007bff;
				padding: 40px 10px;
				border-radius: 10px;
				width: 100%;
			}
		</style>

	</head>

	<body>
		<div class="container">
			<br>
			<h2>My Mệnh Calculator</h2>
			<hr>
			<div id="cal">
				<div class="form-group" class="col-sm">
					<label for="namSinh">Nhập năm sinh:</label>
					<input type="number" class="form-control" id="namSinh">
					<br>
					<button class="btn btn-primary" type="button" name="tinhMenh" onclick=tinhtoan()>Tính Mệnh</button>
					<br><br>
					Năm sinh âm lịch: <span id="namAmLich" style="font-weight: bold;"></span> <br>
					Mệnh của bạn là: <span id="menh" style="font-weight: bold;"></span>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="maytinh.js"></script>
	</body>

	</html>