//using jquery for this
$( document ).ready(function() {
    //console.log( "ready!" );

    $(document).mousemove(function(e){

        setTimeout(function(){
        	//just to keep track of the coordenates
        	//$("span").text(e.pageX + ", " + e.pageY);
        	//substract the 20px we have set on the transform css property as an offset
        	var newvalueX = (e.pageX / 80)-20;
        	var newvalueY =  (e.pageY / 80)-20;
        	//using the translate3d will force hardware acceleration (in some devices) so it will run smoothly
        	document.getElementById("headerImg").style.transform = "translate3d("+newvalueX+"px," + newvalueY +"px,0px)";
        }, 100);
    });



});