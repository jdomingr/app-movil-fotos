// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
    $('#sub').bind('click', enviar);
    $('#reg').bind('click', registra);
}, false);


function enviar(){
    var user = $('#user').val();
    var pass = $('#pass').val();

    if(user.length > 0 && pass.length > 0){
      myApp.showPreloader('Iniciando sesión...');
      $.ajax({
          dataType: 'json',
          type: 'POST',
          data: {
              Email: user,
              Contrasena: pass
          },
          url: 'http://146.83.196.204:8070/jdoming/ingreso.php',
          
          success: function (data, status, xhr) {
                
              if(data.respuesta == true){
                  localStorage.setItem('Email',user);
                  localStorage.setItem('Contrasena',pass);   
                  myApp.hidePreloader();
                  window.location = "main.html";
             }else{
                  myApp.hidePreloader();
                  myApp.alert('Datos Incorrectos','Remember');
            }
          },
         error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Error! Asegurese de estar registrado en la aplicación','Remember');
             
          }
      });
    }else{
      myApp.alert('Debe Ingresar los datos solicitados','Remember');
    }    
}

function registra(){
    window.location = "registro.html";
}
