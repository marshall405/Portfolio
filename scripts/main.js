// version 1
window.onload = function() {
	//settings
	const increase = .5;
	const time = 10;

	const mainDiv = document.getElementById('skills');
	function createElement(element){
		return document.createElement(element);
	}

	(function(){
		for (var skill in skills){
			buildSkillBar(skills[skill]);
		}
	})();

	function buildSkillBar(skill) {
		const outerDiv 	= 	createElement('div');
		const h4 			= 	createElement('h4');
		const innerDiv 	= 	createElement('div');
		const skillBarDiv = 	createElement('div');
		const skillRating = 	createElement('p');
		const skillLevel 	=	createElement('p');

		mainDiv.appendChild(outerDiv);

		outerDiv.appendChild(h4);
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(skillLevel);

		innerDiv.appendChild(skillBarDiv);
		skillBarDiv.appendChild(skillRating);

		h4.innerHTML = skill.name;
		skillLevel.innerHTML = skill.level;
		skillRating.innerHTML = skill.rating + '%';

		innerDiv.setAttribute('class', 'skillBar');
		skillBarDiv.setAttribute('class', 'barSkill');
		growSkillBar(skill, skillBarDiv, skillRating);
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
		}, 100);
	})('Hello');
	

	// Objective slowly appear
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
	} 	// End Ojective slowly appear

	{	//Add boxShadow to header on scroll
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
	}	// End boxShadow

	{	// Add Education
		let educationDiv = document.getElementById('education');
		education.forEach(function(item) {
			educationDiv.innerHTML += `
				<div class="flex-container">
					<h3> ${ item.name } </h3>
					<h3> ${ item.courses ? 'Completion' : "" } </h3>
				</div>`;

			if(item.courses) {
				item.courses.forEach(function(item){
					educationDiv.innerHTML += `
						<div class="flex-container">
							<p> ${ item.courseName } </p>
							<p> ${ item.completion }% </p>
						</div>`
				});
			}
			if(item.degree) {
				educationDiv.innerHTML += `<p><b>Degree:</b> ${ item.degree } </p>`;
			}
			if(item.major) {
				educationDiv.innerHTML += `<p><b>Major:</b> ${ item.major } </p>`;
			}
			if(item.graduation) {
				educationDiv.innerHTML += `<p><b>Graduation:</b> ${ item.graduation } </p>`;
			}
		 });
	} // End Education 

	{	// Add Work
		let workDiv = document.getElementById('workExperience');
		work.forEach(function(item) {
			workDiv.innerHTML += `
				<div class="flex-container-space-between">
					<h3> ${ item.name } </h3>
					<p> ${ item.startDate } - ${ item.endDate || 'Current' } </p>
				</div>
				<p> ${ item.location } </p>
				<h4> ${ item.jobTitle } </h4>`;
			let newUL = createElement('ul');
			item.jobDuties.forEach(function(item){
				newUL.innerHTML += `
					<li> ${ item } </li> `
			});
			workDiv.appendChild(newUL);
		});
	}	// End Work
	
	{	// Make anything that is 100% a count to 100
		let oneHundred = document.querySelectorAll('p');
		oneHundred.forEach(function(item) {
			if(item.textContent === ' 100% '){
				countUp(item);
			}
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
	}	// End count up to 100

	// {	// Hamburger
	// 	let burger = document.getElementById('hamburger');
	// 	let menu = document.getElementById('contactInfo');
	// 	burger.addEventListener('click', function() {
	// 		if(menu.style.display === "none"){
	// 			menu.style.display = "block";
	// 		} else {
	// 			menu.style.display = "none";
	// 		}
	// 	});



	// }

	{	// Github Icon hover, change img
		let image = document.getElementById('github');

		image.onmouseenter = function(){
			image.setAttribute('src', 'pics/Octocat.png');
		}
		image.onmouseleave = function() {
			image.setAttribute('src', 'pics/github-512.png');
		}

	}


	
	















};