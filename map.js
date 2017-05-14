let mapboxAccessToken = 'pk.eyJ1IjoiY2lodXkiLCJhIjoiY2oyY3o0OGFnMDRoZDJxcXlhcDd0emdyeCJ9.sXLg14Z3TyjjxSRLSs47Xw';
let map = L.map('map').setView([-5.14, 119.42], 5);
let colors = ["#ffebee","#ef9a9a","#ef5350"];
let provinceToColor = {
    "Aceh": colors[0],
    "Bali": colors[2],
    "Bangka-Belitung": colors[1],
    "Banten": colors[2],
    "Bengkulu": colors[0],
    "Gorontalo": colors[1],
    "Irian Jaya Barat": colors[2],
    "Jakarta Raya": colors[0],
    "Jambi": colors[1],
    "Jawa Barat": colors[2],
    "Jawa Tengah": colors[0],
    "Jawa Timur": colors[1],
    "Kalimantan Barat": colors[2],
    "Kalimantan Selatan": colors[0],
    "Kalimantan Tengah": colors[1],
    "Kalimantan Timur": colors[2],
    "Kepulauan Riau": colors[0],
    "Lampung": colors[1],
    "Maluku": colors[2],
    "Maluku Utara": colors[0],
    "Nusa Tenggara Barat": colors[1],
    "Nusa Tenggara Timur": colors[2],
    "Papua": colors[0],
    "Riau": colors[1],
    "Sulawesi Barat": colors[2],
    "Sulawesi Selatan": colors[1],
    "Sulawesi Tengah": colors[2],
    "Sulawesi Tenggara": colors[0],
    "Sulawesi Utara": colors[1],
    "Sumatera Barat": colors[2],
    "Sumatera Selatan": colors[0],
    "Sumatera Utara": colors[1],
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
