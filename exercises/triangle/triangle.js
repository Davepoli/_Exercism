export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c].sort((a, b) => a - b);
  }

  kind() {
    const [a, b, c] = this.sides;

    if (a <= 0 || a + b < c) throw new Error('Illegal triangle');
    if (a === b && b === c)  return 'equilateral';
    if (a === b || b === c)  return 'isosceles';
    return 'scalene';
  }
}