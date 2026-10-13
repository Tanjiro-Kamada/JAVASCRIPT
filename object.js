let person = {
    "name":"Benson Mikingo",
    "age":21,
    "address":"124 Monroe st",
    is_student:true,
    "my skills":["Cloud","SRE"]

}

console.log(person)

console.log(person.name)
console.log(person["is_student"])
console.log(person["my skills"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
