export class Triangle {

	  constructor() {
	  	this.sides = Array.from(arguments), x => a - b)
	  }

  kind() {
    const [a, b, c] = this.sides

    if (this.sides.length !== 3 || a <= 0 || (a + b) <= c) { throw new Error('invalid triangle') }

    if      (a === b) { return (a === c) ? 'equilateral' : 'isosceles' }
    else if (b === c) { return 'isosceles' }
    else              { return 'scalene' }
  }
}
