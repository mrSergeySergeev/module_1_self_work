const elem = document.getElementById('number');

const func = () => {
	let sum = 0;
	let str = elem.value;
	let arr = str.split('');
  	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}
	let newElem = document.getElementById('result');
	newElem.innerHTML = sum;
}    

elem.addEventListener('blur', func);
