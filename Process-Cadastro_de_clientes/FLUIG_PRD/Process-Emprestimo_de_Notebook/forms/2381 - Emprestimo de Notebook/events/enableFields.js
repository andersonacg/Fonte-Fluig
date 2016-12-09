function enableFields(form){

	var INICIO = 3;
	var EMPRESTIMO = 4;
	var COLETA = 14;
	var DEVOLUCAO = 16;
	var NUMSTATE = getValue("WKNumState"); 
	var FIM = 11;

	form.setEnabled("nomeSolicitante", false);
	form.setEnabled("dataSolicitacao", false);
	form.setEnabled("status", false);
	form.setEnabled("nomeAnalista", false);
	form.setEnabled("dataAtendimento", false);
	form.setEnabled("dataColeta", false);
	form.setEnabled("numOS", false);

	
	
	if (NUMSTATE != 0 && NUMSTATE != INICIO) {
		form.setEnabled("setor", false);
		form.setEnabled("dataInicio", false);
		form.setEnabled("datafim", false);
		form.setEnabled("motivoEmprestimo", false);
		form.setEnabled("numContato", false);
		
		
	}
	
	
	if (NUMSTATE == EMPRESTIMO) {
		
		var data = new Date();
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
		var constraints = new Array(c1);
		var ds_Colleague = DatasetFactory.getDataset("colleague", null, constraints, null);

		form.setValue("nomeAnalista", ds_Colleague.getValue(0, "colleagueName"));
		form.setValue("dataAtendimento", pad(data.getUTCDate())+"/"+pad(data.getUTCMonth()+1)+"/"+data.getUTCFullYear());
		form.setValue("status","Em atendimento"); 
		
	
		form.setEnabled("dtDevolucao", false);
		form.setEnabled("renovacao", false);
	}
	
	
	if (NUMSTATE == COLETA) {
		form.setEnabled("notebookDisponivel",false);
		form.setEnabled("observ", false);
		form.setEnabled("dtDevolucao", false);
		form.setEnabled("dataColeta", false);
		form.setEnabled("renovacao", false);

	}


	if (NUMSTATE == DEVOLUCAO) {
		form.setEnabled("notebookDisponivel",false);
		form.setEnabled("observ", false);
		


		}


}
