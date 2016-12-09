function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
		var nrProxAtividade = getValue("WKNextState");
		 
		var idForm = getValue("WKCardId");
		 
		var checklist =hAPI.getCardValue("checklist");
		var codigoMovimento =hAPI.getCardValue("codigoMovimento");
		var codigoProduto =hAPI.getCardValue("codigoProduto");
		var descricaoProduto =hAPI.getCardValue("descricaoProduto");
		var baseAtendimento =hAPI.getCardValue("baseAtendimento");
		var numeroPedido =hAPI.getCardValue("numeroPedido");
		var codigoDocumentoSaida =hAPI.getCardValue("codigoDocumentoSaida");
		var serieDocumentoSaida =hAPI.getCardValue("serieDocumentoSaida");
		var codigoDocumentoEntrada =hAPI.getCardValue("codigoDocumentoEntrada");
		var serieDocumentoEntrada =hAPI.getCardValue("serieDocumentoEntrada");
		var movimento =hAPI.getCardValue("movimento");
		var codigoLocal =hAPI.getCardValue("codigoLocal");
		var descricaoLocal =hAPI.getCardValue("descricaoLocal");
		var contrato =hAPI.getCardValue("contrato");

		var FIM = 9;
		
	if(nrProxAtividade == FIM){

	
		// Conexao com webservice
		var periodicService = ServiceManager.getService('contrato_locacao');
		var serviceHelper = periodicService.getBean();
		var serviceChecklist = serviceHelper.instantiate('_82._75._168._192._6005.TWSC0011');
		var serviceCabec = serviceHelper.instantiate('_82._75._168._192._6005.FSCABEC');
		var serviceArray = serviceHelper.instantiate('_82._75._168._192._6005.ARRAYOFFSITENS1');
		var serviceItens = serviceHelper.instantiate('_82._75._168._192._6005.FSITENS1');
		
	
		
		// alimentar getFSITENS1 para cada iteração e adicionar o fsitens no array utilizando o for
		
		 var cst = DatasetFactory.createConstraint("metadata#id", idForm, idForm, ConstraintType.MUST);
		 var constraints = new Array(cst);
		 var datasetPrincipal = DatasetFactory.getDataset("ds_apontamento_checklist", null, constraints, null);
		 
	for( var i = 0; i < datasetPrincipal.rowsCount; i++) {
		 var documentId = datasetPrincipal.getValue(i, "metadata#id");
		 var documentVersion = datasetPrincipal.getValue(i, "metadata#version");
				  
		 //Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
		 var c1 = DatasetFactory.createConstraint("tablename", "tabelaItens" ,"tabelaItens", ConstraintType.MUST);
		 var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		 var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		 var constraintsFilhos = new Array(c1, c2, c3);
  
		//Busca o dataset 
		 var datasetFilhos = DatasetFactory.getDataset("ds_apontamento_checklist", null, constraintsFilhos, null);
		
	   //  ler o pai e filho
				 

     for (var j = 0; j < datasetFilhos.rowsCount; j++) {
		//Adiciona os valores nas colunas respectivamente.
    	 var serviceItens = serviceHelper.instantiate('_82._75._168._192._6005.FSITENS1');		
    	 
  	 
    	 
 	
     	 serviceItens.setNOMEUSUARIO(hAPI.getCardValue("emailUsuario")),
    	 serviceItens.setITEMCHECKLIST(datasetFilhos.getValue(j, "itemChecklist")),
    	 serviceItens.setHORAEXECUCAO(datasetFilhos.getValue(j, "horaExecucao")),
    	 serviceItens.setDESCRICAOITEM(datasetFilhos.getValue(j, "descricaoItem")),
    	 serviceItens.setDATAEXECUCAO(datasetFilhos.getValue(j, "dataExecucao")),
    	 serviceItens.setCODMOVIMENTOITEM(datasetFilhos.getValue(j, "codMovimentoItem")),
    	 serviceItens.setEXECUTADO(datasetFilhos.getValue(j, "executado"))
    	 
   //adicionar o array no cabec
				 					     		
    	 
			log.info('#####################mail###############################')		
			log.info(hAPI.getCardValue("emailUsuario")),
			log.info(datasetFilhos.getValue(j, "itemChecklist")),
			log.info(datasetFilhos.getValue(j, "horaExecucao")),
			log.info(datasetFilhos.getValue(j, "descricaoItem")),
			log.info(datasetFilhos.getValue(j, "dataExecucao")),
			log.info(datasetFilhos.getValue(j, "codMovimentoItem")),
			log.info(datasetFilhos.getValue(j, "executado"))
    	 
    	 
   	 	serviceArray.getFSITENS1().add(serviceItens);
			  
		         }
		     }
		
			serviceCabec.setAITENS1(serviceArray);
	
		 // chamar serviços do checklist passando os paramentros na ordem
	 		var result = serviceChecklist.getTWSC0011SOAP().checklist(checklist,codigoMovimento,codigoProduto,descricaoProduto,baseAtendimento,numeroPedido,codigoDocumentoSaida,serieDocumentoSaida,codigoDocumentoEntrada,serieDocumentoEntrada,movimento,codigoLocal,descricaoLocal,contrato,serviceCabec);
			     
	 	
	}     		
	
}	     		
		     	
