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
	})('Hello, my name is Marshall');
	
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
	}

	{	// Add Education
		let educationDiv = document.getElementById('education');
		education.forEach(function(item) {
			
			let nameDiv = createElement('div');
			let name 	= createElement('h3');
		
			educationDiv.appendChild(nameDiv);
			nameDiv.appendChild(name);
			nameDiv.setAttribute('class', 'flex-container');
			name.innerHTML = item.name;

			if(item.courses) {
				let showCompletion = createElement('h3');
				showCompletion.innerHTML = 'Completion';
				nameDiv.appendChild(showCompletion);
				item.courses.forEach(function(item) {
					let flexDiv = createElement('div');
					let courseName = createElement('p');
					let completion = createElement('p');
					courseName.innerHTML = item.courseName;
					completion.innerHTML = item.completion + '%';
					flexDiv.appendChild(courseName);
					flexDiv.appendChild(completion);
					educationDiv.appendChild(flexDiv);
					flexDiv.setAttribute('class', 'flex-container');
				});
			}
			if(item.degree) {
				let p = createElement('p');
				educationDiv.appendChild(p);
				p.innerHTML = '<b>Degree:</b> ' + item.degree;
			}
			if(item.major) {
				let p = createElement('p');
				educationDiv.appendChild(p);
				p.innerHTML = '<b>Major:</b> ' + item.major;
			}
			if(item.graduation) {
				let p = createElement('p');
				educationDiv.appendChild(p);
				p.innerHTML = '<b>Graduation:</b> ' + item.graduation;
			}
		});
	} // End Education 

	{	// Add Work
		let workDiv = document.getElementById('workExperience');
		work.forEach(function(item) {
			let newDiv = createElement('div'); //hold each job
			newDiv.innerHTML += `
				<div class="flex-container-space-between">
					<h3> ${item.name} </h3>
					<p> ${item.startDate} - ${item.endDate || 'Current'} </p>
				</div>
				<p> ${item.location} </p>
				<h4> ${item.jobTitle} </h4>`;
			let newUL = createElement('ul');
			item.jobDuties.forEach(function(item){
				newUL.innerHTML += `
					<li> ${item} </li> `
			});
			newDiv.appendChild(newUL);
			workDiv.appendChild(newDiv);
		});

	}
	
	{	// Make anything that is 100% a count to 100
		let oneHundred = document.querySelectorAll('p');
		oneHundred.forEach(function(item) {
			if(item.textContent === '100%'){
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



};