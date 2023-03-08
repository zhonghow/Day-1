function VowelCount(string) {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            counter++
        }
    }
    return counter
}

console.log(VowelCount("hello")) // 2
console.log(VowelCount("world")) // 1