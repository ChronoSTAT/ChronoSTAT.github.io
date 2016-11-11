$(document).ready(function () {
	//code for sticky navigation bar//
	var h = $('header').height();
	$('.navbar-default').attr("data-offset-top",h);
	$('#nav').affix({
		offset: {
			top: h
		}
	})
	
	//get data for table
	var data;
	$.ajax({
		dataType: "json",
		url: "table_data.json",
		data: data,
		success: function(data){
			
		}
	});
$("#senior_d_table").DataTable( {
			"ajax":"table_data.json",
			paging: false,
			scrollY: 400,
			searching: true,
			ordering: true,
			columnDefs: [
			{
				targets: [3], "width":"100px", class:"text-center", orderable:false
			}
			]
		}
	);	
	// $("#senior_d_table").DataTable( {
			// paging: false,
			// scrollY: 400,
			// searching: true,
			// ordering: true,
			// columnDefs: [
			// {
				// targets: [3], "width":"100px", class:"text-center", orderable:false
			// }
			// ]
		// }
	// );
	$("#tg_table").DataTable( {
			paging: false,
			scrollY: 400,
			searching: true,
			ordering: true,
			columnDefs: [
			{
				targets: [3], "width":"100px", class:"text-center", orderable:false
			}
			]
		}
	);
});