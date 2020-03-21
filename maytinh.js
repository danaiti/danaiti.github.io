function tinhtoan()
{
	let canArr = ['Canh', 'Tân', 'Nhâm', 'Qúy', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
	let chiArr = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ','Ngọ', 'Mùi'];

	let namSinh = document.getElementById("namSinh").value;

	let can = canArr[namSinh % 10];
	let chi = chiArr[namSinh % 12];

	let numOfMenh = getNumOfCan(can) + getNumOfChi(chi) > 5 ? getNumOfCan(can) + getNumOfChi(chi) - 5 : getNumOfCan(can) + getNumOfChi(chi);

	document.getElementById("namAmLich").innerHTML = can + " " + chi;

	switch (numOfMenh) {
		case 1:
			document.getElementById("menh").innerHTML = 'Kim';
			break;
		case 2:
			document.getElementById("menh").innerHTML = 'Thủy';
			break;
		case 3:
			document.getElementById("menh").innerHTML = 'Hỏa';
			break;
		case 4:
			document.getElementById("menh").innerHTML = 'Thổ';
			break;
		case 5:
			document.getElementById("menh").innerHTML = 'Mộc';
			break;
	}	
}

function getNumOfCan (can) {
	if(['Giáp', 'Ất'].indexOf(can) !== -1) return 1;
	if(['Bính', 'Đinh'].indexOf(can) !== -1) return 2;
	if(['Mậu', 'Kỷ'].indexOf(can) !== -1) return 3;
	if(['Canh','Tân'].indexOf(can) !== -1) return 4;
	if(['Nhâm','Qúy'].indexOf(can) !== -1) return 5;
}

function getNumOfChi (chi) {
	if(['Tý','Sửu','Ngọ','Mùi'].indexOf(chi) !== -1) return 0;
	if(['Dần','Mão','Thân','Dậu'].indexOf(chi) !== -1) return 1;
	if(['Thìn','Tỵ','Tuất','Hợi'].indexOf(chi) !== -1) return 2;
}
