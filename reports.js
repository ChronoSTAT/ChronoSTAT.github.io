$(document).ready(function () {
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