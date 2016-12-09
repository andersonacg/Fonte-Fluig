function dataAtualFormatada() {
	var data = new Date();
	var dia = data.getDate();
	if (dia.toString().length == 1)
		dia = "0" + dia;
	var mes = data.getMonth() + 1;
	if (mes.toString().length == 1)
		mes = "0" + mes;
	var ano = data.getFullYear();
	return dia + "/" + mes + "/" + ano;
}


console.log("ENTROU");

$( document ).ready(function() {	
	console.log("ENTROU");
		$("[name^=executado___]").change(function() {
			var dt = new Date();
			var minutos = dt.getMinutes();
			console.log("minutos" + minutos);
			if(minutos.length < 2 ){
				minutos = "0" + minutos;
			}
			var time = dt.getHours() + ":" + minutos;
			console.log("time" + time);
			
			
			$(this).parents('tr').find('[name^=dataExecucao___]').val(dataAtualFormatada());
			$(this).parents('tr').find('[name^=horaExecucao___]').val(time);
			
		});

});

