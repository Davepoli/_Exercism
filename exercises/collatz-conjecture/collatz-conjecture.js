export const steps = (n) => {
	if(n < 1) {throw new Error('Only positive numbers are allowed')}
	let output = 0
	while (n > 1) {
		n % 2 === 0 ? n = n / 2 : n = (n * 3) + 1
		output++
	}
	return output
}