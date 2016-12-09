function displayFields(form,customHTML){ 

	var user = getValue("WKUser");
	var numState = getValue("WKNumState"); 	
	var INICIO = 4;
	var VISITA = 8;
	
			
	if (numState == INICIO || numState == 0) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
		
		
		form.setValue("dataChamado", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		
		customHTML.append('<script>$("#preechTec").css("visibility", "hidden");</script>');

	
	
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
		form.setValue("nomeTecnico", ds_Colleague.getValue(0, "colleagueName"));

	}

}
