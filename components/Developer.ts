export class Developer {
  //СВОЙСТВА
  public country: string = "USA";
  protected v: boolean = true;
  private a: number = 1

  //Конструктор, начальная инициализация объекта
  constructor(private name: string, private salary: number) {}

  //Методы
  public getInfo() {
    console.log(`${this.name}/${this.salary}`);
  }

  //STATIC: Создаются на уровне класса а не объекта
  static retirementAge: number = 60;

  static calculateYears(age: number): number {
    return Developer.retirementAge - age;
  }

  //вычисляемые свойства, геттеры/сеттеры
}

// можно ли изменить свойства объекта