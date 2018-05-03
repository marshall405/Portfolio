window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;
	//javascript bar
	(function() {
		let innerJSBar = document.getElementById("innerJSBar");
		innerJSBar.style.width = "0";
		var increment = 0;
		let timer = setInterval(function() {
			if(increment >= 52) {
				clearInterval(timer);
			};
			innerJSBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();
	//html bar
	(function() {
		let innerHTMLBar = document.getElementById("innerHTMLBar");
		innerHTMLBar.style.width = "0";
		var increment = 0;
		let timer = setInterval(function() {
			if(increment >= 85) {
				clearInterval(timer);
			};
			innerHTMLBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();
	//css bar
	(function() {
		let innerCSSBar = document.getElementById("innerCSSBar");
		innerCSSBar.style.width = "0";
		var increment = 0;
		let timer = setInterval(function(){
			if(increment >= 75) {
				clearInterval(timer);
			};
			innerCSSBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();







};
