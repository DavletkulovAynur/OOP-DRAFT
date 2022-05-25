class Developer {
  //СВОЙСТВА (Data properties)
  public country: string = "USA";
  protected smartProgrammer: boolean = true;
  private minExperienceYear: number = 3;

  //Accessor properties, вычисляемые свойства, геттеры/сеттеры
  get experienceYear (){
    return this.minExperienceYear
  }
  
  set experienceYear (value) {
    this.minExperienceYear = 5
  }

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
}

const developer = new Developer("Tomi", 1000);
