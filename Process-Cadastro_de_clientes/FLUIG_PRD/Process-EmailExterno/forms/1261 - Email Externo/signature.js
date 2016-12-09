function signatureCapture() {
	var canvas = document.getElementById("newSignature");
	var context = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 200;
	context.fillStyle = "#fff";
	context.strokeStyle = "#444";
	context.lineWidth = 1.5;
	context.lineCap = "round";
	context.fillRect(0, 0, canvas.width, canvas.height);
	var disableSave = true;
	var pixels = [];
	var cpixels = [];
	var xyLast = {};
	var xyAddLast = {};
	var calculate = false;
	{ 	//functions
		function remove_event_listeners() {
			canvas.removeEventListener('mousemove', on_mousemove, false);
			canvas.removeEventListener('mouseup', on_mouseup, false);
			canvas.removeEventListener('touchmove', on_mousemove, false);
			canvas.removeEventListener('touchend', on_mouseup, false);

			document.body.removeEventListener('mouseup', on_mouseup, false);
			document.body.removeEventListener('touchend', on_mouseup, false);
		}

		function get_coords(e) {
			var x, y;

			if (e.changedTouches && e.changedTouches[0]) {
				var offsety = canvas.offsetTop || 0;
				var offsetx = canvas.offsetLeft || 0;

				x = e.changedTouches[0].pageX - offsetx;
				y = e.changedTouches[0].pageY - offsety;
			} else if (e.layerX || 0 == e.layerX) {
				x = e.layerX;
				y = e.layerY;
			} else if (e.offsetX || 0 == e.offsetX) {
				x = e.offsetX;
				y = e.offsetY;
			}

			return {
				x : x,
				y : y
			};
		};

		function on_mousedown(e) {
			e.preventDefault();
			e.stopPropagation();

			canvas.addEventListener('mouseup', on_mouseup, false);
			canvas.addEventListener('mousemove', on_mousemove, false);
			canvas.addEventListener('touchend', on_mouseup, false);
			canvas.addEventListener('touchmove', on_mousemove, false);
			document.body.addEventListener('mouseup', on_mouseup, false);
			document.body.addEventListener('touchend', on_mouseup, false);

			empty = false;
			var xy = get_coords(e);
			context.beginPath();
			pixels.push('moveStart');
			context.moveTo(xy.x, xy.y);
			pixels.push(xy.x, xy.y);
			xyLast = xy;
		};

		function on_mousemove(e, finish) {
			e.preventDefault();
			e.stopPropagation();

			var xy = get_coords(e);
			var xyAdd = {
				x : (xyLast.x + xy.x) / 2,
				y : (xyLast.y + xy.y) / 2
			};

			if (calculate) {
				var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
				var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
				pixels.push(xLast, yLast);
			} else {
				calculate = true;
			}

			context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
			pixels.push(xyAdd.x, xyAdd.y);
			context.stroke();
			context.beginPath();
			context.moveTo(xyAdd.x, xyAdd.y);
			xyAddLast = xyAdd;
			xyLast = xy;

		};

		function on_mouseup(e) {
			remove_event_listeners();
			disableSave = false;
			context.stroke();
			pixels.push('e');
			calculate = false;
		};
	}
	canvas.addEventListener('touchstart', on_mousedown, false);
	canvas.addEventListener('mousedown', on_mousedown, false);
}

function signatureSave() {

	var canvas = document.getElementById("newSignature");
	var dataURL = canvas.toDataURL("image/png");
	var url = document.getElementsByName("saveSignature").src = dataURL;
	
	
	
	saveSignature(url);
};

function saveSignature(url){
	var xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">\
		   <soapenv:Header/>\
		   <soapenv:Body>\
		      <ws:createSimpleDocument>\
		         <username>andersonac.goncalves@grupoorguel.com.br</username>\
		         <password>@@ludand594812AA</password>\
		         <companyId>1</companyId>\
		         <parentDocumentId>2021</parentDocumentId>\
		         <publisherId>e3yli4dzmilsph8i1471615843498</publisherId>\
		         <documentDescription>'+ $('#respCliente').val() +'</documentDescription>\
		         <Attachments>\
		            <!--Zero or more repetitions:-->\
		            <item>\
		               <!--Optional:-->\
		               <attach>false</attach>\
		               <!--Optional:-->\
		               <descriptor>teste</descriptor>\
		               <!--Optional:-->\
		               <editing>false</editing>\
		               <!--Optional:-->\
		               <fileName>'+ jQuery('#respCliente').val() +'.png</fileName>\
		               <!--Optional:-->\
		               <fileSelected/>\
		               <fileSize>1</fileSize>\
		               <!--Optional:-->\
		               <filecontent>'+url.substr(22, url.length)+'</filecontent>\
		               <!--Optional:-->\
		               <fullPatch>teste</fullPatch>\
		               <!--Optional:-->\
		               <iconPath>?</iconPath>\
		               <!--Optional:-->\
		               <mobile>true</mobile>\
		               <!--Optional:-->\
		               <pathName>?</pathName>\
		               <!--Optional:-->\
		               <principal>true</principal>\
		            </item>\
		         </Attachments>\
		      </ws:createSimpleDocument>\
		   </soapenv:Body>\
		</soapenv:Envelope>';

		$.ajax({
		   method: 'post',
		   url: '/webdesk/ECMDocumentService?wsdl',
		   dataType: 'xml',
		   data: xml,
		  
		   error: function(e) {
		    alert(e);
		   },
		  
		   success: function(dados) {

			   dados.getElementsByTagName("documentId")[0].childNodes[0].nodeValue;
			   document.getElementById("idDocument").value = dados.getElementsByTagName("documentId")[0].childNodes[0].nodeValue;
			   messagemSuccess('Assinatura foi salva com Sucesso ID '  + $('#idDocument').val());
			   
			   
			   
		   }
	 });

}

function messagemSuccess(msg){
    FLUIGC.toast({
        message: msg,
        type: 'success'

    });
}



function signatureClear() {
	var canvas = document.getElementById("newSignature");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
}