export const validate = (input) => {
	const nums = input.toString().split('')
	const armstrong = nums.reduce((acc, cur) => acc + Math.pow(cur, nums.length), 0);
	return armstrong === input;
}