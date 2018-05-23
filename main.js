// version 2
window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;
	const skills = {
		html: {
			rating: 85,
			name: 'HTML',
			level: 'Advanced'
		},
		css: {
			rating: 75,
			name: 'CSS',
			level: 'Advanced'
		},
		javascript: {
			rating: 62,
			name: 'JavaScript',
			level: 'Intermediate'
		},
		commandline: {
			rating: 65,
			name: 'Command Line',
			level: 'Intermediate'
		},
		nodejs: {
			rating: 50,
			name: 'Node JS',
			level: 'Intermediate'
		},
		express: {
			rating: 34,
			name: 'Express',
			level: 'Intermediate'
		}
	};
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
		let skillRating = 	createElement('div');
		let skillLevel 	=	createElement('p');

		mainDiv.appendChild(outerDiv);

		outerDiv.appendChild(h4);
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(skillLevel);

		innerDiv.appendChild(skillBarDiv);
		innerDiv.appendChild(skillRating);

		h4.innerHTML = skill.name;
		skillLevel.innerHTML = skill.level;
		skillRating.innerHTML = skill.rating + '%';
		skillRating.setAttribute('class', 'hideSkillRating');

		innerDiv.setAttribute('class', 'skillBar');
		skillBarDiv.setAttribute('class', 'barSkill');

		growSkillBar(skill, skillBarDiv);
		skillRating.style.left = (skill.rating) + '%';
		skillBarDiv.addEventListener('mouseover', function(){
			skillRating.setAttribute('class', 'showSkillRating');
		});
		skillBarDiv.addEventListener('mouseleave', function() {
			skillRating.setAttribute('class', 'hideSkillRating');
		});
	}


	function createElement(element){
		return document.createElement(element);
	}
	function growSkillBar(skill, element){
		let increment = 0;
		let timer = setInterval(function() {
			if(increment >= skill.rating) {
				clearInterval(timer);
			};
			element.style.width = increment + "%";
			increment += increase;
		}, time);
	}




	// Education Completion
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













};