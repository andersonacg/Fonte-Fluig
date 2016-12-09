$( document ).ready(function() {
	var grupoSub = $("select[name=grupoSub]");
	
	$(grupoSub).change(function() {
		var change = $(this).val();
		
		if (change == "equipamentos"){
				$("#display_modelForn").css("display","block");
		} else {
			$("#display_modelForn").css("display","none");
		}
	});
});