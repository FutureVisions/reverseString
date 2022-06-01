function reverseString(str) {
  stringy = [];
  for ( let i = str.length-1; i >= 0; i--) {
    stringy.push(str[i])
  }
  return stringy.join('')
};
console.log(reverseString('hello there'));

function reverseString2(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString2('cookie'));

const reverseString3 = (str) => str.split('').reverse().join('')

console.log(reverseString3('apple'));