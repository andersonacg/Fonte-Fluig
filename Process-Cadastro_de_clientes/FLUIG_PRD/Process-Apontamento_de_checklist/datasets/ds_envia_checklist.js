function createDataset(fields, constraints, sortFields) {	/*
	
	var CHECKLIST = "";
	var CODIGOMOVIMENTO = "";
	var CODIGOPRODUTO = "";
	var DESCRICAOPRODUTO = "";
	var BASEATENDIMENTO = "";
	var NUMEROPEDIDO = "";
	var CODIGODOCUMENTOSAIDA = "";
	var SERIEDOCUMENTOSAIDA = "";
	var CODIGODOCUMENTOENTRADA = "";
	var SERIEDOCUMENTOENTRADA = "";
	var MOVIMENTO = "";
	var CODIGOLOCAL = "";
	var DESCRICAOLOCAL = "";
	var CONTRATO = "";
	
	try{	
		// Conexao com webservice
		var periodicService = ServiceManager.getService('contrato_locacao');
		var serviceHelper = periodicService.getBean();
		log.info("##################Estrouuuu##################");
				
				
		try{
			var serviceLocator = serviceHelper.instantiate('br.com.grupoorguel.erptst._6005.TWSC0011');
		} catch(erro) {
			var serviceLocator = serviceHelper.instantiate('_82._75._168._192._6005.TWSC0011');
		}	

		log.info("############GORDOLA#########");
		log.info(serviceLocator);
		log.info("###GORDOLA##");

		
		try{
			var serviceLocator3 = serviceHelper.instantiate('br.com.grupoorguel.erptst._6005.ARRAYOFFSITENS1');
		} catch(erro) {
			var serviceLocator3 = serviceHelper.instantiate('_82._75._168._192._6005.ARRAYOFFSITENS1');
		}	

		log.info("############GORDOLA#########");
		log.info(serviceLocator3);
		log.info("############GORDOLA#########");
		var ARRAYOFFITENS1 = serviceLocator3.getFSITENS1();
		log.info("############GORDOLA#########" + ARRAYOFFITENS1);
		var result = serviceLocator3.setEXECUTADO("FOI");
		log.info("############GORDOLA#########");
		log.info(serviceLocator3.getEXECUTADO());
		
		ARRAYOFFITENS1.setCODMOVIMENTOITEM("0000000481");
		ARRAYOFFITENS1.setDATAEXECUCAO("20160916");
		ARRAYOFFITENS1.setDESCRICAOITEM("VERIFICAR PINTURA");
		ARRAYOFFITENS1.setHORAEXECUCAO("08:00");
		ARRAYOFFITENS1.setITEMCHECKLIST("001");
		ARRAYOFFITENS1.setNOMEUSUARIO("breno.menezes@totvs.com.br");
	
	
		
		
		var result = service.incproduto(params.CHECKLIST,params.CODIGOMOVIMENTO,params.CODIGOPRODUTO,params.DESCRICAOPRODUTO,
				params.BASEATENDIMENTO,params.NUMEROPEDIDO,params.CODIGODOCUMENTOSAIDA,params.SERIEDOCUMENTOSAIDA,params.CODIGODOCUMENTOENTRADA,params.MOVIMENTO,
				params.CODIGOLOCAL,params.DESCRICAOLOCAL,params.CONTRATO);		
		log.info("###GORDOLA");
		var result2 = result.getFSRET();
		log.info("###GORDOLA");
		
		
		
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CCODRET");
		dataset.addColumn("CMSGRET");
		
		return dataset;

		
	} catch(erro) {
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CCODRET");
		dataset.addColumn("CMSGRET");
		dataset.addRow(new Array('C', erro.toString()));
	}*/
}