

$(function() {
  // Handler for .ready() called.
  var activities = $("#activities");
	var template = $('#activity-template').html();
	Mustache.parse(template);   // optional, speeds up future uses

  var vehicleID = getParameterByName("vehicleId") || "740c7492-c140-4574-aabf-21cd3e188f4e";
  var url = "http://mojiobroker1.cloudapp.net/activities/activity?&sort={Revision:-1}&query={%22$and%22:[{%22VehicleId%22:%22"+vehicleID+"%22}]}&limit=50";
  console.log(vehicleID, url);

	$.ajax({
	  url: url,
	  success: function(data,status,xhr) {
	  	console.log(data);
		  	var last = "";
		  	var list = [];
  	  	    for(var d in data) {
		  	 	var item = data[d];
		  	 	if(last == "") {
		  	 		last = item.Title;
		  	 	} else {
		  	 		if(last != item.Title) {		  	 			
		  	 			list.push(item);
		  	 			last = item.Title;
		  	 		}
		  	 	}
				item.DeviceTime = new Date((item.DeviceTime[0]- 621355968000000000) / 10000);			
				item.humanPublishedDate = humaneDate(item.DeviceTime);
				item.Image = "https://my.moj.io/vehicle/avatar/ebde9622-6a70-4608-9d06-4634bdb346c2?size=Large&imageCode=-8587639033764869069";
				item.Name = "Robs Truck";
		  	}
		  	var list = _.sortBy( list, 'DeviceTime' ).reverse();
		  	var binding = { data : list }
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