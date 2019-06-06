// ?: optional. not care about passed or not
// function greet(greeting?:string) {
//   return `, John!`
// }

// const message:string = greet()


// val:type = 'default value'
// function greet(greeting:string, name:string = 'john'):string {
//   return `${greeting}, ${name}!`
// }


// extracting types
type Salutation = {greeting:string, name:string}

function greet({greeting, name}:Salutation) {
  return `${greeting}, ${name}`
}

const message:string = greet({greeting: 'Hello', name:'john'})
