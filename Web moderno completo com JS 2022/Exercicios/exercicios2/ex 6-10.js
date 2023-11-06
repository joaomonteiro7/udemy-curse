console.log("__________________ex6____________________")
const inverso = (param) =>{
  if(typeof param == 'boolean')
    return !param
  if(typeof param == 'string')
    return `bool ou num esperado, o param e ${typeof param}`
  else
    return -param
}
console.log(inverso("1"))

console.log("__________________ex7____________________")


console.log("__________________ex8____________________")
const mult = (num1, num2) => {
  let result = 0
  for(let i=0; i<num2; i++)
    result+=num1
  return result
}
console.log(mult(5,2))

console.log("__________________ex8____________________")
const dobro = (param1, param2)=>{
  let array = []
  for(let i=0; i<param2; i++)
    array.push(param1)
  return array
}
console.log(dobro("a", 5))

console.log("__________________ex9____________________")
const simbolo = (param1) => {
  result = ""
  for(let i=0; i<param1; i++)
    result+="+"
  return result
}
console.log(simbolo(2))

console.log("__________________ex10____________________")
const array = [1,2,3,'o']
const firstLast = (array) => {
  let result = []
  result.push(array[0], array[array.length-1])
  return result
}
console.log(firstLast(array))