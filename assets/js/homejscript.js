$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

// 	for (var i = 0; i < 1; i++) {
// 		next = next.next();
// 		if (!next.length) {
// 			next = $(this).siblings(':first');
// 		}

// 		next.children(':first-child').clone().appendTo($(this));
// 	}
});

function faq(type) {
 if(type == 'faq'){
    if(!$(".faq").hasClass("active-link")) {
        $(".faq").addClass("active-link");
    }  
    $(".policies").removeClass("active-link");
     $("#menu1").show();
     $("#menu2").hide();
 } else {
      $("#menu1").hide();
     $("#menu2").css('display', 'block');
     
     if(!$(".policies").hasClass("active-link")) {
            $(".policies").addClass("active-link");
        }  
    $(".faq").removeClass("active-link");     
 }
    
}


$(document).scroll(function(event) {
    var height = $("#row-href-topsection").position().top - ($("#row-href-topsection").height() + $("#siteFooter").height()) - $(window).height();
    if($(window).scrollTop() < 250) {
        $("#products-left-menu").css({'position': '', 'top': 'unset', 'bottom' : ''}); 
    } else if($(window).scrollTop() > height) {
        console.log($(window).scrollTop(), $("#row-href-topsection").position().top)
        $("#products-left-menu").css({'position': 'fixed', 'top': 'unset', 'bottom' : ($(window).height() - ($("#row-href-topsection").height() + $("#siteFooter").height()))+ 'px'}); 
    } else if($(window).scrollTop() >= 250) {
     $("#products-left-menu").css({'position': 'fixed', 'top': '120px', 'bottom' : ''});   
    }  
    console.log($("#row-href-topsection").position().top, height, $(window).height())
});

$("li.dropdown1").on('click', function(e){
  $("ul.dropdown-menu").toggle();
});

