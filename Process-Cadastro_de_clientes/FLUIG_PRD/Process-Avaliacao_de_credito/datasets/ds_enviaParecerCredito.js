function createDataset(fields, constraints, sortFields) {
	
	var response = DatasetBuilder.newDataset();
	
	// colunas de retorno
	response.addColumn('mensagem');
	response.addColumn('responsavel');
	response.addColumn('nivel');
	response.addColumn('sucesso');
	
	try {
		
		// parâmetros para a função do webservice
		var codigoFilial = '0202',
			codigoAprovacao = '000003', // código de alçada de aprovação
		 	origem = 'CLIENTE',
		 	documento = '00000601',
		 	nivel = '01',
		 	parecerAvaliador = 'A', // A ou R (aprovado ou reprovado)
		 	avaliador = 'pedro.neves@grupoorguel.com.br',
		 	justificativaSolicitante = 'Preciso dessa aprovação',
		 	observacaoAvaliador = 'Ok, o crédito será aprovado',
		 	valorOperacao = '0';
		
		// subtitui os valores das variáveis pelas constraints
		if(constraints != null) {
			for(var i = 0; i < constraints.length; i++) {
			   
				var item = constraints[i];
				
				if(item.fieldName == 'codigoFilial') codigoFilial = item.initialValue;
				else if(item.fieldName == 'codigoAprovacao') codigoAprovacao = item.initialValue;
				else if(item.fieldName == 'origem') origem = item.initialValue;
				else if(item.fieldName == 'documento') documento = item.initialValue;
				else if(item.fieldName == 'nivel') nivel = item.initialValue;
				else if(item.fieldName == 'parecerAvaliador') parecerAvaliador = item.initialValue;
				else if(item.fieldName == 'avaliador') avaliador = item.initialValue;
				else if(item.fieldName == 'justificativaSolicitante') justificativaSolicitante = item.initialValue;
				else if(item.fieldName == 'observacaoAvaliador') observacaoAvaliador = item.initialValue;
				else if(item.fieldName == 'valorOperacao') valorOperacao = item.initialValue;
			   
			}
		}
		
		// conecta com o webservice
		var	periodicService = ServiceManager.getService('WS_enviaParecer'),
			serviceHelper = periodicService.getBean();
			serviceLocator = serviceHelper.instantiate('_82._75._168._192._6005.OWSC0099'),
			service = serviceLocator.getOWSC0099SOAP();
	
		// Invoca o serviço (chama a função do webservice)
		var resultObj = service.wsgetalc(
				codigoFilial,
				codigoAprovacao,
				origem,
				documento,
				nivel,
				parecerAvaliador,
				avaliador,
				justificativaSolicitante,
				observacaoAvaliador,
				valorOperacao
			),
			result = resultObj.getWSRALCADAS().get(0);
		
		// Pega o resultado do Protheus
		var	responsavel = result.getGRUPO(),
			mensagem = result.getMENSAGEM(),
			nivel = result.getNIVEL(),
			sucesso = result.getSUCESSO();
		
		// Insere no retorno do dataset
		response.addRow(new Array(mensagem, responsavel, nivel, sucesso));
	
	} catch(e) {
		 response.addRow(new Array(e.toString(), '', '', 'False'));
	}
    
	return response;
	
}