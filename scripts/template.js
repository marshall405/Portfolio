const template = {
	message: 'Hello'
}




// Do not change below

{
	let domChildren = document.body.childNodes;
	console.log(domChildren);
	
	domChildren.forEach(function(item) {
		if(item.textContent.trim() === '{{ message }}'){
			item.innerHTML = template.message;
		}
	});
}