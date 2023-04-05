$(window).ready(function() {

 $('#fomrulario_login').on('submit',function(e){

    e.preventDefault();


      let usuario = $('#txt_usuario').val();
      let pass    =$('#txt_contrasena').val();

         $.post('Config/controlador.php', { usuario, pass}, function(data){
            
            data = JSON.parse(data);
        
            if (data == 'true'){
                location.href = 'productos.html'
            }else{
                console.log(data);
            }

          });


     })

});