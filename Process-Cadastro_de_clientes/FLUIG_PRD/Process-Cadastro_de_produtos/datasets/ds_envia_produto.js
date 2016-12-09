function createDataset(fields, constraints, sortFields) {
	var params = {
		 CFILPROP : "0202",
		 CDESC : "teste",
		 CDESCDET : "teste",
		 CGRUPO : "0008",
		 CTIPO : "PA",
		 CUM : "UN",
		 CSEGUM : "UN",
		 CLOCPAD : "01",
		 CGRTRIB : "002",
		 CCODISS : "",
		 CPOSIPI : "000000",
		 CTIPCONV : "M",
		 CCONV : "",
		 CEMIN : "",
		 CLM : "",
		 CLE : "",
		 CTOLER : "",
		 CCUSTD : "",
		 CIPI : ""
	};
	
	
	try{
		// Conexao com webservice
		var periodicService = ServiceManager.getService('contrato_locacao');
		var serviceHelper = periodicService.getBean();
		log.info("###LOG1");
		
		try{
			var serviceLocator = serviceHelper.instantiate('br.com.grupoorguel.erptst._6005.TWSC0011');
		} catch(erro) {
			var serviceLocator = serviceHelper.instantiate('_82._75._168._192._6005.TWSC0011');
		}	
		
		log.info("###LOG2" + serviceLocator);
		var service = serviceLocator.getTWSC0011SOAP();
		log.info("###LOG3" + service);
		
		/* for(var i in constraints){
			if(constraints[i]['fieldName'] == "CFILPROP"){
				CFILPROP = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CDESC"){
				CDESC = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CDESCDET"){
				CDESCDET = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CGRUPO"){
				CGRUPO = constraints[i]['finalValue']; 
			}		
			else if(constraints[i]['fieldName'] == "CTIPO"){
				CTIPO = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CUM"){
				CUM = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CSEGUM"){
				CSEGUM = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CLOCPAD"){
				CLOCPAD = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CGRTRIB"){
				CGRTRIB = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CCODISS"){
				CCODISS = constraints[i]['finalValue']; 
			}		
			else if(constraints[i]['fieldName'] == "CPOSIPI"){
				CPOSIPI = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "CTIPCONV"){
				CTIPCONV = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NCONV"){
				NCONV = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NEMIN"){
				NEMIN = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NLM"){
				NLM = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NLE"){
				NLE = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NTOLER"){
				NTOLER = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NCUSTD"){
				NCUSTD = constraints[i]['finalValue']; 
			}
			else if(constraints[i]['fieldName'] == "NIPI"){
				NIPI = constraints[i]['finalValue']; 
			}
		}	 */
		
		// subtitui os valores das variáveis pelas constraints
	  if(constraints != null) {
		   for(var i = 0; i < constraints.length; i++) {
				var item = constraints[i],
				 name = item.fieldName,
				 value = item.initialValue;
				
				if(params[name] != null) params[name] = value;
			}
	  }
	  log.info("###LOG44" + params.CFILPROP);
	  log.info("###LOG55");

		var result = service.incproduto(params.CFILPROP,params.CDESC,params.CDESCDET,params.CGRUPO,
				params.CTIPO,params.CUM,params.CSEGUM,params.CLOCPAD,params.CGRTRIB,params.CCODISS,
				params.CPOSIPI,params.CTIPCONV,params.CCONV,params.CEMIN,params.CLM,params.CLE,
				params.CTOLER,params.CCUSTD,params.CIPI);		
		log.info("###LOG4");
		var result2 = result.getFSRET();
		log.info("###LOG6");
		
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CCODRET");
		dataset.addColumn("CMSGRET");		
		log.info("###LOGAAA");
		
		for(var i=0; i < result2.size(); i++){
			dataset.addRow(new Array(result2.get(i).getCCODRET(), result2.get(i).getCMSGRET()));
		}

		log.info("FIM");
	
		return dataset;
		
	} catch(erro) {
		var dataset = DatasetBuilder.newDataset();
		dataset.addColumn("CCODRET");
		dataset.addColumn("CMSGRET");
		dataset.addRow(new Array('C', erro.toString()));
	}
}