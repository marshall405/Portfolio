// version 2
window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;
	const mainDiv = document.getElementById('skills');
	(function(){
		for (var skill in skills){
			buildSkillBar(skills[skill]);
		}
	})();

	function buildSkillBar(skill) {
		let outerDiv 	= 	createElement('div');
		let h4 			= 	createElement('h4');
		let innerDiv 	= 	createElement('div');
		let skillBarDiv = 	createElement('div');
		let skillRating = 	createElement('p');
		let skillLevel 	=	createElement('p');

		mainDiv.appendChild(outerDiv);

		outerDiv.appendChild(h4);
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(skillLevel);

		innerDiv.appendChild(skillBarDiv);
		skillBarDiv.appendChild(skillRating);

		h4.innerHTML = skill.name;
		skillLevel.innerHTML = skill.level;
		skillRating.innerHTML = skill.rating + '%';
		// skillRating.setAttribute('class', 'hideSkillRating');

		innerDiv.setAttribute('class', 'skillBar');
		skillBarDiv.setAttribute('class', 'barSkill');

		growSkillBar(skill, skillBarDiv, skillRating);
		// skillRating.style.left = (skill.rating) + '%';
		// skillBarDiv.addEventListener('mouseover', function(){
		// 	skillRating.setAttribute('class', 'showSkillRating');
		// });
		// skillBarDiv.addEventListener('mouseleave', function() {
		// 	skillRating.setAttribute('class', 'hideSkillRating');
		// });
	}


	function createElement(element){
		return document.createElement(element);
	}
	function growSkillBar(skill, element, skillRating){
		let increment = 0;
		let timer = setInterval(function() {
			if(increment >= skill.rating) {
				clearInterval(timer);
			};
			element.style.width = increment + "%";
			skillRating.innerHTML = increment + '%';
			increment += increase;
		}, time);
	}




	// Education Completion Count Up to 100%
	{
		let li = document.querySelectorAll('#completion ul li');
		li.forEach(function(item) {
			countUp(item);
		});
		function countUp(item) {
			let count = 0;
			let interval = setInterval(function() {
				if(count >= 100){
					clearInterval(interval);
				}
				item.innerHTML = count + '%';
				count += 2;
			}, 30);
		}
	}

	// Typing Hello animation
	(function sayHello(message) {
		let hello = document.getElementById('hello');
		let greeting = message.split('');
		let counter = 0;
		let interval = setInterval(function() {
			if(counter >= greeting.length - 1){
				clearInterval(interval);
				showMessage();
			}
			hello.innerHTML += greeting[counter];
			counter++;
		}, 150);
	})('Hello!');
	
		// Objective type animation
	function showMessage(){
		let objective = document.getElementById('brief');
		let step = 0;
		let interval = setInterval(function() {
			if(step >= 1){
				clearInterval(interval);
			}
			brief.style.opacity = step;
			step += .05;
		},100);
	} 	// End Ojective type animation
	{
		let header = document.getElementById('header');
		window.addEventListener('scroll', function(){
			if(window.scrollY > 0){
				header.style.boxShadow = '1px 0px 10px 1px #2355a0';
				header.style.background = 'linear-gradient(to right, #ffffff, #e5e5e5)';
			} else {
				header.style.boxShadow = 'none';
				header.style.background = 'none';
			}
		});
	}

	// Circle Loader
	{
		
	}





};