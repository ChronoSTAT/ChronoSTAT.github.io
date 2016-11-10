
$(document).ready(function () {
	var h = $('header').height();
	$('.navbar-default').attr("data-offset-top",h);
	
	alert($('.navbar-default').attr("data-offset-top"));
	$('#nav').affix({
		offset: {
			top: h
		}
	})
	
	$("#senior_d_table").DataTable( {
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