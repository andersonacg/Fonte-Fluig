function validateForm(form){

	
	var numState = getValue("WKNumState"); 	
	var INICIO = 4;
	var VISITA = 8;
	
	
		if (numState == 0 || numState == INICIO) {
		
				if(form.getValue("horaChamado") ==  null || form.getValue("horaChamado") ==  0){
					
					throw "Preencha o campo HORA DO CHAMADO";
			}
				if(form.getValue("unidade") ==  null || form.getValue("unidade") ==  0){
					
					throw "Preencha o campo UNIDADE";
			}
				if(form.getValue("numOS") ==  null || form.getValue("numOS") ==  0){
					
					throw "Preencha o campo NUMERO DA O.S";
			}
				if(form.getValue("nomeCliente") ==  null || form.getValue("nomeCliente") ==  0){
					
					throw "Preencha o campo NOME DO CLIENTE";
			}
				if(form.getValue("enderco") ==  null || form.getValue("enderco") ==  0){
					
					throw "Preencha o campo ENDEREÇO";
			}
				if(form.getValue("contato") ==  null || form.getValue("contato") ==  0){
					
					throw "Preencha o campo CONTATO";
			}
				if(form.getValue("telContato") ==  null || form.getValue("telContato") ==  0){
					
					throw "Preencha o campo TELEFONE";
			}
				if(form.getValue("emailContato") ==  null || form.getValue("emailContato") ==  0){
					
					throw "Preencha o campo EMAIL";
			}
				if(form.getValue("numContato") ==  null || form.getValue("numContato") ==  0){
					
					throw "Preencha o campo NUMERO DO CONTATO";
			}
				
				if(form.getValue("equipamento") ==  null || form.getValue("equipamento") ==  0){
					
					throw "Preencha o campo EQUIPAMENTO";
			}
				if(form.getValue("modelo") ==  null || form.getValue("modelo") ==  0){
					
					throw "Preencha o campo MODELO";
			}
				if(form.getValue("nSerie") ==  null || form.getValue("nSerie") ==  0){
					
					throw "Preencha o campo NUMERO DE SERIE";
			}	


	
			
	}
	
		if(numState == VISITA) {
			
			if(form.getValue("dencontrado") ==  null || form.getValue("dencontrado") ==  0){
				
				throw "Preencha o campo DEFEITO ENCONTRADO";
		}
			if(form.getValue("pendecias") ==  null || form.getValue("pendecias") ==  0){
				
				throw "Preencha o campo PENDENCIAS";
		}
			if(form.getValue("sexecutado") ==  null || form.getValue("sexecutado") ==  0){
				
				throw "Preencha o campo SERVIÇO EXECUTADO";
		}
			if(form.getValue("houveOp") ==  null || form.getValue("houveOp") ==  0){
				
				throw "Preencha o campo HOUVE FALHA DE OPERAÇÃO";
		}
			if(form.getValue("nomeTecnico") ==  null || form.getValue("nomeTecnico") ==  0){
				
				throw "Preencha o campo NOME DO TECNICO";
		}
			if(form.getValue("placaVeiculo") ==  null || form.getValue("placaVeiculo") ==  0){
				
				throw "Preencha o campo PLACA DO VEICULO";
		}
			if(form.getValue("horaSaida") ==  null || form.getValue("horaSaida") ==  0){
				
				throw "Preencha o campo HORA DA SAIDA";
		}
			if(form.getValue("KMhoraSaida") ==  null || form.getValue("KMhoraSaida") ==  0){
				
				throw "Preencha o campo KM (HORA DA SAIDA)";
		}
			if(form.getValue("chegadoCliente") ==  null || form.getValue("chegadoCliente") ==  0){
				
				throw "Preencha o campo CHEGADO AO CLIENTE";
		}
			if(form.getValue("KMchegadoCliente") ==  null || form.getValue("KMchegadoCliente") ==  0){
				
				throw "Preencha o campo KM (CHEGADO AO CLIENTE)";
		}
			if(form.getValue("inicioServico") ==  null || form.getValue("inicioServico") ==  0){
				
				throw "Preencha o campo INICIO DO SERVICO";
		}
			if(form.getValue("KMinicioServico") ==  null || form.getValue("KMinicioServico") ==  0){
				
				throw "Preencha o campo KM (INICIO DO SERVICO)";
		}
			if(form.getValue("terminoServico") ==  null || form.getValue("terminoServico") ==  0){
				
				throw "Preencha o campo TERMINO DO SERVICO";
		}
			if(form.getValue("KMtermonoServico") ==  null || form.getValue("KMtermonoServico") ==  0){
				
				throw "Preencha o campo KM (TERMINO DO SERVICO)";
		}
			if(form.getValue("destinoFinal") ==  null || form.getValue("destinoFinal") ==  0){
				
				throw "Preencha o campo DESTINO FINAL";
		}
			if(form.getValue("KMdestinoFinal") ==  null || form.getValue("KMdestinoFinal") ==  0){
				
				throw "Preencha o campo KM (DESTINO FINAL)";
		}
			if(form.getValue("equipFuncio") ==  null || form.getValue("equipFuncio") ==  0){
				
				throw "Preencha o campo EQUIPMANRO FICOU FUNCIONANDO";
		}
			if(form.getValue("respCliente") ==  null || form.getValue("respCliente") ==  0){
				
				throw "Preencha o campo RESPOSAVEL DO CLIENTE";
		}
			if(form.getValue("document") ==  null || form.getValue("document") ==  0){
				
				throw "Preencha o campo DOCUMENTO";
		}
			if(form.getValue("cargo") ==  null || form.getValue("cargo") ==  0){
				
				throw "Preencha o campo CARGO";
		}
			if(form.getValue("idDocument") ==  null || form.getValue("idDocument") ==  0){
				
				throw "Preencha o campo ID DOCUMENTO";
		}

	

			
		}
	
	
}