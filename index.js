$("button").on("click", function(){
    
let username = document.getElementById("username").value;
let password = document.getElementById("pass").value;

if ((username || password) == ""){
    $("#result").css("color","red").text("Please fill all fields !!")
}
else if (username == "admin" && password == "12345"){
    $("#result").css("color","green").text("Login Successful")
    window.location.href = "home.html";
}

else {
    $("#result").css("color","red").text("Invalid Credentials")

}

$("input").val("")

})

   $("#show_chBox").on("click",function(){
    if ($("#show_chBox").prop("checked")){
     $("#pass").attr("type","text")
    }
    else {
        $("#pass").attr("type","password") 
    }
  
   }) 
