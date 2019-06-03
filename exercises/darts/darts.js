export const solve = (x, y) => {
	let c = Math.sqrt(x*x + y*y);
	return 	(c <= 1) ? 10
		 : 	(c <= 5) ? 5
		 : 	(c <= 10) ? 1
		 : isNaN(c) ? null
		 : 0
}