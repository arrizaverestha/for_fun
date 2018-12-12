var mymap = L.map('mapid').setView([-7.263870, 112.740500], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken:'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'}).addTo(mymap);

let places= [
 {"lokasi": [-7.261140, 112.739580], "sponsor" : "Koridor Co-Working Space", "foto" : "img/Koridorcoworking.png", "review" : "Tempat Co-Working paling enak nih"},
 {"lokasi": [-7.249490, 112.737690], "sponsor" : "StartappHub", "foto" : "img/Startapphub.png", "review" : "Tempat Sharing dan Kumpul startup paling enak nih"},
 {"lokasi": [-7.279680, 112.776530], "sponsor" : "Platter Kertajaya ", "foto" : "img/platterkertajaya.png", "review" : "Tempat makan enak dan murah nih"},
 {"lokasi": [-7.292110,112.759940], "sponsor" : "Ciz Resto", "foto" : "img/CizResto.png", "review" : "Tempat paling cocok bagi kalian yang suka dengan keju"},
 {"lokasi": [-7.265760, 112.756220], "sponsor" : "Stasiun Gubeng Surabaya", "foto" : "img/sgu.png", "review" : "Salah satu stasiun Surabaya yang bersih dan nyaman"}
];

function assignMarker(p, index) {
  var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
  marker.on("click", function(){
   var gambar = document.getElementById("gambar");
   gambar.src=p.foto;
   var rev = document.getElementById("deskripsi");
   rev.innerHTML=p.review;
  })
}

places.forEach(assignMarker);
