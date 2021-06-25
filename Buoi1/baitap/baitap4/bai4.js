function tinhToan() {
    var chieuDai = +document.getElementById('chieuDai').value;

    var chieuRong = +document.getElementById('chieuRong').value;

    console.log(typeof chieuDai);

    var chuVi = (chieuDai + chieuRong)*2;
    var dienTich = chieuDai * chieuRong;

    var ketQuaEl = document.getElementById('ketQua');
    //reset lại, rồi thêm dữ liệu mới vào
    ketQuaEl.innerHTML=''

    var chuViEl = document.createElement('p');
    chuViEl.innerHTML = 'chu vi: ' + chuVi;

    var dienTichEl = document.createElement('p');
    dienTichEl.innerHTML = 'dien tich: ' + dienTich;

    ketQuaEl.appendChild(chuViEl)
    ketQuaEl.appendChild(dienTichEl)
}