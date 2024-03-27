class DontDoThis {
  name: string; //properties for a class are called members. We need them to exist on the class AND also need to include a constructor. By commenting out either or, TS complains - it's not redundant!
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    //constructor accepts members as parameters because they could be passed when the class is instantianted
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

//To fix the above "issue" and make our code seem less redundant, we can use access/visibility modifiers!

class DoThis {
  secondaryLang!: string; //Adding a property that we don't wan't to add right away when we instantiate a DoThis class instance. We can do this with an assertion (!). This doesn't come up often?

  constructor(
    public readonly name: string, //once name is assigned, it can't be changed when we add readonly modified
    public music: string,
    private age: number, //The private modifier specifies that the member is visible only within the class.
    protected primaryLang: string, //The protected modifier specifies that the member is visible only to the class and its derived classes.
    protected tertiaryLang: string = 'TypeScript' //default value, constructors are alot like passing arguments to functions
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.primaryLang = primaryLang;
  }

  public getAge() {
    return `Hello I'm ${this.age}`; //We can access age here as it's still inside of the class
  }
}

const Andy = new DoThis('Andy', 'Techno', 31, 'JavaScript'); //Intentionally not passing tertiaryLang as we gave it a default value above
console.log(Andy.getAge()); //this is fine because the method is public
// console.log(Andy.age); //TS compiler complains because age is private - Note: After TS compiles this to JS, it's still considered legal JS, so we will see this value in the log! This however can be changed inside tsconfig so that it doesn't compile at all!

///////////////////////////////////////////////

class WebDev extends DoThis {
  constructor(
    public computer: string, //adding new property for sub class
    name: string, //we need to bring in the properties from the DoThis class when extending it
    music: string,
    age: number,
    primaryLang: string
  ) {
    super(name, music, age, primaryLang); //when we extend a class, we need to call super(). This will receive everything we are bringing from the DoThis class
    this.computer = computer; //any assignments must be after the call to super()
  }

  public getTertiaryLang() {
    return `I write ${this.tertiaryLang}`; //tertiaryLang is protected inside DoThis, but we can access it within the WebDev sub class
  }
}

const Maddy = new WebDev('Mac', 'Maddy', 'Noah Kahan', 29, 'JavaScript');
console.log(Maddy.getTertiaryLang());

///////////////////////////////////////////////

interface Gamer {
  favoriteGame: string;
  favoriteGenre: string;
  name: string;
  play(action: string): string; //don't need to add method inside of constructor
  type: string;
}

class Chad implements Gamer {
  constructor(
    public favoriteGame: string,
    public favoriteGenre: string,
    public name: string,
    public type: string
  ) {
    this.favoriteGame = favoriteGame;
    this.favoriteGenre = favoriteGenre;
    this.name = name;
    this.type = type;
  }

  play(action: string) {
    return `${this.name} ${action} ${this.favoriteGame} on ${this.type}`;
  }
}

const Giga = new Chad('Helldivers 2', 'MMO', 'Joe', 'PC');
console.log(Giga.play('plays'));

///////////////////////////////////////////////

class Peeps {
  static count: number = 0; //this is being tracked within the class itself, not inside any specific instance

  static getCount(): number {
    return Peeps.count; //not using `this` keyword here because count doesn't apply to any instantiation of the class, it applies to the class directly itself
  }

  public id: number; //Adding a property that we don't want to add right away when instantiating.

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //++ on left ensures count increments from 1. ++ on right would mean first id is 0.
  }
}

const Johann = new Peeps('John'); //id:1
const Jimbo = new Peeps('Jimbo'); //id:2
const Jackie = new Peeps('Jackie'); //id:3

console.log(Peeps.count); //3

///////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    //using get keyword from JS
    return this.dataState;
  }

  public set data(value: string[]) {
    //needs to be an array of strings
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      // return this.dataState = value; //setters cannot return a value
      this.dataState = value;
      return;
    } else {
      throw new Error('Param is not an array of strings');
    }
  }
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zeppelin']; //set
console.log(MyBands.data); //get
MyBands.data = [...MyBands.data, 'ZZ Top']; //set again
console.log(MyBands.data); //get
// MyBands.data = 'Van Halen'; //string type not assignable to string array
