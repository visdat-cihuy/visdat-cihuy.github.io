let mapboxAccessToken = 'pk.eyJ1IjoiY2lodXkiLCJhIjoiY2oyY3o0OGFnMDRoZDJxcXlhcDd0emdyeCJ9.sXLg14Z3TyjjxSRLSs47Xw';
let map = L.map('map', {
    center: [-2.2, 117.7],
    zoom: 5,
    minZoom: 5,
    maxZoom: 9,
    maxBounds: [
        [9.49410032, 92.65179575],
        [-14.17752274, 145.29828013]
    ]
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light'
}).addTo(map);

let colorMap = {
    "Tinggi": "rgba(183,28,28,1)",
    "Sedang": "rgba(183,28,28,0.75)",
    "Rendah": "rgba(183,28,28,0.5)"
};
let control = [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
]


var indoLayer = {};
$.getJSON( "geodata_compact.json", function(data) {

    indoLayer = L.geoJson(data, {
        style: function (feature) {
            return {
                color: colorMap[category["1996"][feature.properties.NAME_1]],
                opacity: 0.2,
                weight: 0,
                fillOpacity: 1
            }
        }
    }).addTo(map);
});

let $select = $('<select></select>')
    .appendTo($('#control'))
    .on('change', function() {
        setControl($(this).val());
    });

for (var i = 0; i < control.length; i++) {
    $('<option></option>')
        .text(control[i])
        .attr('value', control[i])
        .appendTo($select);
}

function setControl(year) {
    indoLayer.setStyle(function(feature){
        let color = colorMap[category[year][feature.properties.NAME_1]];
        return {
            color: color,
            opacity: 0.2,
            weight: 0,
            fillOpacity: 1
        }
    });
}
