function onPageLoad() {
    console.log( "document loaded" );
     var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
    //var url = "/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        //console.log(data)
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
  }
  
  window.onload = onPageLoad;