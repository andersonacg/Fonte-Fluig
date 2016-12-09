    var doc=document.getElementById("demo");
    function getLocation()
    {
        if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
		
        }
    }

    function showPosition(position)
    {
        var latlon=position.coords.latitude+","+position.coords.longitude;


        var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
        +latlon+"&zoom=14&size=300x200&sensor=false";
        document.getElementById("map").innerHTML="<img src='"+img_url+"'>";
		
		var lat = position.coords.latitude;
		var longi = position.coords.longitude;
		document.getElementById("latitude").value = lat;
		document.getElementById("longitude").value = longi;
    }

    function showError(error)
    {
        switch(error.code) 
        {
        case error.PERMISSION_DENIED:
          doc.innerHTML="Pedido de Geolocalização negado pelo usuário."
          break;
        case error.POSITION_UNAVAILABLE:
          doc.innerHTML="Informações de localização não está disponível."
          break;
        case error.TIMEOUT:
          doc.innerHTML="Solicitação de locatização não retornou em tempo hábil (timeout)."
          break;
        case error.UNKNOWN_ERROR:
          doc.innerHTML="Erro desconhecido."
          break;
        }
    }