var BannerFluig = SuperWidget
		.extend({
			// variáveis da widget
			variavelNumerica : null,
			variavelCaracter : null,

			// método iniciado quando a widget é carregada
			init : function() {
				 //alert("gordo");
				this.executeAction();
			},

			// BIND de eventos
			bindings : {
				local : {
					'execute' : [ 'click_executeAction' ]
				},
				global : {}
			},

			executeAction : function(htmlElement, event) {
				// pulo do gato
				that = this;
				$.ajax({
							type : "GET",
							datatype : "json",
							contentType : "application/json",
							url : "http://fluig.grupoorguel.com.br/api/public/ecm/document/listDocument/29",
							success : function(dataList) {
								that.buscaLink(dataList);
							},
							error : function(dataList) {
								return dataList;
							}
						});
			},

			buscaLink : function(dataList) {
				
				var control = 0;
				
		for (var x = 0; x < dataList.content.length; x++) {
			       $.ajax({
						type : "GET",
						datatype : "json",
						contentType : "application/json",
						url : "http://fluig.grupoorguel.com.br/api/public/ecm/document/" + dataList.content[x].id + "/" + dataList.content[x].version,
						success : function(data) {
						
							var id = data.content.id;
							var url = data.content.fileURL;
							var link = data.content.additionalComments;
							
							if (control == 0) {
								$('#sind').append('<li data-target="#myCarousel" data-slide-to="'+id+'" class="active"></li>');
								$('#sinner').append('<div class="item active"><a href="' + link + '" target="blank"><img src="'+ url +'"alt="'+id+' Slide"></div>');
								
								control++;
							} else {
								$('#sind').append('<li data-target="#myCarousel" data-slide-to="'+id+'"></li>');
								$('#sinner').append('<div class="item"><a href="' + link + '" target="blank"><img src="'+ url +'" alt="'+id+' Slide"></div>');
							}
						},
						error : function(data) {
							return data;
						}
						
					});
			       
		}
	}

});
