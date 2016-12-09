function valDatas(){ 

	var dtFim = document.getElementsByName('datafim')[0].value;
	document.getElementsByName("dtDevolucao")[0].value = dtFim;



    var dat1 = document.getElementsByName("dataInicio")[0].value;
    var dat2 = document.getElementsByName("datafim")[0].value;
    var data = new Date();
    data = data.toISOString().substring(0, 10);

	
    if ( dat1 < data) {
    	messagemErro("Data inicial menor que data atual!");
    	document.getElementsByName("dataInicio")[0].value = '';

    }

    if (dat2!=''){
      if ( dat2 < data) {
    	messagemErro("Data final menor que data atual!");
    	document.getElementsByName("datafim")[0].value = '';

		} else if ( dat2 < dat1) {
	    	messagemErro("Data final menor que data inicial!");
	    	document.getElementsByName("datafim")[0].value = '';

		}
	}
}

function messagemErro(msg){
		    FLUIGC.toast({
		        title: 'ERRO: ',
		        message: msg,
		        type: 'danger'

		    });
}
			
			
		
window.onload = function(){

	renovarEmp();


};
function renovarEmp(){



var renova = document.getElementsByName("renovacao")[0].value;

if( renova == "RENOVAR"){
	document.getElementById("renovar").hidden = false
}

if( renova == "FINALIZAR"){
	document.getElementById("renovar").hidden = true
}

};


