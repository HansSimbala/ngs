const theOneFunc = x => {
    setTimeout((x) => {
        console.log('Hello after ' + x + ' seconds');
    }, x * 1000, x);
};
// Hello after 4 seconds
// Hello after 8 seconds
for (var i = 0; i < 8;) {
    i = i + 4;
    theOneFunc(i);
}
// You can define only ONE function
