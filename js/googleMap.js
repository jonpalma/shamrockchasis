$(document).ready(function () {

function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(28.627437, -106.070147),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(map_canvas, map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.627437, -106.070147),
        map: map,
        title: 'Shamrock'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


});