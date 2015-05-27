function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	var clickedTime; 
	var createdTime;
	var reactionTime;
	

	function makebox(){
		
		var shape = document.getElementById('box');
		
		var time = Math.random()*3000;

		setTimeout(function(){
			
			createdTime = Date.now();

			if(Math.random()>0.5){
				shape.style.borderRadius = '100px';
			}else{
				shape.style.borderRadius = '0';
			}

			shape.style.top = Math.random()*400+'px';

			shape.style.left= Math.random()*1200+'px';
			
			shape.style.backgroundColor=getRandomColor();

			shape.style.display='block';

		},time);
	}

	document.getElementById('box').onclick=function(){
		clickedTime = Date.now();
		reactionTime = (clickedTime - createdTime)/1000;
		document.getElementById("time").innerHTML = reactionTime;
		this.style.display='none';
		makebox();
	}	

	document.getElementById('start').onclick=makebox;
