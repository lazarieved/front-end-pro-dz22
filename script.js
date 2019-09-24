function getPlus(input){

	return input.classList.contains('plus');
};

function getMinus(input){

	return input.classList.contains('minus');
};

function cLicker(event){

	var target = event.target;
	var count = target.parentElement.getElementsByClassName('counter')[0];
	
	if (getPlus(target)){
		
		count.innerText++;
	};

	if (getMinus(target)){

		count.innerText--;
	};
};

document.getElementById('mainBlock').addEventListener('click', cLicker);