import $ from "jquery"

$(".btn.login").on("click",(e)=>{
    $(".modal-window").addClass("open")
})

$(".modal-window").on("click",(e)=>{
    if (e.target.className.split(" ")[0]=="modal-window") {
        $(".modal-window").removeClass("open")
    }
})

$("#btn-form").on("click",(e)=>{
    fetch("https://httpbin.org/status/200")
    .then((response)=>{
        $(".response-msg").text("Success").css({"color":"green"})
    })
    .catch((error)=>{
        $(".response-msg").text("Error").css({"color":"red"})
    });
})