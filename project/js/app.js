
    let screenHeight=$(window).height();
    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition > screenHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });

$(".navbar-toggler").click(function(){
    let ans=$(".navbar-collapse").hasClass("show");
    console.log(ans);
    if(ans){
        $(".menu-icon").removeClass("fa-close");
        $(".menu-icon").addClass("fa-bars");
    }else{
        $(".menu-icon").removeClass("fa-bars");
        $(".menu-icon").addClass("fa-close");

    }
});
function setActive(current){
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass("current-section");
}
function navScroll(){
    let currentSection=$("section[id]");
    currentSection.waypoint(function(direction){
        if(direction=='down'){
            console.log($(this.element).attr('id'));
            setActive($(this.element).attr('id'));
        }
    },{
        offset:"150px"
    });
    currentSection.waypoint(function(direction){
        if(direction=='up'){
            console.log($(this.element).attr('id'));
            setActive($(this.element).attr('id'));
        }
    },{
        offset:"150px"
    });
}
navScroll();
// let home = $('#home').waypoint(function(){
//     console.log("I am home");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#home']").addClass("current-section");
// },{
//     offset:"120%"
// });

// let about = $('#about').waypoint(function(){
//     console.log("I am about");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#about']").addClass("current-section");
// },{
//     offset:"25%"
// });

// let services = $('#services').waypoint(function(){
//     console.log("I am services");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#services']").addClass("current-section");
// },{
//     offset:"25%"
// });

// let pricing = $('#pricing').waypoint(function(){
//     console.log("I am pricing");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#pricing']").addClass("current-section");
// },{
//     offset:"25%"
// });

// let contact = $('#contact').waypoint(function(){
//     console.log("I am contact");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#contact']").addClass("current-section");
// },{
//     offset:"25%"
// });
$(window).on("load",function(){
    $(".loader-container").fadeOut(500,function(){
        $(this).remove();
    });
});