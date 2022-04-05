let btnlogin = document.getElementById("btnlogin");  
let contacto = document.getElementById("contacto"); 

btnlogin.addEventListener("click",btnLogin);
contacto.addEventListener("click",conTacto);

function btnLogin(){
        location.href = "login.html"; 
}

function conTacto(){
    const contact = swal;
    if(contact == swal){
        swal({
            text: "CONTACTO " + 18295041112,
          });
    }  
}
