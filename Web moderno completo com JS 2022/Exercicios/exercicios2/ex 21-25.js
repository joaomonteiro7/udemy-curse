console.log("__________________ex21____________________")
function numPalavras(string) {
  let array = []
  array = string.split(" ")
  return array.length
}
console.log(numPalavras("abc def oasifj ojsafi"))

console.log("__________________ex22____________________")
function countCharacter(string, char='a') {
  let contador = 0
  for(character of string){
    if(character == char)
      contador++
  }
  return contador
}
console.log(countCharacter('asfasfasg asf'))