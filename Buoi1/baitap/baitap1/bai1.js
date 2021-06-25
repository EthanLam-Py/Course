function doiSangVND(){
    const USD_VND = 23_500

    var soUSD = +document.getElementById('soUSD').value;

    var doiSangVND = USD_VND * soUSD

    var doiSangVNDEl = document.createElement('span')
    doiSangVNDEl.innerHTML = 'Tien VND: ' + doiSangVND

    var ketQua = document.getElementById('ketQua')
    ketQua.innerHTML = ''
    ketQua.appendChild(doiSangVNDEl)
}