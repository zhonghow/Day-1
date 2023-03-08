function capitalize(string) {
    // let newString =
    //     string.toLowerCase()
    //         .split(" ")
    //         .map(capitalize => capitalize.charAt(0).toUpperCase() + capitalize.slice(1))
    //         .join(" ");
    // return newString;

    let words = string.split(" ");
    let capitalizedWords = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        let firstLetter = word[0].toUpperCase();
        let restOfWords = word.slice(1).toLowerCase()
        let capitalizedWord = firstLetter + restOfWords
        capitalizedWords.push(capitalizedWord) 
    }
    
    return capitalizedWords.join(" ")
}

console.log(capitalize("hello world")); // Hello World
console.log(capitalize("tHe qUiCk bRoWn fOx")); // The Quick Brown Fox
console.log(capitalize("bEsT iN pEnAnG")); // Best In Penang