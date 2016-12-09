function displayFields(form,customHTML){ 
	var user = getValue("WKUser");
	var indexes = form.getChildrenIndexes("tabelaItens");
	
	var c1 = DatasetFactory.createConstraint('colleaguePK.colleagueId', user, user, ConstraintType.MUST),
	    fields = new Array('mail','colleagueName'),
	    constraints = new Array(c1),
	    dataset = DatasetFactory.getDataset('colleague', fields, constraints, null);
	
	//form.setValue("nomeUsuario",dataset.getValue(0,"colleagueName"));
	form.setValue("emailUsuario",dataset.getValue(0, "mail"));
	
    for (var i = 0; i < indexes.length; i++) {
        form.setValue("nomeUsuario___" + indexes[i],dataset.getValue(0,"colleagueName"));
    }
}