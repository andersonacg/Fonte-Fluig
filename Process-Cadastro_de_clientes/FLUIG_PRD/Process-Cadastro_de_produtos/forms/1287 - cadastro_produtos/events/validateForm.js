function validateForm(form){
	var atividade = getValue('WKNumState'),
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
	INFORMACOES_FISCAIS_IMOBILIZADO = 43;
	
	// VALIDAÇÃO GERAL
	if (form.getValue("descResum_solicitante") == null || form.getValue("descResum_solicitante") == 0){
		throw "Preencha o campo Descrição Resumida";
	}	
	if (form.getValue("descDetal_solicitante") == null || form.getValue("descDetal_solicitante") == 0){
		throw "Preencha o campo Descrição Detalhada";
	}	
	if (form.getValue("grupoSub") == null || form.getValue("grupoSub") == 0){
		throw "Preencha o campo Grupo/Subgrupo";
	}	
	
	//VALIDAÇÃO DE EQUIPAMENTOS
	if(atividade == INFORMACOES_PATRIMONIO) {
		if (form.getValue("tipo_equipamento") == null || form.getValue("tipo_equipamento") == 0){
			throw "Preencha o campo Tipo";
		}
		if (form.getValue("uniMedida_equipamento") == null || form.getValue("uniMedida_equipamento") == 0){
			throw "Preencha o campo Unidade de Medida";
		}	
		if (form.getValue("armPadrao_equipamento") == null || form.getValue("armPadrao_equipamento") == 0){
			throw "Preencha o campo Armazém Padrão";
		}	
	}
	
	//VALIDAÇÃO DE MRO
	if(atividade == ESPECIALISTA_COMPLEMENTA) {
		if (form.getValue("tipo_MRO") == null || form.getValue("tipo_MRO") == 0){
			throw "Preencha o campo Tipo";
		}
		if (form.getValue("uniMedida_MRO") == null || form.getValue("uniMedida_MRO") == 0){
			throw "Preencha o campo Unidade de Medida";
		}	
		if (form.getValue("armPadrao_MRO") == null || form.getValue("armPadrao_MRO") == 0){
			throw "Preencha o campo Armazém Padrão";
		}	
	}
	
	//VALIDAÇÃO DE SERVIÇOS
	if(atividade == INFORMACOES_SUPRIMENTOS_SERVICOS) {
		if (form.getValue("tipo_materiais") == null || form.getValue("tipo_materiais") == 0){
			throw "Preencha o campo Tipo Materiais";
		}
		if (form.getValue("uniMedida_materiais") == null || form.getValue("uniMedida_materiais") == 0){
			throw "Preencha o campo Unidade de Medida";
		}	
		if (form.getValue("armPadrao_materiais") == null || form.getValue("armPadrao_materiais") == 0){
			throw "Preencha o campo Armazém Padrão";
		}	
	}
	
	//VALIDAÇÃO DE IMOBILIZADO TÉCNICO
	if(atividade == INFORMACOES_SUPRIMENTOS_IMOBILIZADO) {
		if (form.getValue("tipo_imobilizado") == null || form.getValue("tipo_imobilizado") == 0){
			throw "Preencha o campo Tipo";
		}
		if (form.getValue("uniMedida_imobilizado") == null || form.getValue("uniMedida_imobilizado") == 0){
			throw "Preencha o campo Unidade de Medida";
		}	
		if (form.getValue("armPadrao_imobilizado") == null || form.getValue("armPadrao_imobilizado") == 0){
			throw "Preencha o campo Armazém Padrão";
		}	
	}
}