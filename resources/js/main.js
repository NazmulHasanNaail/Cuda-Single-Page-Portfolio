$(document).ready(function() {
    
    
    
    //---------stiky-menu--------//
    $(".js-services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
           } else{
           $("nav").removeClass("sticky");
           }
    });
    
    
    //---mixitup(protfolio-section)--//
    var mixer = mixitup('.container');
});

function openNav(){
    document.getElementById("mobile-nav").style.width = "100%";
}
function closeNav(){
    document.getElementById("mobile-nav").style.width = "0%";
}