$(function() {
	
	var atividade = $('#WKNumState').val(),
		
		AVALIACAO_RESPONSAVEL = 14;
	
	if(atividade == AVALIACAO_RESPONSAVEL) {
	
		// pega o nome do avaliador de acordo
		var index = wdkAddChild('tabelaAvaliacao'),
			nomeAvaliador = $('#nomeAvaliador').val();
		
		// define o nome do avaliador
		$('#avaliador___' + index).val(nomeAvaliador);
		
		// preenche os campos de avaliação e observação que serão usados para a decisão do fluxo
		$('input[id^=avaliacao___]').change(function() {
			$('#ultimaAvaliacao').val(this.value);
		});
		
		$('textarea[id^=observacaoAvaliador___]').keyup(function() {
			$('#ultimaObservacao').val(this.value);
		});
		
	}
	
});