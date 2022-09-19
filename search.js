const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// const doesExist = lyrics.includes('pakhi');
const searchString = 'pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLoweCase = lyrics.toLowerCase();
// const doesExist = lyricsLoweCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLoweCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// ...............................................
// indexOf
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('can not find it');
}

// starstWith
console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodadta.pdf';
const otherFile = 'mypic.png';
console.log(lyrics.endsWith('sada'));