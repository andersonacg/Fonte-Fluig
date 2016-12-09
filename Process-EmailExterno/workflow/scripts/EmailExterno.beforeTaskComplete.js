function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	log.info("########GORDOLA##########");
	 
 
	 log.info("Entrando no IF");
	 
	 var atividade = getValue("WKNumState");	 
	 var user = getValue("WKUser");
	 
	 log.info(getValue("WKNumState"));

	 var dataChamado = hAPI.getCardValue("dataChamado");
	 var horaChamado = hAPI.getCardValue("horaChamado");
	 var unidade = hAPI.getCardValue("unidade");
	 var number = hAPI.getCardValue("numOS");
	 var nomeCliente = hAPI.getCardValue("nomeCliente");	 
	 var enderco = hAPI.getCardValue("enderco");
	 var contato = hAPI.getCardValue("contato");
	 var telContato = hAPI.getCardValue("telContato");
	 var emailContato = hAPI.getCardValue("emailContato");	 
	 var numContato = hAPI.getCardValue("numContato");
	 
	 var equipamento = hAPI.getCardValue("equipamento");
	 var modelo = hAPI.getCardValue("modelo");
	 var nSerie = hAPI.getCardValue("nSerie");
	 var uPreventiva = hAPI.getCardValue("uPreventiva");
	 var horimetro = hAPI.getCardValue("horimetro");
	 var horimetroMNT = hAPI.getCardValue("horimetroMNT");
	 var ambTrab = hAPI.getCardValue("ambTrab");	 
	 var equipParado = hAPI.getCardValue("equipParado"); 
	 
	 var servico = hAPI.getCardValue("servico");
	 var dReclamado = hAPI.getCardValue("dReclamado"); 
	 var dencontrado = hAPI.getCardValue("dencontrado"); 
	 var pendecias = hAPI.getCardValue("pendecias");
	 var sexecutado = hAPI.getCardValue("sexecutado"); 
	 var houveOp = hAPI.getCardValue("houveOp"); 
	 var observ = hAPI.getCardValue("observ"); 
	 
	 var Qtd = hAPI.getCardValue("Qtd"); 
	 var codigo = hAPI.getCardValue("codigo"); 
	 var Descricao = hAPI.getCardValue("Descricao"); 
	 
	 
	 var nomeTecnico = hAPI.getCardValue("nomeTecnico");
	 var placaVeiculo = hAPI.getCardValue("placaVeiculo");
	 var horaSaida = hAPI.getCardValue("horaSaida");
	 var KMhoraSaida = hAPI.getCardValue("KMhoraSaida");
	 var chegadoCliente = hAPI.getCardValue("chegadoCliente");
	 var KMchegadoCliente = hAPI.getCardValue("KMchegadoCliente");
	 var inicioServico = hAPI.getCardValue("inicioServico");
	 var KMinicioServico = hAPI.getCardValue("KMinicioServico");
	 var terminoServico = hAPI.getCardValue("terminoServico");
	 var KMtermonoServico = hAPI.getCardValue("KMtermonoServico");
	 var destinoFinal = hAPI.getCardValue("destinoFinal");
	 var KMdestinoFinal = hAPI.getCardValue("KMdestinoFinal");
	 var equipFuncio = hAPI.getCardValue("equipFuncio");
	 
	 var hotel = hAPI.getCardValue("hotel");
	 var alimentacao = hAPI.getCardValue("alimentacao");
	 var pExternas = hAPI.getCardValue("pExternas");

	 var respCliente = hAPI.getCardValue("respCliente");
	 var nomeArquivo = respCliente.replace(" ","+");
	 var document = hAPI.getCardValue("document");
	 var cargo = hAPI.getCardValue("cargo");

	 var idDocument = hAPI.getCardValue("idDocument");


	 log.info("##Entrando no IF##" +atividade);
	 
	 
	 if (atividade == 8) {

	   log.info("Mandando Email");
	   log.info("-" + dataChamado);
	   log.info("-" + horaChamado);
	   log.info("-" + unidade);
	   log.info("-" + number);
	   log.info("-" + nomeCliente);
	   log.info("-" + enderco);
	   log.info("-" + contato);   
	   log.info("-" + telContato);
	   log.info("-" + emailContato);
	   log.info("-" + numContato);
	   
	   
	   log.info("-" + equipamento);
	   log.info("-" + modelo);
	   log.info("-" + nSerie);
	   log.info("-" + uPreventiva);
	   log.info("-" + horimetro);
	   log.info("-" + horimetroMNT);
	   log.info("-" + ambTrab);   
	   log.info("-" + equipParado);
	   
	   log.info("-" + servico);
	   log.info("-" + dReclamado);
	   log.info("-" + dencontrado);
	   log.info("-" + pendecias);
	   log.info("-" + sexecutado);
	   log.info("-" + houveOp);
	   log.info("-" + observ);
	   
	   log.info("-" + Qtd);
	   log.info("-" + codigo);
	   log.info("-" + Descricao);
	   
	   
	   log.info("-" + nomeTecnico);
	   log.info("-" + placaVeiculo);
	   log.info("-" + horaSaida);
	   log.info("-" + KMhoraSaida);
	   log.info("-" + chegadoCliente);
	   log.info("-" + KMchegadoCliente);
	   log.info("-" + inicioServico);
	   log.info("-" + KMinicioServico);
	   log.info("-" + terminoServico);
	   log.info("-" + KMtermonoServico);
	   log.info("-" + destinoFinal);
	   log.info("-" + KMdestinoFinal);
	   log.info("-" + equipFuncio);

	   log.info("-" + hotel);
	   log.info("-" + alimentacao);
	   log.info("-" + pExternas);	   
	   
	   log.info("-" + respCliente);
	   log.info("-" + nomeArquivo);
	   log.info("-" + document);
	   log.info("-" + cargo);
	   log.info("-" + idDocument);
	   
	   


	   try {

	    log.info("***********************************************************");
	    log.info("entrando no try");
	    log.info(getValue("WKNumState"));
	    log.info("***********************************************************");

	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    parametros.put("dataChamado",dataChamado);
	    parametros.put("horaChamado",horaChamado);
	    parametros.put("unidade",unidade);
	    parametros.put("number",number);
	    parametros.put("nomeCliente",nomeCliente);	 
	    parametros.put("enderco",enderco);
	    parametros.put("contato",contato);
	    parametros.put("telContato",telContato);
	    parametros.put("emailContato",emailContato);	 
	    parametros.put("numContato",numContato);
	    	 
	    parametros.put("equipamento",equipamento);
	    parametros.put("modelo",modelo);
	    parametros.put("nSerie",nSerie);
	    parametros.put("uPreventiva",uPreventiva);
	    parametros.put("horimetro",horimetro);
	    parametros.put("horimetroMNT",horimetroMNT);
	    parametros.put("ambTrab",ambTrab);	 
	    parametros.put("equipParado",equipParado); 
	    	 
	    parametros.put("servico",servico);
	    parametros.put("dReclamado",dReclamado); 
	    parametros.put("dencontrado",dencontrado); 
	    parametros.put("pendecias",pendecias);
	    parametros.put("sexecutado",sexecutado); 
	    parametros.put("houveOp",houveOp); 
	    parametros.put("observ",observ); 
	    
	    parametros.put("Qtd",Qtd); 
	    parametros.put("codigo",codigo); 
	    parametros.put("Descricao",Descricao); 
	    	 
	    parametros.put("nomeTecnico",nomeTecnico);
	    parametros.put("placaVeiculo",placaVeiculo);
	    parametros.put("horaSaida",horaSaida);
	    parametros.put("KMhoraSaida",KMhoraSaida);
	    parametros.put("chegadoCliente",chegadoCliente);
	    parametros.put("KMchegadoCliente",KMchegadoCliente);
	    parametros.put("inicioServico",inicioServico);
	    parametros.put("KMinicioServico",KMinicioServico);
	    parametros.put("terminoServico",terminoServico);
	    parametros.put("KMtermonoServico",KMtermonoServico);
	    parametros.put("destinoFinal",destinoFinal);
	    parametros.put("KMdestinoFinal",KMdestinoFinal);
	    parametros.put("equipFuncio",equipFuncio);
	    	 
	    parametros.put("hotel",hotel);
	    parametros.put("alimentacao",alimentacao);
	    parametros.put("pExternas",pExternas);

	    parametros.put("respCliente",respCliente);
	    parametros.put("nomeArquivo",nomeArquivo);	    
	    parametros.put("document",document);
	    parametros.put("cargo",cargo);
	    parametros.put("idDocument",idDocument);
	    

	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", "Relatorio de Assistencia Tecnica");

	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();
	    //destinatarios.add(getValue("WKUser"));
	     destinatarios.add('4gasmilu76rzojk51452543974520');
	    log.info("Mandando Email??????????????" +destinatarios);

	    // Envia e-mail
	    notifier.notify('4gasmilu76rzojk51452543974520', "template_MailExterno", parametros, destinatarios,"text/html");
	    
	   } catch (e) {
		   log.info("#########Teste Param##########");
	    log.info(e);
	   }
	   
	   log.info("########email enviado!!!!!!!!!!!!");
	 
	 }


	 
	   log.info(respCliente + "########Chewbsssss!!!!!!!!!!!!");
	 
	 
}



