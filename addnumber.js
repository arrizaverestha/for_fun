function tambah() {
  let angka = document.querySelectorAll('input');
  let i1= angka[0].value ; //angka pertama
  let i2= angka[1].value ; //angka kedua
  angka[2].value= parseInt(i1) + parseInt(i2) ;
}
function kurang() {
  let angka = document.querySelectorAll('input');
  let i1= angka[0].value ; //angka pertama
  let i2= angka[1].value ; //angka kedua
  angka[2].value= parseInt(i1) - parseInt(i2) ;
}
function kali() {
  let angka = document.querySelectorAll('input');
  let i1= angka[0].value ; //angka pertama
  let i2= angka[1].value ; //angka kedua
  angka[2].value= parseInt(i1) * parseInt(i2) ;
}
function bagi() {
  let angka = document.querySelectorAll('input');
  let i1= angka[0].value ; //angka pertama
  let i2= angka[1].value ; //angka kedua
  angka[2].value= parseInt(i1) / parseInt(i2) ;
}
function hapus() {
  let angka = document.querySelectorAll('input');
  angka[0].value = '';
  angka[1].value = '';
  angka[2].value = '';
}

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    var self = buttons[i];

    if(i == 0){
      self.addEventListener('click', tambah);
    } else if (i == 1) {
      self.addEventListener('click', kurang);
    } else if (i == 2) {
      self.addEventListener('click', kali);
    } else if (i == 3) {
      self.addEventListener('click', bagi);
    } else {
      self.addEventListener('click', hapus);
    }



}
// let tombol1 = document.querySelector('button[id="tambah"]');
// let tombol1 = document.querySelector('button[id="tambah"]');
// let tombol1 = document.querySelector('button[id="tambah"]');
// let tombol1 = document.querySelector('button[id="tambah"]');
// tombol1.addEventListener('click', tambah);
// tombol[1].addEventListener('click', kurang);
// tombol[2].addEventListener('click', kali);
// tombol[3].addEventListener('click', bagi);
