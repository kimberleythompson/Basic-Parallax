$(document).ready(function() {
    
    /*
    This hides the image that is shown later on scroll. Might be better to set 
    up a css class for this and set the display: none; property. This might 
    avoid seeing the content briefly before our script file loads and hides it. 
    */
    $("#theImage").hide();     
    
    /*
    Function that gets called every time the page is scrolled in either direction. 
    We've set up a variable to store the scroll position. You can use conditional 
    statements to fire off events based on that number. Here we're showing an image 
    if were over 250 and hiding it again if the number is lower than that. 
    */
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition > 350) {
            $("#theImage").fadeIn();
        }
        
        if(scrollPosition < 350) {
            $("#theImage").fadeOut();
        }
        
    });
    
});
