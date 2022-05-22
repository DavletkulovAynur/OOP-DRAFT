// public, private, protected

//TODO: Конструкторы выполняют начальную инициализацию объекта
export class Encapsulation {
  //свойства 
  public root: number = 1
  private a: string = 'hello'
  protected b: boolean = false
  constructor() {}

  //Методы
  getNumber() {
    console.log('getNumber')
  }
}

