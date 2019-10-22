function initMap(){
    var myGamePiece;
    var myObstacles = [];
    var myScore;
    
    function startGame() {
      myGamePiece = new component(30, 30, "red", 10, 160);
      myScore = new component("30px", "Consolas", "black", 280, 40, "text");
      myGameArea.start();
    }
        // Map options
        var options = {
          zoom:10,
          center:{lat:42.3601,lng:-81.0589}
        }
    
        // New map
        var map = new google.maps.Map(document.getElementById('map'), options);
    
        // Listen for click on map
        google.maps.event.addListener(map, 'click', function(event){
          // Add marker
          addMarker({coords:event.latLng});
        });
    
        
        // Add marker
        var marker = new google.maps.Marker({
          position:{lat:42.4668,lng:-70.9495},
          map:map,
          icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
    
        var infoWindow = new google.maps.InfoWindow({
          content:'<h1>Lynn MA</h1>'
        });
    
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
        
    
        // Array of markers
        var markers = [
          {
            coords:{lat:42.4668,lng:-70.9495},
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:'<h1>Lynn MA</h1>'
          },
          {
            coords:{lat:42.8584,lng:-70.9300},
            content:'<h1>Amesbury MA</h1>'
          },
          {
            coords:{lat:42.7762,lng:-71.0773}
          }
        ];
    
        // Loop through markers
        for(var i = 0;i < markers.length;i++){
          // Add marker
          addMarker(markers[i]);
        }
    
        // Add Marker Function
        function addMarker(props){
          var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            //icon:props.iconImage
          });
    
          // Check for customicon
          if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
          }
    
          // Check content
          if(props.content){
            var infoWindow = new google.maps.InfoWindow({
              content:props.content
            });
    
            marker.addListener('click', function(){
              infoWindow.open(map, marker);
            });
          }
        }
      }
    var gMap;

var favoritePlaces = [
    {"content":'<strong>#1: Highland Park IL', "coordinates":{"lat":42.190166,"lng":-87.786697}, "iconImagePath":"marker.png"},
    {"content":'<strong>#2: Chicago IL <strong>', "coordinates":{"lat":41.881832,"lng":-87.623177}, "iconImagePath":"marker.png"},
    {"content":'<strong>#3: New York NY <strong>', "coordinates":{"lat":40.71427,"lng":-74.00597}, "iconImagePath":"marker.png"},
    {"content":'<strong>#4: Los Angeles CA <strong>', "coordinates":{"lat":34.052235,"lng":-88.0146821}, "iconImagePath":"marker.png"},
    {"content":'<strong>#5: Guanajuato MEX', "coordinates":{"lat": 21.0185800,"lng":-101.2591000}, "iconImagePath":"marker.png"},
    {"content":'<strong>#6: Cancun MEX <strong>', "coordinates":{"lat":21.17429,"lng":-86.84656}, "iconImagePath":"marker.png"},
    {"content":'<strong>#7: Morelia MEX <strong>', "coordinates":{"lat":19.7007800,"lng":-101.1844300}, "iconImagePath":"marker.png"},
    {"content":'<strong>#8: Moroleon MEX<strong>', "coordinates":{"lat":20.133333,"lng": -101.2}, "iconImagePath":"marker.png"},
]; 
var currentPlaceIndex = 10;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 20;

function initApplication() {
    console.log('Map Mania V2');
}

function initMap() {

    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 40, lng: -80}, zoom: 3});
   
    var marker = new google.maps.Marker({position:{lat:42.190166,lng:-87.786697}, map:gMap});


    var marker2 = new google.maps.Marker({position:{lat:20.133333,lng:-101.2}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Highland Park IL'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });


    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    SetHint("Hint 1");
    SetScore(score);
}

function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;


    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}


