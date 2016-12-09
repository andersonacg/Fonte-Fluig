var beforeSendValidate = function(){

	alert('teste');
	  
	  var assunto = 'chewbacca';
/*	  var nome =  $('#nome').val();
	  var email =  $('#email').val();*/

	 
		 var dataChamado = $('#dataChamado').val();
		 var horaChamado = $('#horaChamado').val();
		 var nomeCliente = $('#nomeCliente').val();
		 var respContato = $('#respContato').val();
		 var telContato = $('#telContato').val();
		 var emailContato = $('#emailContato').val();
		 var obraLocal = $('#obraLocal').val();

		 var equipamento = $('#equipamento').val();
		 var modelo = $('#modelo').val();
		 var nSerie = $('#nSerie').val();
		 var horimetro = $('#horimetro').val();
		 
		 var servico = $('#servico').val(); 
		 var dReclamado = $('#dReclamado').val(); 
		 var informCliente = $('#informCliente').val(); 
		 var problema = $('#problema').val();
		 var causaProblema = $('#causaProblema').val(); 
		 var infomPendencia = $('#infomPendencia').val(); 
		 var detRealizado = $('#detRealizado').val(); 
		 var placaVeiculo = $('#placaVeiculo').val();
		 
		 var horaSaida = $('#horaSaida').val();
		 var KMhoraSaida = $('#KMhoraSaida').val();
		 var chegadoCliente = $('#chegadoCliente').val();
		 var KMchegadoCliente = $('#KMchegadoCliente').val();
		 var inicioServico = $('#inicioServico').val();
		 var KMinicioServico = $('#KMinicioServico').val();
		 var destinoFinal = $('#destinoFinal').val();
		 var KMdestinoFinal = $('#KMdestinoFinal').val();

		 var dataAtendimento = $('#dataAtendimento').val();
		 var nomeTecnico = $('#nomeTecnico').val();
		 var respCliente = $('#respCliente').val();
	  
parent.WCMAPI.Create({
	  url: parent.ECM.restUrl + 'emailSender/customEmailSender/',
	  data: {
	   to: 'andersonaugusto1987@gmail.com',
	   subject: 'teste email externo Fluig',
	   templateId: 'template_MailExterno',
	   dialectId: null,
	   param: {
		   
				'dataChamado': dataChamado ,
				'horaChamado': horaChamado,
				'nomeCliente': nomeCliente,
				'respContato': respContato,
				'telContato' : telContato,
				'emailContato':emailContato,
				'obraLocal':obraLocal,
				
				 'equipamento': equipamento,
				 'modelo': modelo,
				 'nSerie': nSerie,
				 'horimetro': horimetro,
				 
				 'servico' : servico,
				 'dReclamado':  dReclamado,
				 'informCliente' : informCliente,
				 'problema' : problema,
				 'causaProblema' : causaProblema,
				 'infomPendencia' : infomPendencia,
				 'detRealizado' : detRealizado,
				 'placaVeiculo' : placaVeiculo,
		
				 'horaSaida' : horaSaida,
				 'KMhoraSaida' : KMhoraSaida,
				 'chegadoCliente' :chegadoCliente,
				 'KMchegadoCliente' :KMchegadoCliente,
				 'inicioServico' :inicioServico,
				 'KMinicioServico' :KMinicioServico,
				 'destinoFinal' : destinoFinal,
				 'KMdestinoFinal' :KMdestinoFinal,
		
				 'dataAtendimento' : dataAtendimento,
				 'nomeTecnico' : nomeTecnico,
				 'respCliente' : respCliente
		 	  
		   }
	  },
	  success: function() {
	 console.log("Email enviado!");
	
	  }

	});
	return;
   
}


