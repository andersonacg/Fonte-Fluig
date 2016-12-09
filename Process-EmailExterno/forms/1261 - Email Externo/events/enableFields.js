function enableFields(form){

	
	var numState = getValue("WKNumState"); 
	var VISITA = 8;
	var INICIO = 4;
	
	form.setEnabled("dataChamado", false);
	form.setEnabled("nomeTecnico", false);
	
		
	if (numState != 0 && numState != INICIO) {
		
		form.setEnabled("dataChamado", false);
		form.setEnabled("horaChamado", false);
		form.setEnabled("unidade", false);
		form.setEnabled("numOS", false);
		form.setEnabled("nomeCliente", false);
		form.setEnabled("enderco", false);
		form.setEnabled("contato", false);
		form.setEnabled("telContato", false);
		form.setEnabled("emailContato", false);
		form.setEnabled("numContato", false);
		form.setEnabled("equipamento", false);
		form.setEnabled("modelo", false);
		form.setEnabled("nSerie", false);
		form.setEnabled("horimetro", false);
		form.setEnabled("horimetroMNT", false);
		form.setEnabled("servico", false);
		form.setEnabled("dReclamado", false);
		form.setEnabled("uPreventiva", false);
	
	}
	
	if(numState== INICIO || numState == 0 ){
	
	form.setEnabled("ambTrab", false);
	form.setEnabled("equipParado", false);
	form.setEnabled("dencontrado", false);
	form.setEnabled("pendecias", false);
	form.setEnabled("sexecutado", false);
	form.setEnabled("houveOp", false);
	form.setEnabled("observ", false);

	}
	
	
	
}