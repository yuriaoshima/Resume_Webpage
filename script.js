$(document).ready(function(){
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
	},6000);
  });
  //above 6000 might be too long
  
  //code for smooth scrolling when user clicks local links on navbar
  $("nav a").on("click", function(event) {
    //get the value of the hash/anchor (the part of the URL that starts with #)
    var myhash = this.hash;
    //check to see if the hash has a value, only scroll when there is an actual hash
    if (myhash != "") {
      //prevent the default anchor click behavior
      event.preventDefault();
      //use jQuery animate method for smooth scrolling by taking half a second for the scroll to occur. We use html, body and not just body due to browser inconsistencies
      $('html, body').animate(
        {scrollTop: $(myhash).offset().top}, 
        500,
        function() {
          //add the hash to the original URL (default click behavior)
          window.location.hash = myhash;
        }
      );
    }
  });
});