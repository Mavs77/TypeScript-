let myName: string = 'Bob';

let numberOfWheels: number = 4;

let isStudent: boolean = false;

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let ages: number[] = [31, 33, 61, 56];

let person1: Person = {
  name: 'Laurent',
  age: 31,
  isStudent: true,
};

let person2: Person = {
  name: 'Mike',
  age: 33,
  isStudent: true,
};

let people: Person[] = [person1, person2];

console.log(people);
