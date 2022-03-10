let map;

function initMap() {
    map = new arcgis.maps.Map(document.getElementById("map"), {
        center: { lat: -34.5053531, lng: -58.5408425},
        zoom: 9,
    });
}

function myFunction() {
    document.getElementById("frm1").submit();
}

var marker = new google.maps.Marker({
    position: {lat: -34.5075603, lng: -58.5274395},
    map: map,
    title: 'Unicenter Shopping'
});

function addMarker(location) {
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
}