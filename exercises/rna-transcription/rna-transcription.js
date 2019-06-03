export const toRna = (dna) => {
	const obj = {
		G: 'C',
		C: 'G',
		T: 'A',
		A: 'U'
	}
	return dna.replace(/[GCTA]/gi, d => {
		return obj[d];
	})
}