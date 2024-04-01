//-- Link to study in-depth classes
// Basic: https://www.typescriptlang.org/docs/handbook/2/classes.html
// Advance: https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility

enum Category {
  BASIC_CLASS,
  BASIC_CLASS_AND_OTHERS,
  EXTENDS_CLASS,
  IMPLEMENT_CLASS,
  ABSTRACT_CLASS,
  TEMPLATE_CLASS_BASIC,
  TEMPLATE_CLASS_ADVANCE,
}

const categoryIntroMap: { [key in Category]: string } = {
  [Category.BASIC_CLASS]: "#1. Basic Class",
  [Category.BASIC_CLASS_AND_OTHERS]: "#2. Basic Class and Others",
  [Category.EXTENDS_CLASS]: "#3. Extends Class",
  [Category.IMPLEMENT_CLASS]: "#4. Implement Class",
  [Category.ABSTRACT_CLASS]: "#5. Abstract Class",
  [Category.TEMPLATE_CLASS_BASIC]: "#6. Template Class Basic",
  [Category.TEMPLATE_CLASS_ADVANCE]: "#7. Template Class Advance",
};

const printStart = (category: Category) => {
  console.log("/*****************************************");
  console.log(categoryIntroMap[category]);
  console.log("*****************************************/");
};

const printEnd = () => console.log("");

// #1 Basic Class
printStart(Category.BASIC_CLASS);
{
  class Point1 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    get getValue() {
      return [this.x, this.y];
    }

    set setValue(value: number[]) {
      const [x, y] = value;
      this.x = x;
      this.y = y;
    }

    print() {
      console.log(this.x, ", ", this.y);
    }
  }

  class Point2 {
    constructor(public x: number, public y: number) {}

    get getValue() {
      return [this.x, this.y];
    }

    set setValue(value: number[]) {
      const [x, y] = value;
      this.x = x;
      this.y = y;
    }

    print() {
      console.log(this.x, ", ", this.y);
    }
  }

  const p1: Point1 = new Point1(1, 2);
  const p2: Point2 = new Point2(10, 20);
  p1.print();
  p2.print();
  p1.setValue = [2, 1];
  p2.setValue = [20, 10];
  p1.print();
  p2.print();
}
printEnd();

// #2 Basic Class with ctor + get + set
printStart(Category.BASIC_CLASS_AND_OTHERS);
{
  class Point3 {
    public x: number;
    public y: number;
    constructor(vec2: number[]) {
      [this.x, this.y] = vec2;
    }

    get vec2() {
      return [this.x, this.y];
    }

    set vec2(vec2: number[]) {
      [this.x, this.y] = vec2;
    }

    print() {
      console.log([this.x, this.y]);
    }
  }

  const p3: Point3 = new Point3([1, 2]);
  p3.print();
  p3.vec2 = [2, 1];
  p3.print();
}
printEnd();

// #3 Extends Class
printStart(Category.EXTENDS_CLASS);
{
  class Point4_Base {
    constructor(public x: number, public y: number) {}

    get value() {
      return [this.x, this.y];
    }

    set value([x, y]: number[]) {
      this.x = x;
      this.y = y;
    }

    print = () => console.log(this.x, ", ", this.y);
  }

  class Point4 extends Point4_Base {
    constructor(x: number, y: number, public z: number) {
      super(x, y);
    }

    get value() {
      return [this.x, this.y, this.z];
    }

    set value([x, y, z]: number[]) {
      [this.x, this.y] = [x, y];
      this.z = z;
    }

    print = () => console.log(this.x, ", ", this.y, ", ", this.z);
  }

  const p4: Point4 = new Point4(1, 2, 3);
  p4.print();
  p4.value = [3, 2, 1];
  p4.print();
}
printEnd();

// #4 Imeplement Class
printStart(Category.IMPLEMENT_CLASS);
{
  interface IPoint4a {
    x: number;
    printX(): void;
  }
  interface IPoint4b {
    y: number;
    printY(): void;
  }

  class Point4 implements IPoint4a, IPoint4b {
    x: number;
    y: number;

    constructor(vec2: number[]) {
      [this.x, this.y] = vec2;
    }

    get vec2() {
      return [this.x, this.y];
    }

    set vec2(vec2: number[]) {
      [this.x, this.y] = vec2;
    }

    printX(): void {
      console.log(this.x);
    }
    printY(): void {
      console.log(this.y);
    }

    print(): void {
      this.printX();
      this.printY();
    }
  }
  const p4: Point4 = new Point4([1, 2]);
  p4.print();
  p4.vec2 = [2, 1];
  p4.print();
}
printEnd();

// #5 Abstract Class
printStart(Category.ABSTRACT_CLASS);
{
  abstract class Point5_Base {
    abstract z: number;
    abstract get getZ(): number;
  }

  class Point5 extends Point5_Base {
    x: number;
    y: number;
    z: number;

    constructor(vec3: number[]) {
      super();
      [this.x, this.y, this.z] = vec3;
    }

    get getZ(): number {
      return this.z;
    }

    set setZ(z: number) {
      this.z = z;
    }

    get vec3() {
      return [this.x, this.y, this.z];
    }

    set vec3(vec3: number[]) {
      [this.x, this.y, this.z] = vec3;
    }

    print() {
      console.log([this.x, this.y, this.z]);
    }
  }

  const p5 = new Point5([1, 2, 3]);
  console.log(p5.getZ);
  p5.vec3 = [3, 2, 1];
  p5.print();
}
printEnd();

// #6 Template Class (Basic)
printStart(Category.TEMPLATE_CLASS_BASIC);
{
  class Point6<T> {
    x: T;
    y: T;
    constructor(vec2: T[]) {
      [this.x, this.y] = vec2;
    }

    get vec2() {
      return [this.x, this.y];
    }

    set vec2(vec2: T[]) {
      [this.x, this.y] = vec2;
    }

    print() {
      console.log([this.x, this.y]);
    }
  }

  const p6: Point6<string> = new Point6<string>(["1", "2"]);
  p6.print();
  p6.vec2 = ["2", "1"];
  p6.print();
}
printEnd();

// #7 Template Class (Advance) w/ Iterator and Iterable
printStart(Category.TEMPLATE_CLASS_ADVANCE);
{
  class Point7<T> implements Iterable<T> {
    private data: T[];

    constructor(initialData: T[]) {
      this.data = initialData;
    }

    *[Symbol.iterator](): Iterator<T> {
      for (const item of this.data) {
        yield item;
      }
    }

    get values() {
      return this.data;
    }

    set values(newValues: T[]) {
      this.data = newValues;
    }

    print() {
      console.log(this.data?.toString());
    }
  }

  const p7: Point7<number> = new Point7([1, 2, 3]);
  p7.print();
  p7.values = [3, 2, 1];
  p7.print();
}
printEnd();
