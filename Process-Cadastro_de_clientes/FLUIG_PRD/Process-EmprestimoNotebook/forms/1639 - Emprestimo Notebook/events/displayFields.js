function displayFields(form,customHTML){

	var inicio = 5;
	var emprestimo =6;
	var coleta = 24;
	var devolucao =13;
	var numState = getValue("WKNumState"); 	
	var fim =33;
	

		
	
	if (numState== inicio || numState == 0) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);

		form.setValue("nomeSolicitante", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataSolicitacao", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Aguardando"); 
		
		customHTML.append('<script>$("#calopisita").css("visibility", "hidden");</script>');

		
						
	}
	
	if (numState == emprestimo) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);

		form.setValue("nomeAnalista", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataAtendimento", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Em atendimento"); 
		
	

	}
	
if (numState == coleta) {
	var data = new Date();		
	form.setValue("dataColeta", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());

}


if (numState == devolucao) {
	var data = new Date();
	form.setValue("dataDevolucao", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());	


	}

if (numState == fim) {
	var data = new Date();
	form.setValue("status","Finalizado"); 


	}

	
}