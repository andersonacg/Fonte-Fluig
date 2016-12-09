function afterStateEntry(sequenceId){
	
    if(sequenceId == 24){
        var codNotebook = hAPI.getCardValue("notebookDisponivel");
        var cardField;
        var cardFieldArray;
      
       
        var periodicService = ServiceManager.getService("ECMCardService");
    	var serviceHelper = periodicService.getBean();
    	var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ECMCardServiceService");
    	var servicePort = serviceLocator.getCardServicePort();
    	
    	cardField = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");
    	cardField.setField("status");
    	cardField.setValue("Emprestado");
    	
    	cardFieldArray = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");
    	cardFieldArray.getItem().add(cardField);
    	
    	    	
    	servicePort.updateCardData(1, "anderson.goncalves@grupoorguel.com.br","@@ludand594812AA!@#$",codNotebook.substring(0,codNotebook.indexOf(",")), cardFieldArray);
  
    	 
    	
    }
    
   
}