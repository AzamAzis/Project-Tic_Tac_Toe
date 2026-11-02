function Something() {
	let i = 0;

	const setSomething = () => {
		i = 1;
	};

	const getSomething = () => {
		console.log(i);
	};

	return {setSomething, getSomething};
}

function doSomething() {
	const something = Something();something.getSomething();
	something.setSomething();
	

}

doSomething();
doSomething();