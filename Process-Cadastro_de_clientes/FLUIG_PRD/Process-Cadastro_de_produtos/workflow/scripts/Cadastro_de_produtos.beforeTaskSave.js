function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var nrProxAtividade = getValue("WKNextState"),
		FIM_EQUIPAMENTO = 23,
		FIM_MRO = 31,
		FIM_SERVICO = 39,
		FIM_IMOBILIZADO = 45;
	
	//CAMPOS GERAIS
	var descResum_solicitante =hAPI.getCardValue("descResum_solicitante");
	var descDetal_solicitante =hAPI.getCardValue("descDetal_solicitante");
	var grupoSub =hAPI.getCardValue("grupoSub");
	var modelo_equipamento =hAPI.getCardValue("modelo_equipamento");
	var fornecedor_equipamento =hAPI.getCardValue("fornecedor_equipamento");
	
	//CAMPOS EQUIPAMENTOS
	var tipo_equipamento =hAPI.getCardValue("tipo_equipamento");
	var uniMedida_equipamento =hAPI.getCardValue("uniMedida_equipamento");
	var segUniMedida_equipamento =hAPI.getCardValue("segUniMedida_equipamento");
	var fatorConversao_equipamento =hAPI.getCardValue("fatorConversao_equipamento");
	var tpConversao_equipamento =hAPI.getCardValue("tpConversao_equipamento");
	var armPadrao_equipamento =hAPI.getCardValue("armPadrao_equipamento");
	var pontoPedido_equipamento =hAPI.getCardValue("pontoPedido_equipamento");
	var loteMinCompra_equipamento =hAPI.getCardValue("loteMinCompra_equipamento");
	var ltEconomicoCompra_equipamento =hAPI.getCardValue("ltEconomicoCompra_equipamento");
	var tolReceb_equipamento =hAPI.getCardValue("tolReceb_equipamento");
	var custoPadrao_equipamento =hAPI.getCardValue("custoPadrao_equipamento");
	var gpTributario_equipamento =hAPI.getCardValue("gpTributario_equipamento");
	var aliquota_equipamento =hAPI.getCardValue("aliquota_equipamento");
	
	//CAMPOS MRO
	var tipo_MRO =hAPI.getCardValue("tipo_MRO");
	var uniMedida_MRO =hAPI.getCardValue("uniMedida_MRO");
	var segUniMedida_MRO =hAPI.getCardValue("segUniMedida_MRO");
	var fatorConversao_MRO =hAPI.getCardValue("fatorConversao_MRO");
	var tpConversao_MRO =hAPI.getCardValue("tpConversao_MRO");
	var armPadrao_MRO =hAPI.getCardValue("armPadrao_MRO");
	var pontoPedido_MRO =hAPI.getCardValue("pontoPedido_MRO");
	var loteMinCompra_MRO =hAPI.getCardValue("loteMinCompra_MRO");
	var ltEconomicoCompra_MRO =hAPI.getCardValue("ltEconomicoCompra_MRO");
	var tolReceb_MRO =hAPI.getCardValue("tolReceb_MRO");
	var custoPadrao_MRO =hAPI.getCardValue("custoPadrao_MRO");
	var gpTributario_MRO =hAPI.getCardValue("gpTributario_MRO");
	var aliquota_MRO =hAPI.getCardValue("aliquota_MRO");
	
	//CAMPOS SERVIÇOS
	var tipo_materiais =hAPI.getCardValue("tipo_materiais");
	var uniMedida_materiais =hAPI.getCardValue("uniMedida_materiais");
	var segUniMedida_materiais =hAPI.getCardValue("segUniMedida_materiais");
	var fatorConversao_materiais =hAPI.getCardValue("fatorConversao_materiais");
	var tpConversao_materiais =hAPI.getCardValue("tpConversao_materiais");
	var armPadrao_materiais =hAPI.getCardValue("armPadrao_materiais");
	var gpTributario_materiais =hAPI.getCardValue("gpTributario_materiais");
	var aliquota_materiais =hAPI.getCardValue("aliquota_materiais");
	var codServicoISS_materiais =hAPI.getCardValue("codServicoISS_materiais");

	//CAMPOS IMOBILIZADO
	var tipo_imobilizado =hAPI.getCardValue("tipo_imobilizado");
	var uniMedida_imobilizado =hAPI.getCardValue("uniMedida_imobilizado");
	var segUniMedida_imobilizado =hAPI.getCardValue("segUniMedida_imobilizado");
	var fatorConversao_imobilizado =hAPI.getCardValue("fatorConversao_imobilizado");
	var tpConversao_imobilizado =hAPI.getCardValue("tpConversao_imobilizado");
	var armPadrao_imobilizado =hAPI.getCardValue("armPadrao_imobilizado");
	var gpTributario_imobilizado =hAPI.getCardValue("gpTributario_imobilizado");
	var ncm_imobilizado =hAPI.getCardValue("ncm_imobilizado");
	var aliquota_imobilizado =hAPI.getCardValue("aliquota_imobilizado");
	// -------FIM CAMPOS-----
	
	
	if (nrProxAtividade == FIM_EQUIPAMENTO){
		 var CFILPROP	= DatasetFactory.createConstraint("CFILPROP", "" , "" , ConstraintType.MUST);
		 var CDESC	= DatasetFactory.createConstraint("CDESC", descResum_solicitante , descResum_solicitante , ConstraintType.MUST);
		 var CDESCDET	= DatasetFactory.createConstraint("CDESCDET", descDetal_solicitante , descDetal_solicitante , ConstraintType.MUST);
		 var CGRUPO	= DatasetFactory.createConstraint("CGRUPO", grupoSub , grupoSub , ConstraintType.MUST);
		 var CTIPO	= DatasetFactory.createConstraint("CTIPO", tipo_equipamento , tipo_equipamento , ConstraintType.MUST);
		 var CUM	= DatasetFactory.createConstraint("CUM", uniMedida_equipamento , uniMedida_equipamento , ConstraintType.MUST);
		 var CSEGUM	= DatasetFactory.createConstraint("CSEGUM", segUniMedida_equipamento , segUniMedida_equipamento , ConstraintType.MUST);
		 var CLOCPAD	= DatasetFactory.createConstraint("CLOCPAD", armPadrao_equipamento , armPadrao_equipamento , ConstraintType.MUST);
		 var CGRTRIB	= DatasetFactory.createConstraint("CGRTRIB", gpTributario_equipamento , gpTributario_equipamento , ConstraintType.MUST);
		 var CCODISS	= DatasetFactory.createConstraint("CCODISS", "" , "" , ConstraintType.MUST);
		 var CPOSIPI	= DatasetFactory.createConstraint("CPOSIPI", "" , "" , ConstraintType.MUST);
		 var CTIPCONV	= DatasetFactory.createConstraint("CTIPCONV", tpConversao_equipamento , tpConversao_equipamento , ConstraintType.MUST);
		 var CCONV	= DatasetFactory.createConstraint("CCONV", fatorConversao_equipamento , fatorConversao_equipamento , ConstraintType.MUST);
		 var CEMIN	= DatasetFactory.createConstraint("CEMIN", pontoPedido_equipamento , pontoPedido_equipamento , ConstraintType.MUST);
		 var CLM	= DatasetFactory.createConstraint("CLM", loteMinCompra_equipamento , loteMinCompra_equipamento , ConstraintType.MUST);
		 var CLE	= DatasetFactory.createConstraint("CLE", ltEconomicoCompra_equipamento , ltEconomicoCompra_equipamento , ConstraintType.MUST);
		 var CTOLER	= DatasetFactory.createConstraint("CTOLER", tolReceb_equipamento , tolReceb_equipamento , ConstraintType.MUST);
		 var CCUSTD	= DatasetFactory.createConstraint("CCUSTD", custoPadrao_equipamento , custoPadrao_equipamento , ConstraintType.MUST);
		 var CIPI	= DatasetFactory.createConstraint("CIPI", aliquota_equipamento , aliquota_equipamento , ConstraintType.MUST);

		 var constraints   = new Array(CFILPROP,CDESC,CDESCDET,CGRUPO,CTIPO,CUM,CSEGUM,CLOCPAD,CGRTRIB,CCODISS,CPOSIPI,CTIPCONV,CCONV,CEMIN,CLM,CLE,CTOLER,CCUSTD,CIPI);	 
		 var dataset 	= DatasetFactory.getDataset("ds_envia_produto", null, constraints, null);

		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 
		 }
	}
	
	
	if (nrProxAtividade == FIM_MRO){
		 var CFILPROP	= DatasetFactory.createConstraint("CFILPROP", "" , "" , ConstraintType.MUST);
		 var CDESC	= DatasetFactory.createConstraint("CDESC", descResum_solicitante , descResum_solicitante , ConstraintType.MUST);
		 var CDESCDET	= DatasetFactory.createConstraint("CDESCDET", descDetal_solicitante , descDetal_solicitante , ConstraintType.MUST);
		 var CGRUPO	= DatasetFactory.createConstraint("CGRUPO", grupoSub , grupoSub , ConstraintType.MUST);
		 var CTIPO	= DatasetFactory.createConstraint("CTIPO", tipo_MRO , tipo_MRO , ConstraintType.MUST);
		 var CUM	= DatasetFactory.createConstraint("CUM", uniMedida_MRO , uniMedida_MRO , ConstraintType.MUST);
		 var CSEGUM	= DatasetFactory.createConstraint("CSEGUM", segUniMedida_MRO , segUniMedida_MRO , ConstraintType.MUST);
		 var CLOCPAD	= DatasetFactory.createConstraint("CLOCPAD", armPadrao_MRO , armPadrao_MRO , ConstraintType.MUST);
		 var CGRTRIB	= DatasetFactory.createConstraint("CGRTRIB", gpTributario_MRO , gpTributario_MRO , ConstraintType.MUST);
		 var CCODISS	= DatasetFactory.createConstraint("CCODISS", "" , "" , ConstraintType.MUST);
		 var CPOSIPI	= DatasetFactory.createConstraint("CPOSIPI", "" , "" , ConstraintType.MUST);
		 var CTIPCONV	= DatasetFactory.createConstraint("CTIPCONV", tpConversao_MRO , tpConversao_MRO , ConstraintType.MUST);
		 var CCONV	= DatasetFactory.createConstraint("CCONV", fatorConversao_MRO , fatorConversao_MRO , ConstraintType.MUST);
		 var CEMIN	= DatasetFactory.createConstraint("CEMIN", pontoPedido_MRO , pontoPedido_MRO , ConstraintType.MUST);
		 var CLM	= DatasetFactory.createConstraint("CLM", loteMinCompra_MRO , loteMinCompra_MRO , ConstraintType.MUST);
		 var CLE	= DatasetFactory.createConstraint("CLE", ltEconomicoCompra_MRO , ltEconomicoCompra_MRO , ConstraintType.MUST);
		 var CTOLER	= DatasetFactory.createConstraint("CTOLER", tolReceb_MRO , tolReceb_MRO , ConstraintType.MUST);
		 var CCUSTD	= DatasetFactory.createConstraint("CCUSTD", custoPadrao_MRO , custoPadrao_MRO , ConstraintType.MUST);
		 var CIPI	= DatasetFactory.createConstraint("CIPI", aliquota_MRO , aliquota_MRO , ConstraintType.MUST);

		 var constraints   = new Array(CFILPROP,CDESC,CDESCDET,CGRUPO,CTIPO,CUM,CSEGUM,CLOCPAD,CGRTRIB,CCODISS,CPOSIPI,CTIPCONV,CCONV,CEMIN,CLM,CLE,CTOLER,CCUSTD,CIPI);	 
		 var dataset 	= DatasetFactory.getDataset("ds_envia_produto", null, constraints, null);
		 
		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 
		 }
	}
	
	
	if (nrProxAtividade == FIM_SERVICO){
		 var CFILPROP	= DatasetFactory.createConstraint("CFILPROP", "" , "" , ConstraintType.MUST);
		 var CDESC	= DatasetFactory.createConstraint("CDESC", descResum_solicitante , descResum_solicitante , ConstraintType.MUST);
		 var CDESCDET	= DatasetFactory.createConstraint("CDESCDET", descDetal_solicitante , descDetal_solicitante , ConstraintType.MUST);
		 var CGRUPO	= DatasetFactory.createConstraint("CGRUPO", grupoSub , grupoSub , ConstraintType.MUST);
		 var CTIPO	= DatasetFactory.createConstraint("CTIPO", tipo_materiais , tipo_materiais , ConstraintType.MUST);
		 var CUM	= DatasetFactory.createConstraint("CUM", uniMedida_materiais , uniMedida_materiais , ConstraintType.MUST);
		 var CSEGUM	= DatasetFactory.createConstraint("CSEGUM", segUniMedida_materiais , segUniMedida_materiais , ConstraintType.MUST);
		 var CLOCPAD	= DatasetFactory.createConstraint("CLOCPAD", armPadrao_materiais , armPadrao_materiais , ConstraintType.MUST);
		 var CGRTRIB	= DatasetFactory.createConstraint("CGRTRIB", gpTributario_materiais , gpTributario_materiais , ConstraintType.MUST);
		 var CCODISS	= DatasetFactory.createConstraint("CCODISS", codServicoISS_materiais , codServicoISS_materiais , ConstraintType.MUST);
		 var CPOSIPI	= DatasetFactory.createConstraint("CPOSIPI", "" , "" , ConstraintType.MUST);
		 var CTIPCONV	= DatasetFactory.createConstraint("CTIPCONV", tpConversao_materiais , tpConversao_materiais , ConstraintType.MUST);
		 var CCONV	= DatasetFactory.createConstraint("CCONV", fatorConversao_materiais , fatorConversao_materiais , ConstraintType.MUST);
		 var CEMIN	= DatasetFactory.createConstraint("CEMIN", "" , "" , ConstraintType.MUST);
		 var CLM	= DatasetFactory.createConstraint("CLM", "" , "" , ConstraintType.MUST);
		 var CLE	= DatasetFactory.createConstraint("CLE", "" , "" , ConstraintType.MUST);
		 var CTOLER	= DatasetFactory.createConstraint("CTOLER", "" , "" , ConstraintType.MUST);
		 var CCUSTD	= DatasetFactory.createConstraint("CCUSTD", "" , "" , ConstraintType.MUST);
		 var CIPI	= DatasetFactory.createConstraint("CIPI", aliquota_materiais , aliquota_materiais , ConstraintType.MUST);

		 var constraints   = new Array(CFILPROP,CDESC,CDESCDET,CGRUPO,CTIPO,CUM,CSEGUM,CLOCPAD,CGRTRIB,CCODISS,CPOSIPI,CTIPCONV,CCONV,CEMIN,CLM,CLE,CTOLER,CCUSTD,CIPI);	 
		 var dataset 	= DatasetFactory.getDataset("ds_envia_produto", null, constraints, null);
		 
		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 
		 }
	}
	
	
	if (nrProxAtividade == FIM_IMOBILIZADO){
		 var CFILPROP	= DatasetFactory.createConstraint("CFILPROP", "" , "" , ConstraintType.MUST);
		 var CDESC	= DatasetFactory.createConstraint("CDESC", descResum_solicitante , descResum_solicitante , ConstraintType.MUST);
		 var CDESCDET	= DatasetFactory.createConstraint("CDESCDET", descDetal_solicitante , descDetal_solicitante , ConstraintType.MUST);
		 var CGRUPO	= DatasetFactory.createConstraint("CGRUPO", grupoSub , grupoSub , ConstraintType.MUST);
		 var CTIPO	= DatasetFactory.createConstraint("CTIPO", tipo_imobilizado , tipo_imobilizado , ConstraintType.MUST);
		 var CUM	= DatasetFactory.createConstraint("CUM", uniMedida_imobilizado , uniMedida_imobilizado , ConstraintType.MUST);
		 var CSEGUM	= DatasetFactory.createConstraint("CSEGUM", segUniMedida_imobilizado , segUniMedida_imobilizado , ConstraintType.MUST);
		 var CLOCPAD	= DatasetFactory.createConstraint("CLOCPAD", armPadrao_imobilizado , armPadrao_imobilizado , ConstraintType.MUST);
		 var CGRTRIB	= DatasetFactory.createConstraint("CGRTRIB", gpTributario_imobilizado , gpTributario_imobilizado , ConstraintType.MUST);
		 var CCODISS	= DatasetFactory.createConstraint("CCODISS", "" , "" , ConstraintType.MUST);
		 var CPOSIPI	= DatasetFactory.createConstraint("CPOSIPI", ncm_imobilizado , ncm_imobilizado , ConstraintType.MUST);
		 var CTIPCONV	= DatasetFactory.createConstraint("CTIPCONV", tpConversao_imobilizado , tpConversao_imobilizado , ConstraintType.MUST);
		 var CCONV	= DatasetFactory.createConstraint("CCONV", fatorConversao_imobilizado , fatorConversao_imobilizado , ConstraintType.MUST);
		 var CEMIN	= DatasetFactory.createConstraint("CEMIN", "" , "" , ConstraintType.MUST);
		 var CLM	= DatasetFactory.createConstraint("CLM", "" , "" , ConstraintType.MUST);
		 var CLE	= DatasetFactory.createConstraint("CLE", "" , "" , ConstraintType.MUST);
		 var CTOLER	= DatasetFactory.createConstraint("CTOLER", "" , "" , ConstraintType.MUST);
		 var CCUSTD	= DatasetFactory.createConstraint("CCUSTD", "" , "" , ConstraintType.MUST);
		 var CIPI	= DatasetFactory.createConstraint("CIPI", aliquota_imobilizado , aliquota_imobilizado , ConstraintType.MUST);

		 var constraints   = new Array(CFILPROP,CDESC,CDESCDET,CGRUPO,CTIPO,CUM,CSEGUM,CLOCPAD,CGRTRIB,CCODISS,CPOSIPI,CTIPCONV,CCONV,CEMIN,CLM,CLE,CTOLER,CCUSTD,CIPI);	 
		 var dataset 	= DatasetFactory.getDataset("ds_envia_produto", null, constraints, null);
		 
		 if(dataset.getValue(0, "CCODRET") != "S"){
			 throw dataset.getValue(0, "CMSGRET"); 
		 
		 }
	}
}