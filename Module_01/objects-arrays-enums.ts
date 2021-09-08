
//Note enum can mix and set diff values
//enum thing {ZZZZ = 'string', FFFFF=10, }
enum ROLES {ADMIN,USER,READONLY}

//total inference
const person1={
    name: 'Me',
    age: 10,
    hobbies: ["sports","cooking",90],
    role: ROLES.ADMIN,
}
//slight inference
const person2:object={
    name: "hi",
    age: 10
}

//key-type pair
const person3: {
name: string,
age: number,
role: [number, string] // Tuple type
} = {
    name: "test",
    age: 12,
    role: [4, 'string'] 
}

// object embedded in object
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

  let activities :string[]
  let mixtype: any[]

  activities = ['yo','still']
  mixtype = [1,2,'zzzz']

  //person3.role[1]=5 //ERROR

  for(const i of activities){
      console.log(i.toUpperCase())
  }
console.log("Person3 age is "+ person3.age)
console.log("Person 1 hobbies is "+ person1.hobbies)