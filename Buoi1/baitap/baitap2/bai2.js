function tinhTB(){
    
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;
    var so4 = +document.getElementById('so4').value;
    var so5 = +document.getElementById('so5').value;




    var tinhTB = (so1+so2+so3+so4+so5)/5

    var tinhTBEl = document.createElement('span')
    tinhTBEl.innerHTML = 'tinh TB: ' + tinhTB

    var ketQua = document.getElementById('ketQua')
    ketQua.innerHTML = ''
    ketQua.appendChild(tinhTBEl)
}