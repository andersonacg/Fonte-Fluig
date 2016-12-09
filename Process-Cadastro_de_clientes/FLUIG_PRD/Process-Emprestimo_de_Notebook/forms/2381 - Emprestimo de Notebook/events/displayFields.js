function displayFields(form,customHTML){
	var user = getValue("WKUser");
	var numState = getValue("WKNumState"); 	
	var numProcesso = getValue("WKNumProces");
	var INICIO = 3;
	var EMPRESTIMO = 4;
	var COLETA = 14;
	var DEVOLUCAO = 16;
	var FIM = 11;
		
	if (numState == INICIO || numState == 0) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
		
		

		form.setValue("nomeSolicitante", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataSolicitacao", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Aguardando"); 

		
		customHTML.append('<script>$("#equipInfra").css("visibility", "hidden");</script>');

		
						
	}
	
	if (numState == EMPRESTIMO) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);

		form.setValue("nomeAnalista", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataAtendimento", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Em atendimento"); 
		form.setValue("numOS",numProcesso);

		
	

	}
	
if (numState == COLETA) {
	var data = new Date();		
	form.setValue("dataColeta", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());

}


if (numState == FIM) {
	var data = new Date();
	form.setValue("status","Finalizado"); 


	}


}