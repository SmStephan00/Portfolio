function flatten(array) {
     return array.flat(Infinity);


}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
function removeDupes(str) {
    return [...new Set(str.split(''))].join('')

}

 

console.log(removeDupes('abcd')) // -> 'abcd'

console.log(removeDupes('aabbccdd')) // -> 'abcd'

console.log(removeDupes('abcddbca')) // -> 'abcd'

console.log(removeDupes('abababcdcdcd')) // -> 'abcd'