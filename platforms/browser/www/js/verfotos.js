var myApp = new Framework7(); 
 
var $$ = Dom7;
 
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});



 var ruta = new Array();
    var descripcion = new Array();


$$('#verfoto').on('click', function () {
   
    var Email = localStorage.getItem('Email');
      $.ajax({
          dataType: 'json',
          type: 'POST',
          data: {  
              Email: Email
          },
          url: 'http://colvin.chillan.ubiobio.cl:8070/jdoming/verFotos.php',
          
            success: function (data, status, xhr) {
                
                   var myPhotoBrowserPopupDark = myApp.photoBrowser({
                    photos : data,
                    theme: 'dark',
                    type: 'standalone',
                    backLinkText: 'Cerrar',
                    ofText: 'de'
                });
              myPhotoBrowserPopupDark.open(); 
                
                
          },
         error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Error! No existen fotos asociadas a su cuenta','Remember');
             
             
          }
        
      });
    
   
});
 
