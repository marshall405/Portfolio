window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;
	const skills = {
		html: 85,
		css: 75,
		javascript: 52,
		commandline: 65
	};
	function getID(element) {
		return document.getElementById(element);
	}
	//javascript bar
	(function() {
		let innerJSBar = getID("innerJSBar");
		innerJSBar.style.width = "0";
		let increment = 0;
		let timer = setInterval(function() {
			if(increment >= skills.javascript) {
				clearInterval(timer);
			};
			innerJSBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();
	//html bar
	(function() {
		let innerHTMLBar = getID("innerHTMLBar");
		innerHTMLBar.style.width = "0";
		let increment = 0;
		let timer = setInterval(function() {
			if(increment >= skills.html) {
				clearInterval(timer);
			};
			innerHTMLBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();
	//css bar
	(function() {
		let innerCSSBar = getID("innerCSSBar");
		innerCSSBar.style.width = "0";
		let increment = 0;
		let timer = setInterval(function(){
			if(increment >= skills.css) {
				clearInterval(timer);
			};
			innerCSSBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();
	//command line bar
	(function() {
		let innerCLBar = getID("innerCLBar");
		innerCLBar.style.width = "0";
		let increment = 0;
		let timer = setInterval(function(){
			if(increment >= skills.commandline) {
				clearInterval(timer);
			};
			innerCLBar.style.width = increment + "%";
			increment += increase;
		}, time);
	})();

	// Set CSS for skill bars
	// #htmlSkill, #cssSkill, #clSkill, #jsSkill
	{
		let htmlSkill = document.getElementById('htmlSkill');
		let cssSkill = document.getElementById('cssSkill');
		let clSkill = document.getElementById('clSkill');
		let jsSkill = document.getElementById('jsSkill');


	}

};
