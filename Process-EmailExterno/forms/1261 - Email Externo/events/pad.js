function pad(num){
	
	var num_formatado = num;
	
	if(num < 10) {
		 num_formatado = "0"+num;
	}
	
	return num_formatado;
	
}