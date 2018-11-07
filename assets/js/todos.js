// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete Todo on clicking
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//extract the value of the input
		var todoText = $(this).val();
		//clear input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#plusIcon").on("click", function(){
	$("input[type='text']").fadeToggle();
})