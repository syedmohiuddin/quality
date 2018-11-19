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