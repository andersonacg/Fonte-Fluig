function displayFields(form,customHTML){ 
	var atividade = getValue('WKNumState'),
		current = getValue('WKCurrentState'),
	
	INICIO = 4,
	DEFINE_TIPO_CADASTRO = 15,
	INFORMACOES_PATRIMONIO = 17,
	ESPECIALISTA_COMPLEMENTA = 25,
	INFORMACOES_SUPRIMENTOS_EQUIPAMENTO = 19,
	INFORMACOES_SUPRIMENTOS_MRO = 27,
	INFORMACOES_SUPRIMENTOS_SERVICOS = 33,
	INFORMACOES_FISCAIS_EQUIPAMENTO = 21,
	INFORMACOES_FISCAIS_MRO = 29,
	INFORMACOES_FISCAIS_SERVICOS = 35,
	INFORMACOES_SUPRIMENTOS_IMOBILIZADO = 42,
	INFORMACOES_FISCAIS_IMOBILIZADO = 43,
	FIM = form.getValue("cod_atividade_final");
	
	// VISIBILIDADE DA GRUPO EQUIPAMENTO
	if(atividade == INFORMACOES_PATRIMONIO) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-patrimonio-equipamento]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_SUPRIMENTOS_EQUIPAMENTO) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_equipamento', false);
		form.setEnabled('uniMedida_equipamento', false);
		form.setEnabled('segUniMedida_equipamento', false);
		form.setEnabled('fatorConversao_equipamento', false);
		form.setEnabled('tpConversao_equipamento', false);
		form.setEnabled('armPadrao_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-patrimonio-equipamento]").css("display","block");' +
					'$("[data-suprimentos-equipamento]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_FISCAIS_EQUIPAMENTO) {
		
		form.setValue('cod_atividade_final', 23);
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_equipamento', false);
		form.setEnabled('uniMedida_equipamento', false);
		form.setEnabled('segUniMedida_equipamento', false);
		form.setEnabled('fatorConversao_equipamento', false);
		form.setEnabled('tpConversao_equipamento', false);
		form.setEnabled('armPadrao_equipamento', false);
		
		form.setEnabled('pontoPedido_equipamento', false);
		form.setEnabled('loteMinCompra_equipamento', false);
		form.setEnabled('ltEconomicoCompra_equipamento', false);
		form.setEnabled('tolReceb_equipamento', false);
		form.setEnabled('custoPadrao_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-patrimonio-equipamento]").css("display","block");' +
					'$("[data-suprimentos-equipamento]").css("display","block");' +
					'$("[data-fiscal-equipamento]").css("display","block");' +
				'</script>'
		
		);
	}	
	////////// FIM VISIBILIDADE EQUIPAMENTO //////////	
	
	// VISIBILIDADE DA GRUPO MRO
	
	if(atividade == ESPECIALISTA_COMPLEMENTA) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-especialistas-mro]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_SUPRIMENTOS_MRO) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_MRO', false);
		form.setEnabled('grupoSub_MRO', false);
		form.setEnabled('uniMedida_MRO', false);
		form.setEnabled('segUniMedida_MRO', false);
		form.setEnabled('fatorConversao_MRO', false);
		form.setEnabled('tpConversao_MRO', false);
		form.setEnabled('armPadrao_MRO', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-especialistas-mro]").css("display","block");' +
					'$("[data-suprimentos-mro]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_FISCAIS_MRO) {
		
		form.setValue('cod_atividade_final', 31);
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_MRO', false);
		form.setEnabled('grupoSub_MRO', false);
		form.setEnabled('uniMedida_MRO', false);
		form.setEnabled('segUniMedida_MRO', false);
		form.setEnabled('fatorConversao_MRO', false);
		form.setEnabled('tpConversao_MRO', false);
		form.setEnabled('armPadrao_MRO', false);
		
		form.setEnabled('pontoPedido_MRO', false);
		form.setEnabled('loteMinCompra_MRO', false);
		form.setEnabled('ltEconomicoCompra_MRO', false);
		form.setEnabled('tolReceb_MRO', false);
		form.setEnabled('custoPadrao_MRO', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-especialistas-mro]").css("display","block");' +
					'$("[data-suprimentos-mro]").css("display","block");' +
					'$("[data-fiscal-mro]").css("display","block");' +
				'</script>'
		
		);
	}
	//////////FIM VISIBILIDADE MRO //////////	
	
	// VISIBILIDADE DO GRUPO SERVIÇOS
	if(atividade == INFORMACOES_SUPRIMENTOS_SERVICOS) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-materiais]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_FISCAIS_SERVICOS) {
		
		form.setValue('cod_atividade_final', 39);
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_materiais', false);
		form.setEnabled('uniMedida_materiais', false);
		form.setEnabled('segUniMedida_materiais', false);
		form.setEnabled('fatorConversao_materiais', false);
		form.setEnabled('tpConversao_materiais', false);
		form.setEnabled('armPadrao_materiais', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-materiais]").css("display","block");' +
					'$("[data-fiscal-materiais]").css("display","block");' +
				'</script>'
		
		);
	}
	//////////FIM VISIBILIDADE SERVIÇOS //////////	
	
	// VISIBILIDADE DO GRUPO SERVIÇOS
	if(atividade == INFORMACOES_SUPRIMENTOS_SERVICOS) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-materiais]").css("display","block");' +
				'</script>'
		
		);
	}
	
	// VISIBILIDADE DO GRUPO IMOBILIZADO
	if(atividade == INFORMACOES_SUPRIMENTOS_IMOBILIZADO) {
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-imobilizado]").css("display","block");' +
				'</script>'
		
		);
	}
	
	if(atividade == INFORMACOES_FISCAIS_IMOBILIZADO) {
		
		form.setValue('cod_atividade_final', 45);
		
		form.setEnabled('descResum_solicitante', false);
		form.setEnabled('descDetal_solicitante', false);
		form.setEnabled('grupoSub', false);
		form.setEnabled('modelo_equipamento', false);
		form.setEnabled('fornecedor_equipamento', false);
		
		form.setEnabled('tipo_imobilizado', false);
		form.setEnabled('uniMedida_imobilizado', false);
		form.setEnabled('segUniMedida_imobilizado', false);
		form.setEnabled('fatorConversao_imobilizado', false);
		form.setEnabled('tpConversao_imobilizado', false);
		form.setEnabled('armPadrao_imobilizado', false);
		
		customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-imobilizado]").css("display","block");' +
					'$("[data-fiscal-imobilizado]").css("display","block");' +
				'</script>'
		
		);
	}
	
	//////////FIM VISIBILIDADE IMOBILIZADO //////////	
	
	if (FIM == 23) {
		if ( form.getFormMode() == "VIEW" ) {
			customHTML.append(
				'<script>'+				
					'$("[data-patrimonio-equipamento]").css("display","block");' +
					'$("[data-suprimentos-equipamento]").css("display","block");' +
					'$("[data-fiscal-equipamento]").css("display","block");' +
				'</script>'			
			);
		}		
	}
	
	if (FIM == 31) {
		if ( form.getFormMode() == "VIEW" ) {
			customHTML.append(
				'<script>'+				
					'$("[data-especialistas-mro]").css("display","block");' +
					'$("[data-suprimentos-mro]").css("display","block");' +
					'$("[data-fiscal-mro]").css("display","block");' +
				'</script>'			
			);
		}		
	}
	
	if (FIM == 39) {
		if ( form.getFormMode() == "VIEW" ) {
			customHTML.append(
				'<script>'+				
					'$("[data-suprimentos-materiais]").css("display","block");' +
					'$("[data-fiscal-materiais]").css("display","block");' +
				'</script>'	
			);
		}		
	}
	
	if (FIM == 45) {
		if ( form.getFormMode() == "VIEW" ) {
			customHTML.append(
				'<script>'+				
				'$("[data-suprimentos-imobilizado]").css("display","block");' +
				'$("[data-fiscal-imobilizado]").css("display","block");' +
				'</script>'	
			);
		}		
	}
	log.info("###FIM " + atividade);
}