//waits until the page is loaded first
$(document).ready(function() {
   
   //paragraphs turn red when clicked on 
   $("p").click(function(){
       $("p").css("color", "red");
   });
    
});