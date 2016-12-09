function beforeStateEntry(sequenceId) {
    
	var docId = hAPI.getCardValue("idDocument");
    
log.info(docId +"################kameramera###############");

	 
    if (sequenceId == 15) {
  
			hAPI.attachDocument(docId);

	}; 
}
