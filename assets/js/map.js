//
$(document).ready(function()
{
  var marker;
  var geocoder = new google.maps.geocoder();
  var myLatlng= new google.maps.latlng(51.0486, -114.0708);

  var mapOptions =
  {
    center: myLatlng,
    zoom: 10,
    draggable:false,
    zooomControl:false,
    scaleControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false
  }
  var map = new google.maps.Map($("#map").get(0), mapOptions);
});
