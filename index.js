document.getElementById("login_btn").addEventListener("click",function(){

let username = document.getElementById("username").value;
let password = document.getElementById("pass").value;
if ((username || password) == ""){
  let result = document.getElementById("result");
  result.style.color = "red";
  result.textContent = "Please fill all fields !!";
}
else if (username == "admin" && password == "12345"){
    result.style.color = "green";
  result.textContent = "Login Successful";
    window.location.href = "home.html";
}
else {
 result.style.color = "red";
  result.textContent = "Invalid Credentials";
}
document.getElementsByTagName("input").value = "";
})

let ch_box = document.getElementById("show_chBox");
ch_box.addEventListener("click",function(){
if (ch_box.checked){
let pass  = document.getElementById("pass");
pass.setAttribute("type","text");
}
else{
    pass.setAttribute("type","password");
}

})