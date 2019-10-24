

function tick() {
	var myAudio=document.getElementById("myAudio");
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	var day = date.getDate();
	   
   if (minutes>=57){
		if (myAudio.paused) myAudio.play();
   }
   
   var secAngle = seconds * 6;
   var minAngle = minutes * 6 ;
   var hourAngle = hours * 30 ;
   
   
   $('.sec-hand').css('transform', 'rotate(' + secAngle + 'deg)');
   $('.min-hand').css('transform', 'rotate(' + minAngle + 'deg)');
   $('.hour-hand').css('transform', 'rotate(' + hourAngle + 'deg)');
   $('.date').text(day);
}



setInterval(tick, 100);
