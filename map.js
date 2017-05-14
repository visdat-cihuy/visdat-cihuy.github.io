let mapboxAccessToken = 'pk.eyJ1IjoiY2lodXkiLCJhIjoiY2oyY3o0OGFnMDRoZDJxcXlhcDd0emdyeCJ9.sXLg14Z3TyjjxSRLSs47Xw';
let map = L.map('map').setView([-5.14, 119.42], 5);
let colors = ["#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1"];
let provinceToColor = {
    "Aceh": colors[0],
    "Bali": colors[2],
    "Bangka-Belitung": colors[3],
    "Banten": colors[4],
    "Bengkulu": colors[5],
    "Gorontalo": colors[6],
    "Irian Jaya Barat": colors[7],
    "Jakarta Raya": colors[0],
    "Jambi": colors[1],
    "Jawa Barat": colors[2],
    "Jawa Tengah": colors[3],
    "Jawa Timur": colors[4],
    "Kalimantan Barat": colors[5],
    "Kalimantan Selatan": colors[6],
    "Kalimantan Tengah": colors[7],
    "Kalimantan Timur": colors[0],
    "Kepulauan Riau": colors[1],
    "Lampung": colors[2],
    "Maluku": colors[3],
    "Maluku Utara": colors[3],
    "Nusa Tenggara Barat": colors[4],
    "Nusa Tenggara Timur": colors[5],
    "Papua": colors[6],
    "Riau": colors[7],
    "Sulawesi Barat": colors[0],
    "Sulawesi Selatan": colors[1],
    "Sulawesi Tengah": colors[2],
    "Sulawesi Tenggara": colors[3],
    "Sulawesi Utara": colors[4],
    "Sumatera Barat": colors[5],
    "Sumatera Selatan": colors[6],
    "Sumatera Utara": colors[7],
    "Yogyakarta": colors[0]
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);

$.getJSON( "geodata_compact.json", function(data) {

    L.geoJson(data, {
        style: function (feature) {
            return {color: provinceToColor[feature.properties.NAME_1]}
        }
    }).addTo(map);
});
