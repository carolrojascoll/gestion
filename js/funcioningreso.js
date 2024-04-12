function loguear()
{
let user=document.getElementById("usuario").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="12345")
{
     window.location="menu.html";
}
else
{
     alert("Datos Incorrectos")
}
}