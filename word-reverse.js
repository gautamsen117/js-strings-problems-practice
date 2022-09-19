function wordReverse(string){
    const words = string.split(' ');
    let reversed = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        reversed.push(element);
    }
    const reverse = reversed.join(' ');
    return reverse;
}

const myString = 'I am a good boy';
const reverse = wordReverse(myString);
console.log(reverse);