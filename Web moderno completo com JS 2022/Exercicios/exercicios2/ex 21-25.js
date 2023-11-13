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

console.log("__________________ex23____________________")
/* possibility 1 */
function searchWord(miniWord, words) {
  const array = []
  for(word of words){
    if(word.includes(miniWord))
      array.push(word)
  }
  return array
}
console.log(searchWord('ao', ['programacao', 'mobile', 'profissional']))

/* possibility 2 */
function searchWord2(miniWord, words) {
  return words.filter(word => word.includes(miniWord))
}
console.log(searchWord2('ao', ['programacao', 'mobile', 'profissional']))

console.log("__________________ex24____________________")
function noConsoante(string) {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  vogais.forEach(vogal => string = string.replace(vogal, ''))
  return string
}
console.log(noConsoante('joao'))

console.log("__________________ex25____________________")
function keysValues(obj) {
  let keyValueInvert
  keyValueInvert = Object.entries(obj).map(keyValue => keyValue.reverse())
  return Object.fromEntries(keyValueInvert)
}
console.log(keysValues({a:1, b:2, c:3}))