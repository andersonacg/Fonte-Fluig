function afterStateEntry(sequenceId){
	
    if(sequenceId == 4){

        var codNotebook = hAPI.getCardValue("notebookDisponivel");

        
        log.info("####################ENTROU##################");
        log.info(sequenceId + "####################ENTROU##################");
        log.info(codNotebook + "####################ENTROU##################");
//        
//        
//        var cardField;
//        var cardFieldArray;
//        
//    
//        var periodicService = ServiceManager.getService("ECMCardService");
//    	var serviceHelper = periodicService.getBean();
//    	var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
//    	var servicePort = serviceLocator.getCardServicePort();
//   	
//    	cardField = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
//    	cardField.setField("status");
//    	cardField.setValue("Emprestado");
//    	
//    	
//    	cardFieldArray = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");
//    	cardFieldArray.getItem().add(cardField);
//  	    
//
//    	    	
//    	servicePort.updateCardData(1, "andersonac.goncalves@grupoorguel.com.br","@@ludand594812AA",codNotebook.substring(0,codNotebook.indexOf(",")), cardFieldArray);
//  
//            	 
      }
    
   
}