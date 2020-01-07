//waits until the page is loaded first
$(document).ready(function() {
   
   //paragraphs turn red when clicked on 
   $("p").click(function(){
       $("p").css("color", "red");
   });

   //h2 elements turn lightblue on hover
   $("h2").hover(function(){
       $("h2").css("background-color", "lightblue");
   });

 /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '2em');
    });

    $("#hr_mysql").hover(function(){
        $("#hr_mysql").css('font-size', '2em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '2em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '2em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '2em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '2em');
        $("#hr_html").css('font-size', '1em');
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });
});
