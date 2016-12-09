function beforeTaskSave(colleagueId, nextSequenceId, userList) {
	
	var atividade = getValue('WKNumState'),
	
		INICIO = 4,
		APROVADO = 7,
		AVALIACAO_RESPONSAVEL = 14,
		DEFINE_ALCADA = 19;

	if(atividade == INICIO) {
		
		// busca pela matrícula do solicitante
		var emailSolicitante = hAPI.getCardValue('emailSolicitante');
		
		var	c1 = DatasetFactory.createConstraint('mail', emailSolicitante, emailSolicitante, ConstraintType.MUST),
			constraints = new Array(c1),
			
			matriculaSolicitante = DatasetFactory.getDataset('colleague', new Array('colleaguePK.colleagueId'), constraints, null);
		
		// preenche a matrícula do solicitante
		if(matriculaSolicitante.rowsCount > 0)
			hAPI.setCardValue('matriculaSolicitante', matriculaSolicitante.getValue(0, 'colleaguePK.colleagueId'));
		else
			throw 'Email do solicitante não existe no Fluig';
		
	} else if(atividade == AVALIACAO_RESPONSAVEL && hAPI.getCardValue('ultimaAvaliacao') != 'S') {
		
		// caso o crédito seja aprovado pela alçada atual...
		// envia dados para o webservice do Protheus e verifica se há um novo responsável
		var codigoFilial = hAPI.getCardValue('codigoFilial'),
			codigoAprovacao = hAPI.getCardValue('codigoAprovacao'),
		 	origem = hAPI.getCardValue('origem'),
		 	documento = hAPI.getCardValue('codigoDocumento'),
		 	nivel = hAPI.getCardValue('nivel'),
		 	parecerAvaliador = hAPI.getCardValue('ultimaAvaliacao'),
		 	avaliador = hAPI.getCardValue('emailAvaliador'),
		 	justificativaSolicitante = hAPI.getCardValue('justificativaSolicitante'),
		 	observacaoAvaliador = hAPI.getCardValue('ultimaObservacao'),
		 	valorOperacao = hAPI.getCardValue('valorOperacao');
		
		var	c1 = DatasetFactory.createConstraint('codigoFilial', codigoFilial, codigoFilial, ConstraintType.MUST),
			c2 = DatasetFactory.createConstraint('codigoAprovacao', codigoAprovacao, codigoAprovacao, ConstraintType.MUST),
			c3 = DatasetFactory.createConstraint('origem', origem, origem, ConstraintType.MUST),
			c4 = DatasetFactory.createConstraint('documento', documento, documento, ConstraintType.MUST),
			c5 = DatasetFactory.createConstraint('nivel', nivel, nivel, ConstraintType.MUST),
			c6 = DatasetFactory.createConstraint('parecerAvaliador', parecerAvaliador, parecerAvaliador, ConstraintType.MUST),
			c7 = DatasetFactory.createConstraint('avaliador', avaliador, avaliador, ConstraintType.MUST),
			c8 = DatasetFactory.createConstraint('justificativaSolicitante', justificativaSolicitante, justificativaSolicitante, ConstraintType.MUST),
			c9 = DatasetFactory.createConstraint('observacaoAvaliador', observacaoAvaliador, observacaoAvaliador, ConstraintType.MUST),
			c10 = DatasetFactory.createConstraint('valorOperacao', valorOperacao, valorOperacao, ConstraintType.MUST),
			
			constraints = new Array(c1, c2, c3, c4, c5, c6, c7, c8, c9,c10),
			
			respostaProtheus = DatasetFactory.getDataset('ds_enviaParecerCredito', null, constraints, null);
		
		// algum retorno?
		if(respostaProtheus.getValue(0, 'sucesso') == 'True') {
			
			// se existir uma nova alçada de aprovação..
			var responsavel = respostaProtheus.getValue(0, 'responsavel').trim();
			
			if(responsavel != '') {
				
				// atualiza os campos com os dados vindos do dataset:
				var	nivel = respostaProtheus.getValue(0, 'nivel');
				
				hAPI.setCardValue('proximoAvaliador', responsavel);
				hAPI.setCardValue('nivel', nivel);
				
			} else {
				// limpa o campo com o nome do avaliador
				hAPI.setCardValue('proximoAvaliador', '');
			}
			
		} else {
			throw respostaProtheus.getValue(0, 'mensagem');
		}
		
	}
	
	if(nextSequenceId == DEFINE_ALCADA) {
		
		// verifica se o email do avaliador existe no fluig
		var avaliador = hAPI.getCardValue('proximoAvaliador');
		
		// verifica se foi recebido um email ou um grupo
		if(avaliador.substr(0, 11) != 'Pool:Group:') {
			
			// usuário
			var prefixo = '',
				
				c1 = DatasetFactory.createConstraint('mail', avaliador, avaliador, ConstraintType.MUST),
				field = 'colleaguePK.colleagueId',
				dataset = 'colleague',
				descricao = 'email';
			
		} else {
			
			// grupo
			var prefixo = 'Pool:Group:',
				avaliador = avaliador.replace(prefixo, ''),
			
				c1 = DatasetFactory.createConstraint('groupPK.groupId', avaliador, avaliador, ConstraintType.MUST),
				field = 'groupPK.groupId',
				dataset = 'group',
				descricao = 'grupo';
			
		}
		
		var responsavel = DatasetFactory.getDataset(dataset, new Array(field), new Array(c1), null);

		if(responsavel.rowsCount > 0)
			var matriculaAvaliador = prefixo + responsavel.getValue(0, field);
		else
			throw 'O ' + descricao + ' do próximo avaliador não foi encontrado no Fluig: ' + avaliador;
		
		// throw matriculaAvaliador;
		
		// atribui o usuário, referente a matrícula recuperada, como responsável pela próxima atividade
		var users = new java.util.ArrayList();
		users.add(matriculaAvaliador);
		hAPI.setAutomaticDecision(AVALIACAO_RESPONSAVEL, users, '');
		
		// preenche o campo proximoAvaliador com o ID do avaliador ou grupo recuperado
		hAPI.setCardValue('proximoAvaliador', matriculaAvaliador);
		
	}
	
}