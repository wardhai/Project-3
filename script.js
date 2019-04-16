  function initMap() {
	var tower = {lat: 41.879185, lng: -87.635772}    
    var map = new google.maps.Map(document.getElementById('map'), {
          center: tower,
          zoom: 8
        });
		
	var marker = new google.maps.Marker({
		  position: tower,
		  map: map,
		  animation: google.maps.Animation.BOUNCE,
		  icon: 'images/marker.png'
	    });
		
	var infowindow = new google.maps.InfoWindow({
		  content: 'Willis Tower: Skydeck'
	    });
		

      
marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}
