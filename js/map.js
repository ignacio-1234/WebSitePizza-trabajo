function initMap() {
    var mapOptions = {
        center: { lat: -36.7167, lng: -73.1167 },
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
