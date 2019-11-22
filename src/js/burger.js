import $ from "jquery"

open = false
$(".burger").on("click",(e)=>{
    if (open) {
        $(".b-links").removeClass("open")
        open = false
    } else {
        $(".b-links").addClass("open")
        open = true
    }
})