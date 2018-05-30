window.onload = function() {

	let mainDiv = document.getElementById('main');
	projects.forEach(function(item) {
		mainDiv.innerHTML += `
			<div class="projects">
				<h2> ${ item.name } </h2>
				<a href="${ item.url }"><img src="${ item.img }" alt="${ item.name }"></a>
				<p> ${ item.desc } </p>
			`
	});


	




























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











	{	// Testing (Keep at bottom)
		const template = {
			message: 'Marshall Slemp'
		}
		let domChildren = document.body.childNodes;
		console.log(domChildren);
		
		domChildren.forEach(function(item) {
			if(item.textContent.trim() === '{{ message }}'){
				item.innerHTML = template.message;
			}
		});
	}
}

