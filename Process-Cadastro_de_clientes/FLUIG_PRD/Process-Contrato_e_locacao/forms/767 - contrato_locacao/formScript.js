function zoomCondPagamento() {
	var filial = $("#filial").val();
	var tpContrato = $("#tpContrato").val();
	
	if(tpContrato == null || tpContrato == "") {
	    setTimeout(function(){
	    	reloadZoomFilterValues('condPagamento', 'CFILPROP,' + filial);
	    	reloadZoomFilterValues('indContrato', 'CFILPROP,' + filial);
	    	reloadZoomFilterValues('tpContrato', 'CFILPROP,' + filial);
	    	reloadZoomFilterValues('tpPlanilha', 'CFILPROP,' + filial);
	    	}, 3000);		
	}
}

$( document ).ready(function() {
	
//////////////On Load //////////////
	var reajContrato = $("select[name=reajContrato]").val();
	var caucao = $("select[name=caucao]").val();
	
	if (reajContrato == "Sim"){
			$("#fs_indContrato").css("display","block");
	} else {
		$("#fs_indContrato").css("display","none");
	}
	
	
	if (caucao == "Sim"){
			$("#perCaucao").removeAttr("readonly");
	} else {
			$("#perCaucao").attr("readonly","readonly");
	}
/////////////////////////////////////
	
	var dateInicio = FLUIGC.calendar('#dateInicio');
	var dateFinal = FLUIGC.calendar('#dateFinal');
	var dateAssinaturaContrato = FLUIGC.calendar('#dateAssinaturaContrato');

	var reajContrato = $("select[name=reajContrato]");
	var caucao = $("select[name=caucao]");
	
	$("#fs_indContrato").css("display","none");

	$(reajContrato).change(function() {
		var change = $(this).val();
		
		if (change == "Sim"){
				$("#fs_indContrato").css("display","block");
		} else {
			$("#fs_indContrato").css("display","none");
		}
	});

	$(caucao).change(function() {
		var change = $(this).val();
		
		if (change == "Sim"){
				$("#perCaucao").removeAttr("readonly");
		} else {
				$("#perCaucao").attr("readonly","readonly");
		}
	}); 	
	
	
});

