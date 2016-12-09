function enableFields(form){
	var inicio = 5;
	var emprestimo = 6;
	var coleta = 24;
	var devolucao =13;
	var numState = getValue("WKNumState"); 

	form.setEnabled("nomeSolicitante", false);
	form.setEnabled("dataSolicitacao", false);
	form.setEnabled("status", false);
	form.setEnabled("nomeAnalista", false);
	form.setEnabled("dataAtendimento", false);
	form.setEnabled("dataColeta", false);

	
	
	if (numState != 0 && numState != inicio) {
		form.setEnabled("setor", false);
		form.setEnabled("dataInicio", false);
		form.setEnabled("datafim", false);
		form.setEnabled("motivoEmprestimo", false);
		
	}
	
	
	if (numState == emprestimo) {
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);

		form.setValue("nomeAnalista", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataAtendimento", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Em atendimento"); 
		
	
		form.setEnabled("dataDevolucao", false);
		
	}
	
	
	if (numState == coleta) {
		form.setEnabled("notebookDisponivel",false);
		form.setEnabled("ObsAdicionais", false);
		form.setEnabled("dataDevolucao", false);
		form.setEnabled("dataColeta", false);
		

	}


	if (numState == devolucao) {
		form.setEnabled("notebookDisponivel",false);
		form.setEnabled("ObsAdicionais", false);

		}

		
}
