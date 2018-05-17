window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;
	const skills = {
		'html': 85,
		'css': 75,
		'javascript': 52,
		'commandline': 65
	};
	function getID(element) {
		return document.getElementById(element);
	}
	function skillBar(skill, element){
		let bar = getID(element);
		let increment = 0;
		let timer = setInterval(function() {
			if(increment >= skills[skill]) {
				clearInterval(timer);
			};
			bar.style.width = increment + "%";
			increment += increase;
		}, time);
	}
	skillBar('html', 'innerHTMLBar');
	skillBar('javascript', 'innerJSBar');
	skillBar('css', 'innerCSSBar');
	skillBar('commandline', 'innerCLBar');


	// Set CSS left position for skill bar percentages
	// #htmlSkill, #cssSkill, #clSkill, #jsSkill
	function setCss(skill, element) {
		let ele = getID(element);
		ele.innerHTML = skills[skill] + '%';
		ele.style.left = skills[skill] + '%';
	}
	setCss('html', 'htmlSkill');
	setCss('css', 'cssSkill');
	setCss('commandline', 'clSkill');
	setCss('javascript' ,'jsSkill');
};