function createDataset(fields, constraints, sortFields) {
     
    //Cria as colunas
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("Item CheckList");
    dataset.addColumn("Executado");
    dataset.addColumn("Nome Usuario");
    dataset.addColumn("Data de Execucao");
    dataset.addColumn("Hora de Execucao");
    dataset.addColumn("Descricao do Item");
    dataset.addColumn("Codigo do Movimento");

     
    //Cria a constraint para buscar os formulários ativos
    var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
    var constraints = new Array(cst);
     
    var datasetPrincipal = DatasetFactory.getDataset("ds_apontamento_checklist", null, constraints, null);
     
    for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
        var documentId = datasetPrincipal.getValue(i, "metadata#id");
        var documentVersion = datasetPrincipal.getValue(i, "metadata#version");
         
        //Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
        var c1 = DatasetFactory.createConstraint("tablename", "tabelaItens" ,"tabelaItens", ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
        var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
        var constraintsFilhos = new Array(c1, c2, c3);
 
        //Busca o dataset
        var datasetFilhos = DatasetFactory.getDataset("ds_apontamento_checklist", null, constraintsFilhos, null);
 
        for (var j = 0; j < datasetFilhos.rowsCount; j++) {
            //Adiciona os valores nas colunas respectivamente.
            dataset.addRow(new Array(
                    documentId,
                    datasetFilhos.getValue(j, "itemChecklist"), 
                    datasetFilhos.getValue(j, "executado"),
		            datasetFilhos.getValue(j, "nomeUsuario"), 
		            datasetFilhos.getValue(j, "dataExecucao"),
		            datasetFilhos.getValue(j, "horaExecucao"), 
		            datasetFilhos.getValue(j, "descricaoItem"),
		            datasetFilhos.getValue(j, "codMovimentoItem")));
		            
        }
    }
     
    return dataset;
    
}