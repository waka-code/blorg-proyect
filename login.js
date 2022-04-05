window.onload = inicio;



function inicio() {
 document.getElementById("volverlo").onclick=Volver;
}

function Volver(){
    location ="index.html";
} 

/*CbtnUsuario*/
document.getElementById("loginbtn").onclick=acceder;

/*CargarUsuario*/
function acceder(){
  
   if( 
        document.getElementById("pass").value == "123456" &&
        document.getElementById("loginF").value == "Usuario")
        {
    location ="index.html";
   } 
   else if(
       document.getElementById("loginF").value == "" && 
       document.getElementById("pass").value == "")
       {
        document.getElementById("loginF").focus();
    }
    else{
        alert("Usuario o Password incorrecta.");
         document.getElementById("loginF").value="";
         document.getElementById("pass").value="";
         document.getElementById("loginF").focus();
    }

}


