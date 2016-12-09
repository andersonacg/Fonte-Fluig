function enableFields(form){ 
	
	var inicio = 4;
	var numState = getValue("WKNumState"); 
	var visita = 5;

		
	if (numState != 0 && numState == inicio) {
		form.setEnabled("cClient", false);
		form.setEnabled("dPrograma", false);
		form.setEnabled("telefone", false);
		form.setEnabled("solicoment", false);
		
	}
	
		
	
}