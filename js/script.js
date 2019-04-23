// waypoint
$(function(){
    
    $('.skill').waypoint(function(){
        
        $('.progress-bar').each(function(){
        
            $(this).animate(
            
                {width: $(this).attr("aria-valuenow") + "%"
                }, 1000);
        
        });
        this.destroy();
    },{
        offset: 'bottom-in-view'
      }); 
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

//isotope --- load img done ->  function in
$(window).on('load', function(){
    
    // init Isotope
    $('#isotope-container').isotope({});
    
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function(){
        
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue 
        });
        // button active
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
//Popup img
$(function(){
    
    $('.experience-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        },
    });
    
})
//Nav
$(function(){
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 50){
            //Show white nav
            $('nav').addClass('white-nav-top');
            // Show back to top button
            $("#back-to-top").fadeIn();
        }
        else{
            //Hide white nav
            $('nav').removeClass('white-nav-top');
            $("#back-to-top").fadeOut();
        }
        
    });
    
});
//mobile menu
$(function(){
    //show mobile nav
    $('#mobile-nav-open-btn').click(function(){
        $('#mobile-nav').css('height', '100%');
    });
    
    $('#mobile-nav-close-btn, #mobile-nav a').click(function(){
        $('#mobile-nav').css('height', '0%');
    });
})