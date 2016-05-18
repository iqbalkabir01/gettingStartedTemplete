//
function initMap()
{
  var mapDiv = docoument.getElementById('map');
  var map= new google.maps.Map(mapDiv,{
    center:{Lat: 51.0486, lng: -114.0708},
    zoom: 10, draggble:false,
    zoomcontrol: false,
    scrollewheel: false,
      disableDoubleClickZoom: true
  });
}
