/** FEEDBACK: Great job! */
class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1,
      this.side2 = side2,
      this.side3 = side3,
      this.side4 = side4

  }
  getPerimeter() {
    const perimeter = this.side1 + this.side2 + this.side3 + this.side4
    return perimeter
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2)
  }
  getArea(side, side2) {
    side = this.side1
    side2 = this.side2
    const area = side * side2
    return area
  }
}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1)
  }
  /** FEEDBACK: getDiagonal should ideally be on the rectangle since you can get the diagonal of a rectangle! */
  getDiagonal() {
    const diagonal = super.getArea(this.side1, this.side1) * 2
    return Math.sqrt(diagonal)
  }
}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
