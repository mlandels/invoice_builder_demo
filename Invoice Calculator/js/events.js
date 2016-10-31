$( document ).ready(function() {

	$('#add-line-item').click(function(){
	  
	  var rowItem = $('.row-item').val();
	  var rowQuantity = $('.row-quantity').val();
	  var rowPrice = $('.row-price').val();
	  var rowTotal = $('.row-total').text();

	  var newRow = $("<tr><td>" + rowItem + "</td><td>" + rowQuantity + "</td><td>" + rowPrice + "</td><td>" + rowTotal + "</td>").hide();

	  $('#line-items-table').append(newRow);

	  newRow.show('slow');

	});

});

