function down_bg(){
    var hidden = document.getElementsByClassName("hiden");
    for(var i = hidden.length-1; i > -1; i--){
        hidden[i].classList.remove("hiden");
    }
    document.getElementById("content").scrollIntoView({behavior: "smooth"});
}