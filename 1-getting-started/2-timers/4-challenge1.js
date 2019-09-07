const theOneFunc = (x) => {
    setTimeout((x) => {
        console.log('Hello after ',x);
    }, x * 1000);
};
// Hello after 4 seconds
// Hello after 8 seconds
for (var i = 0; i < 8;) {
    i = i + 4;
    theOneFunc(i);
}
// You can define only ONE function
