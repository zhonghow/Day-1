function firstNonRepeated(string) {
    
    let newString = string.split("")
    let dict = {}
    for (char of newString) {
        if (char in dict) dict[char] += 1
        else dict[char] = 1
    }

    for (item in dict) {
        if (dict[item] == 1) {
            return item
        }
    }
    return null
}

console.log(firstNonRepeated("test")) // e
console.log(firstNonRepeated("teeter")) // r
console.log(firstNonRepeated("trend")) // t
console.log(firstNonRepeated("aabbcc")) // null