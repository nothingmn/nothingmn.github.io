

$(function() {
  // Handler for .ready() called.
  var activities = $("#activities");

  var vehicleID = getParameterByName("vehicleId") || "423a8b56-ae89-424f-a0be-0afadc8cccb7";
  var url = "http://mojiobroker1.cloudapp.net/activities/activity?&sort={%22Revision%22:-1}&query={%22$and%22:[{%22VehicleId%22:%22"+vehicleID+"%22}]}";
  console.log(vehicleID, url);

	$.ajax({
	  url: url,
	  success: function(data,status,xhr) {
	  	var data = data.reverse();
	  	for(var d in data) {
	  		var item = data[d];
	  		var pub = new Date((item.Published[0] - 621355968000000000) / 10000);
	  		console.log(item, pub);	  		
	  		activities.append("<div class='row'><img src='car.png' width='20'> "+item.Description + "</div>")
	  		activities.append("<div class='row'>" + humaneDate(pub) + "&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-thumbs-up'></span></div>")
	  		activities.append("<br />");
	  	}
	  },
	});

});


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}