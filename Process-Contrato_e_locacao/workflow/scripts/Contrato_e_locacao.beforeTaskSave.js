function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var nrProxAtividade = getValue("WKNextState");
	var ASSINA_CONTRATO = 7;
	var FIM = 9;
	
	var filial = hAPI.getCardValue("filial");
	var proposta = hAPI.getCardValue("proposta");
	var tpContrato = hAPI.getCardValue("tpContrato");
	var condPagamento = hAPI.getCardValue("condPagamento");
	var reajContrato = hAPI.getCardValue("reajContrato");
	var indContrato = hAPI.getCardValue("indContrato");
	var tpPlanilha = hAPI.getCardValue("tpPlanilha");
	var reajPlanilha = hAPI.getCardValue("reajPlanilha");
	var caucao = hAPI.getCardValue("caucao");
	var perCaucao = hAPI.getCardValue("perCaucao");
	var dateInicio = hAPI.getCardValue("dateInicio");
	var dateFinal = hAPI.getCardValue("dateFinal");
	var codUsuario = hAPI.getCardValue("codUsuario");
	var startProtheus = hAPI.getCardValue("startProtheus");
	
	//if (nrProxAtividade == ASSINA_CONTRATO && startProtheus == "false"){
	if (nrProxAtividade == ASSINA_CONTRATO){


		log.info("#### ENTRANDO NA ATIVIDADE ####");
		
		
		 var CFILPROP = DatasetFactory.createConstraint("CFILPROP", filial , filial , ConstraintType.MUST);
		 var CPROPOS = DatasetFactory.createConstraint("CPROPOS", proposta , proposta , ConstraintType.MUST);
		 var CTPCNTR = DatasetFactory.createConstraint("CTPCNTR", tpContrato , tpContrato , ConstraintType.MUST);
		 var CCONDPG = DatasetFactory.createConstraint("CCONDPG", condPagamento , condPagamento , ConstraintType.MUST);
		 var CRJCNTR = DatasetFactory.createConstraint("CRJCNTR", reajContrato , reajContrato , ConstraintType.MUST);
		 var CINDICE = DatasetFactory.createConstraint("CINDICE", indContrato , indContrato , ConstraintType.MUST);
		 var CTPPLAN = DatasetFactory.createConstraint("CTPPLAN", tpPlanilha , tpPlanilha , ConstraintType.MUST);
		 var CRJPLAN = DatasetFactory.createConstraint("CRJPLAN", reajPlanilha , reajPlanilha , ConstraintType.MUST);
		 var CCAUCAO = DatasetFactory.createConstraint("CCAUCAO", caucao , caucao , ConstraintType.MUST);
		 var CPRCCAU = DatasetFactory.createConstraint("CPRCCAU", perCaucao , perCaucao , ConstraintType.MUST);
		 var CDTINI	= DatasetFactory.createConstraint("CDTINI", dateInicio , dateInicio , ConstraintType.MUST);
		 var CDTFIM	= DatasetFactory.createConstraint("CDTFIM", dateFinal , dateFinal , ConstraintType.MUST);
		 var CCODUSR = DatasetFactory.createConstraint("CCODUSR", codUsuario , codUsuario , ConstraintType.MUST);


		 log.info("#### INICIANDO CONSULTA DO WEBSERVICE ####");
		 
		 
		 var constraints = new Array(CFILPROP,CPROPOS,CTPCNTR,CCONDPG,CRJCNTR,CINDICE,CTPPLAN,CRJPLAN,CCAUCAO,CPRCCAU,CDTINI,CDTFIM,CCODUSR);	 
		 var dataset = DatasetFactory.getDataset("ws_monta_contrato", null, constraints, null);
		 
		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 }
			 
		 hAPI.setCardValue('contrato', dataset.getValue(0, "CNUMCTR"));
		 hAPI.setCardValue('revContrato', dataset.getValue(0, "CREVCTR"));
		 
	}
	
	if (nrProxAtividade == FIM && startProtheus == "false"){
		 var contrato =hAPI.getCardValue("contrato");
		 var revContrato =hAPI.getCardValue("revContrato");
		 var dateAssinaturaContrato =hAPI.getCardValue("dateAssinaturaContrato");
		
		 var CFILCTR	= DatasetFactory.createConstraint("CFILCTR", filial , filial , ConstraintType.MUST);
		 var CCNTR	= DatasetFactory.createConstraint("CCNTR", contrato , contrato , ConstraintType.MUST);
		 var CREVCTR	= DatasetFactory.createConstraint("CREVCTR", revContrato , revContrato , ConstraintType.MUST);
		 var DDTASSIN	= DatasetFactory.createConstraint("DDTASSIN", dateAssinaturaContrato , dateAssinaturaContrato , ConstraintType.MUST);
		 var constraints   = new Array(CFILCTR,CCNTR,CREVCTR,DDTASSIN);	 
		 var dataset 	= DatasetFactory.getDataset("ds_assina_contrato", null, constraints, null);
		 
		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 
		 }
		
	}
	
}