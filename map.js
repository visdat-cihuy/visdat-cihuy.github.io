var mymap = L.map('mapid').setView([-5.1, 119.5], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiY2lodXkiLCJhIjoiY2oyY3pobWI4MDAzaDMzbnR0a2NzZTltayJ9.NzCW4RLJGYV0wCntvZe2xg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'visdat-cihuy',
    accessToken: 'pk.eyJ1IjoiY2lodXkiLCJhIjoiY2oyY3o0OGFnMDRoZDJxcXlhcDd0emdyeCJ9.sXLg14Z3TyjjxSRLSs47Xw'
}).addTo(mymap);
