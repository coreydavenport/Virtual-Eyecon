//Problem: Make application that simulates Ghost Eyecon effect
//Solution: Treat Eyecon images as buttons that hide when clicked, and are replaced by the next Eyecon image

// 1. On click
	// 1.1 White overlay fadeout
	// 1.2 Remove current Eyecon image
	// 1.3 Display next Eyecon image
		

//Declare an image array same as calling new Array();
    var img = []
    img[0] = "http://pre12.deviantart.net/ffeb/th/pre/f/2015/232/a/0/kamen_rider_ghost_ore_eyecon_letter_by_raidenzein-d96iu1b.png";
    img[1] = "http://pre10.deviantart.net/8de8/th/pre/f/2015/232/4/9/kamen_rider_ghost_ore_eyecon_form_by_raidenzein-d96iu1o.png";
    img[2] = "http://pre08.deviantart.net/22d5/th/pre/f/2015/232/3/d/kamen_rider_ghost_ore_eyecon_attack_by_raidenzein-d96iu2f.png";
    img[3] = "http://pre08.deviantart.net/d7df/th/pre/f/2015/232/3/0/kamen_rider_ghost_eyecon_by_raidenzein-d96iu0w.png";

    //Select all elements on the page with the name attribute equal to eyecon
    var images = document.querySelectorAll('[name=eyecon]');
    var $overlay = $('<div id="overlay"></div>');
    var eyeconSound = document.getElementById("eyeconSound");
    $("body").append($overlay);
    //For each image bind the click event
    for(var i=0; i < images.length; i++)
    {
      var image = images[i];
      //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
      image.addEventListener('click', imageClicked(), false);
    }
    $(".eyeconImg").click(function (){
    	

    	$overlay.show().fadeOut(750);
    	$('#eyeconSound').get(0).play();
    });
    
    	
    function imageClicked()
    {

      //Use a closure to wrap the counter variable
      //so each image element has their own unique counter
      var counter = 0;
      return function(event)
      {

        //Increment counter
        counter++;
        //The context of "this" is the image element
        //Use a modulus
        this.src = img[counter % img.length];

      }
    }