

$(function() {
  // Handler for .ready() called.
  var activities = $("#activities");
	var template = $('#activity-template').html();
	Mustache.parse(template);   // optional, speeds up future uses

  var vehicleID = getParameterByName("vehicleId") || "423a8b56-ae89-424f-a0be-0afadc8cccb7";
  var url = "http://mojiobroker1.cloudapp.net/activities/activity?&sort={%22Revision%22:-1}&query={%22$and%22:[{%22VehicleId%22:%22"+vehicleID+"%22}]}";
  console.log(vehicleID, url);

	$.ajax({
	  url: url,
	  success: function(data,status,xhr) {
		  	var data = data.reverse();
  	  	    for(var d in data) {
		  	 	var item = data[d];
				item.PublishedDate = new Date((item.Published[0] - 621355968000000000) / 10000);
				item.humanPublishedDate = humaneDate(item.PublishedDate);
				item.Image = "https://my.moj.io/vehicle/avatar/ebde9622-6a70-4608-9d06-4634bdb346c2?size=Large&imageCode=-8587639033764869069";
				item.Name = "Robs Truck";
		  	}
		  	var binding = { data : data }
		  	var rendered = Mustache.render(template, binding);
		  	$('#activities').html(rendered);
		  	console.log(binding);
	  },
	});

});


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}