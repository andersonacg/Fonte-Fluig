function createDataset(fields, constraints, sortFields) {
	var CFILPROP = "";
	
	try{
		// Conexao com webservice
		var periodicService = ServiceManager.getService('contrato_locacao');
		var serviceHelper = periodicService.getBean();
		
		try{
			var serviceLocator = serviceHelper.instantiate('br.com.grupoorguel.erptst._6005.TWSC0011');
		} catch(erro) {
			//var serviceLocator = serviceHelper.instantiate('_82._75._168._192._6005.TWSC0011');
			var serviceLocator = serviceHelper.instantiate('_104._75._168._192._6005.TWSC0011');
		}
		
		var service = serviceLocator.getTWSC0011SOAP();
		
		 for(var i in constraints){
			if(constraints[i]['fieldName'] == "CFILPROP"){
				CFILPROP = constraints[i]['finalValue']; 
			}
		}	 

		var result = service.zoomtipcontr(CFILPROP);	
		var result2 = result.getFSRET();	
		
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CCODRET");
		dataset.addColumn("CMSGRET");

		for(var i=0; i < result2.size(); i++){
				dataset.addRow(new Array(result2.get(i).getCCODRET(), result2.get(i).getCMSGRET()));
			}

		return dataset;
		
	} catch(erro) {
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CMENSERRO2");
		dataset.addRow(new Array(erro.toString()));
	}
}