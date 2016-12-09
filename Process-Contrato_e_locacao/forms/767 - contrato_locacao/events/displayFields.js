function displayFields(form,customHTML){
	var user = getValue("WKUser");
	var numState = getValue("WKNumState");
	var nrProxAtividade = getValue("WKNextState");
	var tpContrato = form.getValue("tpContrato");
		
	/* if ( tpContrato != '' || tpContrato != 0 ) {
		form.setValue("startProtheus",true);
	} */
	
	if ( form.getFormMode() == "VIEW" ) {
		customHTML.append(
				'<script>'+				
					'$(".input-group").css("color","white");' +					
				'</script>'
		
		);
	}
	
		
	if(numState == 0 || numState == 5 || numState == null || numState == ""){
		
		customHTML.append(
				'<script>'+				
					'zoomCondPagamento();' +					
				'</script>'
		
		);
	}
	
	if(numState == 7){
		
		customHTML.append(
				'<script>'+				
					'$("[data-contrato]").css("display","block");' +
					'$("[data-assinatura-contrato]").css("display","block");' +
					'$("select[name=reajContrato]").attr("disabled","true");' +
					'$("select[name=reajPlanilha]").attr("disabled","true");' +
					'$("select[name=caucao]").attr("disabled","true");' +
				'</script>'
		
		);
	}
	
	//form.setValue("filial","0202");
	form.setValue("codUsuario", user);
	
}