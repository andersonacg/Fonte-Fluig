function validateForm(form) {
	
	var atividade = getValue('WKNumState'),
		
		INICIO = 4,
		AVALIACAO_RESPONSAVEL = 14,
		SOLICITANTE_REAJUSTE = 37;
	
	if(atividade == INICIO) {
		
		// campos que devem vir do webservice obrigatoriamente
		if(form.getValue('proximoAvaliador').trim() == '') throw 'Informe o email do avaliador responsável em "proximoAvaliador"';
		
	} else if(atividade == AVALIACAO_RESPONSAVEL) {
		
		// obriga o usuário a preencher os campos Avaliacao e Observação
		if(form.getValue('ultimaAvaliacao') == '') throw 'Selecione "Aprovado" ou "Reprovado" ou "Devolver para correção"';
		if(form.getValue('ultimaObservacao').trim() == '') throw 'Informe uma observação';
		
	} else if(atividade == SOLICITANTE_REAJUSTE) {
		
		// verifica se a justificativa foi preenchida
		if(form.getValue('justificativaSolicitante').trim() == '') throw 'Informe uma justificativa';
		
	}
	
}