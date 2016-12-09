function displayFields(form, customHTML) {
	
	var atividade = getValue('WKNumState'),
		responsavel = getValue('WKUser'), 
		indexes = form.getChildrenIndexes('tabelaAvaliacao'),
		
		INICIO = 4,
		AVALIACAO_RESPONSAVEL = 14,
		SOLICITANTE_REAJUSTE = 37;
	
	// preenche o campo do formulário com o número da atividade atual
	form.setValue('WKNumState', atividade);
	
	// desabilita as avaliações já realizadas
    for(var i = 0; i < indexes.length; i++) {
        form.setEnabled('avaliacao___' + indexes[i], false);
        form.setEnabled('observacaoAvaliador___' + indexes[i], false);
    }
    
    // pega o valor da última avaliação e substitui no último registro da tabela pai e filho
	// há uma peculiaridade, na versão mobile, em que os dados de um textarea, em uma tabela pai e filho, não são salvos
    var ultimaObservacao = form.getValue('ultimaObservacao');
	if(ultimaObservacao != '') form.setValue('observacaoAvaliador___' + indexes.length, ultimaObservacao);
    
    // desabilita a div de justificativa
	form.setEnabled('justificativaSolicitante', false);
	
	if(atividade == AVALIACAO_RESPONSAVEL) {
		
		// esvazia os campos ultimaAvaliacao e ultimaObservacao
		form.setValue('ultimaAvaliacao', '');
		form.setValue('ultimaObservacao', '');
		
	    // preenche o campo emailAvaliador com o email do usuário que assumiu a tarefa
	    var	c1 = DatasetFactory.createConstraint('colleaguePK.colleagueId', responsavel, responsavel, ConstraintType.MUST),
	    	fields = new Array('mail', 'colleagueName'),
			constraints = new Array(c1),
			usuario = DatasetFactory.getDataset('colleague', fields, constraints, null);
		
	    form.setValue('emailAvaliador', usuario.getValue(0, 'mail'));
	    form.setValue('nomeAvaliador', usuario.getValue(0, 'colleagueName'));
	    
	} else if(atividade == SOLICITANTE_REAJUSTE) {
		
		// habilita a div de justificativa
		form.setEnabled('justificativaSolicitante', true);
		
	}
    
}