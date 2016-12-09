function enableFields(form){
	var AtividadeAtual = getValue("WKNumState");
	
	if(AtividadeAtual == 7) {		
    	form.setEnabled("filial", false);
    	form.setEnabled("orcamento", false);
    	form.setEnabled("proposta", false);
    	form.setEnabled("contrato", true);
    	form.setEnabled("revContrato", true);
    	form.setEnabled("vendedor", false);
    	form.setEnabled("cliente", false);
    	form.setEnabled("tpContrato", false);
    	form.setEnabled("condPagamento", false);
    	form.setEnabled("indContrato", false);
    	form.setEnabled("tpPlanilha", false);
    	form.setEnabled("reajPlanilha", true);
    	form.setEnabled("perCaucao", false);
    	form.setEnabled("dtAssinatura", false);
    	form.setEnabled("dateInicio", false);
    	form.setEnabled("dateFinal", false);
	}
}