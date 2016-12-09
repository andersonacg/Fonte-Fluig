var campo;
var ds;

//cria um zoom baseado em um dataset
function zoomDataSet(titulo, dataset, campos, resultFields, type) {
	window.open("/webdesk/zoom.jsp?datasetId=" + dataset + "&dataFields="
			+ campos + "&resultFields=" + resultFields + "&type=" + type + "&filterValues=status,Liberado" 
			+ "&title=" + titulo, "zoom",
			"status , scrollbars=no ,width=600, height=350 , top=0 , left=0");
}
// busca informações do dataset colleague
// o type é o nome do componente do html
function zoomGrupo(componente, nomeCampo) {
	// passagem de parametros para função zoomFichário: Titulo, dataset, campos,
	// type
	
	 campo = nomeCampo
	 ds = componente
	 
 	
	zoomDataSet('notebookDisponivel','ds_cadastroNote',
			'nome','documentid,nome,modelo,numSerio', componente);
 
	 

}
function zoomDataSetFic(titulo, dataset, campos, resultFields, type) {
	window.open("/webdesk/zoom.jsp?datasetId=" + dataset + "&dataFields="
			+ campos + "&resultFields=" + resultFields + "&type=" + type
			+ "&title=" + titulo, "zoom",
			"status , scrollbars=no ,width=600, height=350 , top=0 , left=0");
}

// atribui o valor selecionado do zoom para o campo do formulário

function setSelectedZoomItem(selectedItem) {
	
		 document.getElementsByName(campo)[0].value = selectedItem.documentid+','+selectedItem.nome+','+selectedItem.modelo+','+selectedItem.numSerio;

}



//ds_GestaoProposta
//ds_NomeVendedor
//ds_Filial